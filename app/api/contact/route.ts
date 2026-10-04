import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      email,
      phone,
      projectType,
      projectStage,
      units,
      message,
    } = body;

    if (!name || !company || !email || !projectType || !projectStage) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: "PropTwin Website <onboarding@resend.dev>",
      to: ["info@proptwin.in"],
      replyTo: email,

      subject: `New PropTwin Project Enquiry — ${company}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; color: #171717;">

          <h1 style="font-size: 28px;">
            New PropTwin Project Enquiry
          </h1>

          <p style="color: #666;">
            A new project enquiry has been submitted through the PropTwin website.
          </p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 25px 0;" />

          <h2>Contact Details</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Company:</strong> ${company}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Phone:</strong> ${phone || "Not provided"}
          </p>

          <h2>Project Details</h2>

          <p>
            <strong>Project Type:</strong> ${projectType}
          </p>

          <p>
            <strong>Project Stage:</strong> ${projectStage}
          </p>

          <p>
            <strong>Approximate Units:</strong> ${units || "Not provided"}
          </p>

          <h2>Requirement</h2>

          <p style="white-space: pre-line;">
            ${message || "No additional requirement provided."}
          </p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 25px 0;" />

          <p style="font-size: 13px; color: #888;">
            Submitted through proptwin.in
          </p>

        </div>
      `,
    });

    if (result.error) {
      console.error(result.error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send enquiry.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}