import { NextResponse } from "next/server";

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

    console.log("PropTwin enquiry received:", {
      name,
      company,
      email,
      phone,
      projectType,
      projectStage,
      units,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}