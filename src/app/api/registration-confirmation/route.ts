import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

interface IFormInput {
  lastname: string;
  firstname:string;
  email: string;
}

export const POST = async (req: NextRequest) => {
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
            <meta charset="UTF-8">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    color: #333;
                    padding: 20px;
                    color: #121212bf;
                }
                .email-container {
                    max-width: 600px;
                    margin: auto;
                    padding: 20px;
                    border-radius: 8px;
                    color: #121212bf;
                }
                .header {
                    text-align: center;
                    padding: 20px;
                    color: #333333;
                    font-family: "Libre Bodoni, serif";
                }
                .content {
                    margin-top: 20px;
                }
                li {
                    list-style-type: circle;
                    padding: 0.2rem 0;
                }
                .signature {
                    text-align: right;
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
                    <h1>Bienvenue dans la newsletter ${firstname + " " + lastname} !</h1>
                </div>
                <div class="content">
                    <p>Merci pour ton inscription !</p>
                    <p>Dans la newsletter mensuelle, qui arrive à chaque fois en début de mois, tu trouveras :</p>
                    <ul>
                        <li>Annonce du thème du mois</li>
                        <li>Un conseil de neurosciences expliqué avec mise en pratique</li>
                        <li>Avant première sur les cours exceptionnels, retraites, ateliers...</li>
                        <li>Annonce des réductions en exclusivité</li>
                        <li>Challenge mensuel</li>
                    </ul>
                    <div class="signature">
                        <p>À bientôt !</p>
                        <p>Adèle</p>
                    </div>
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
    subject: 'Votre inscription à la newsletter est confirmée ! ❤️',  
    html: htmlTemplate,

  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Freebie envoyé avec succès !' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Erreur lors de l'envoi de l'email" }, { status: 500 });
  }
}

