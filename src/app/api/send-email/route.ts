import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  lastname: string;
  firstname: string;
  email: string;
  message: string;
  newsletter: boolean;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_EMAIL_USER,
    pass: process.env.NEXT_EMAIL_PASS,
  },
});



export async function POST(request: Request) {

  const data: ContactFormData = await request.json();

     const sanitizedData = {
      ...data,
      lastname: data.lastname.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      firstname: data.firstname.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      email: data.email?.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      message: data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
    };

    const mailOptions = {
      from: sanitizedData.email,
      to: 'adele.vercaygne@gmail.com',
      subject: '[CONTACT] - Nouvelle demande de contact via le site internet',
      text: `
        Une nouvelle demande de contact a été faite via le site internet
        Nom: ${sanitizedData.lastname}
        Prénom: ${sanitizedData.firstname}
        Message: ${sanitizedData.message}
        Email: ${sanitizedData.email || 'Non fourni'}
        Intéressé par la newsletter: ${sanitizedData.newsletter ? 'Oui' : 'Non'}
      `,
    };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: '200' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'email' });
  }
}
