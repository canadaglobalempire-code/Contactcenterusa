import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { fullName, company, email, phone, callVolume, services, message } =
      body;

    if (!fullName || !company || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the submission (replace with email service like Resend/Nodemailer in production)
    console.log("New contact form submission:", {
      fullName,
      company,
      email,
      phone,
      callVolume,
      services,
      message,
      submittedAt: new Date().toISOString(),
    });

    // TODO: Integrate with Resend or Nodemailer to send email notifications
    // Example with Resend:
    // await resend.emails.send({
    //   from: "Contact Center USA <noreply@contactcenterusa.com>",
    //   to: "info@contactcenterusa.com",
    //   subject: `New Lead: ${fullName} from ${company}`,
    //   html: `...`,
    // });

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
