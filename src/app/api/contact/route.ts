import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { phone, name, projectName } = await request.json();

    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
    }

    const leadType = projectName ? `Brochure Request for ${projectName}` : 'Callback Request';
    const emailSubject = projectName 
      ? `New Lead: Brochure Download for ${projectName}`
      : 'New Lead: Call Request from Rudraksha Website';

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || '',
      },
      body: JSON.stringify({
        sender: {
          name: 'Rudraksha Website',
          email: 'aafaqueshaikh555@gmail.com'
        },
        to: [
          {
            email: 'rudrakshproperties7079@gmail.com',
            name: 'Rudraksha Admin'
          }
        ],
        subject: emailSubject,
        htmlContent: `
          <html>
            <body style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #000;">New Property Lead!</h2>
              <p>A new lead has been submitted on the Rudraksha Properties website.</p>
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 12px; margin-top: 20px; border: 1px solid #e5e7eb;">
                <p style="margin: 0 0 10px 0; font-size: 15px;"><strong>Lead Source:</strong> ${leadType}</p>
                <p style="margin: 0 0 10px 0; font-size: 15px;"><strong>Name:</strong> ${name || 'N/A'}</p>
                <p style="margin: 0; font-size: 15px;"><strong>Phone Number:</strong> ${phone}</p>
              </div>
            </body>
          </html>
        `
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API Error:', errorData);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
