import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, sector, handoffMessage } = body;

    // TODO: connect to email/CRM (e.g. HubSpot, Salesforce, SendGrid, Resend, or custom webhook)
    console.log("[CONSULTATION_FORM_SUBMISSION]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      sector,
      handoffMessage,
    });

    return NextResponse.json({
      success: true,
      message: "Consultation request recorded successfully.",
    });
  } catch (error) {
    console.error("[CONSULTATION_FORM_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to process consultation request." },
      { status: 500 }
    );
  }
}
