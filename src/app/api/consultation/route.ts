import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      fullName,
      email,
      company,
      organization,
      serviceCategory,
      service,
      sector,
      message,
      handoffMessage,
      website,
      hp,
    } = body;

    // Honeypot spam defense: bots fill hidden fields; humans do not
    if (website || hp) {
      console.warn("[SPAM_DETECTED_HONEYPOT_TRIGGERED]", { timestamp: new Date().toISOString() });
      return NextResponse.json({
        success: true,
        message: "Enquiry received successfully.",
      });
    }

    const resolvedName = (name || fullName || "").trim();
    const resolvedEmail = (email || "").trim();
    const resolvedCompany = (company || organization || "").trim();
    const resolvedService = (serviceCategory || service || sector || "").trim();
    const resolvedMessage = (message || handoffMessage || "").trim();

    // Validation
    if (!resolvedName) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (!resolvedEmail || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(resolvedEmail)) {
      return NextResponse.json(
        { success: false, error: "A valid work email is required." },
        { status: 400 }
      );
    }

    // TODO: connect to email/CRM (e.g. HubSpot, Salesforce, SendGrid, Resend, or custom webhook)
    console.log("[ENQUIRY_OR_CONSULTATION_SUBMISSION]", {
      timestamp: new Date().toISOString(),
      name: resolvedName,
      email: resolvedEmail,
      company: resolvedCompany,
      serviceCategory: resolvedService,
      message: resolvedMessage,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully.",
      data: {
        name: resolvedName,
        email: resolvedEmail,
      },
    });
  } catch (error) {
    console.error("[FORM_SUBMISSION_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to process form submission." },
      { status: 500 }
    );
  }
}
