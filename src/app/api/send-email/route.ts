// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Définir le type des données attendues dans le corps de la requête
interface ContactFormData {
  nom: string;
  prenom: string;
  email: string;
  phone:string;
  contactMethod: 'mail' | 'phone';
  message: string;
  newsletter: boolean;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  const data: ContactFormData = await request.json();

  const mailOptions = {
    from: data.email,
    to: 'adele.vercaygne@gmail.com',
    subject: 'Nouvelle demande de contact via le site internet',
    text: `
    Une nouvelle demande de contact a été faite via le site internet
      Nom: ${data.nom}
      Prénom: ${data.prenom}
      Méthode de contact: ${data.contactMethod}
      Message: ${data.message}
      Emai:${data.email}
      Téléphone:${data.phone}
      Intéressé par la newsletter: ${data.newsletter ? 'Oui' : 'Non'}
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
