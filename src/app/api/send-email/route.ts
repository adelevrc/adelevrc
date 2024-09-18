// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Définir le type des données attendues dans le corps de la requête
interface ContactFormData {
  lastname: string;
  firstname: string;
  email: string;
  phoneNumber:string;
  contactMethod: 'mail' | 'phone';
  message: string;
  newsletter: boolean;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USER,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  const data: ContactFormData = await request.json();

     const sanitizedData = {
      ...data,
      lastname: data.lastname.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      firstname: data.firstname.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      email: data.email?.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      phoneNumber: data.phoneNumber?.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      message: data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
    };

    const mailOptions = {
      from: sanitizedData.email,
      to: 'adele.vercaygne@gmail.com',
      subject: 'Nouvelle demande de contact via le site internet',
      text: `
        Une nouvelle demande de contact a été faite via le site internet
        Nom: ${sanitizedData.lastname}
        Prénom: ${sanitizedData.firstname}
        Méthode de contact: ${sanitizedData.contactMethod}
        Message: ${sanitizedData.message}
        Email: ${sanitizedData.email || 'Non fourni'}
        Téléphone: ${sanitizedData.phoneNumber || 'Non fourni'}
        Intéressé par la newsletter: ${sanitizedData.newsletter ? 'Oui' : 'Non'}
      `,
    };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Success: email was sent' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'email' });
  }
}