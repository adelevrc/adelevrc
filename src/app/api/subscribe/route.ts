import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextResponse } from 'next/server';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY as string,
  server: process.env.MAILCHIMP_SERVER_PREFIX as string,
});



export async function POST(req: Request) {
    const { language , email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required', message: "400" });
  }

  try {
    const listId = process.env.MAILCHIMP_AUDIENCE_ID as string;
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      language:language.toLowerCase(),
      status: 'subscribed',
      merge_fields: {
        LANGUAGE: language.toLowerCase()
  }
    });
    
    return NextResponse.json({ message: '200' });
  } catch (error: any) {
    return NextResponse.json({
      error: `Error subscribing to the newsletter: ${error.message}`,
    });
  }
}
