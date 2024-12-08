import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

interface IFormInput {
  lastname: string;
  firstname:string;
  email: string;
}

export async function POST(req: NextRequest) {
  const { lastname,firstname , email }: IFormInput = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_HOST ??"", 
    port: process.env.NEXT_PUBLIC_PORT, 
    secure: process.env.NEXT_PUBLIC_SECURE, 
    auth: {
      user: process.env.NEXT_EMAIL_USER, 
      pass: process.env.NEXT_EMAIL_PASS, 
    },
  } as SMTPTransport.Options);

const htmlTemplate = `
    <html>
      <head>
        <style>
             body {
            font-family: Arial, sans-serif;
            background-color: #354639;
            color: #333;
            padding: 20px;
          }
          .email-container {
            max-width: 600px;
            margin: auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            padding: 20px;
            background-color: #61866a;
            color: white;
            border-radius: 8px 8px 0 0;
          }
          .content {
            margin-top: 20px;
          }
          .button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
            margin-top: 20px;
          }
          .footer {
            text-align: center;
            font-size: 12px;
            margin-top: 20px;
            color: #777;
          }
        </style>
      </head>
   <body>
        <div class="email-container">
          <div class="header">
            <h2>Votre Freebie - 5 techniques pour trouver son calme dans toutes les situations </h2>
          </div>
          <div class="content">
            <p>Bonjour ${firstname + " " + lastname},</p>
          <p>Merci pour votre inscription ! </p>
          <p>Nous sommes ravis de vous offrir notre ebook exclusif "5 techniques pour gérer toutes les situations".</p>
            <p> Pour le récupérer, vous pouvez cliquer sur le lien ci-dessous  : </p>
            <a href="https://www.adelevrc.com/ebook_trouver_son_calme.pdf">
           Récupérer mon freebie
            </a>
          </div>
          <div class="footer">
            <p>Si vous avez des questions, n'hésitez pas à nous contacter à l'adresse suivante : contact@adelevrc.com</p>
            <p>&copy; 2024 Adèle Vercaygne - Tous droits réservés.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.NEXT_EMAIL_USER,
    to: email,
    subject: 'Freebie de yoga : 5 astuces pour trouver son calme',
    html: htmlTemplate,

  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Freebie envoyé avec succès !' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Erreur lors de l'envoi de l'email" }, { status: 500 });
  }
}

