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

    // Forward to Web3Forms if configured
    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (accessKey && accessKey !== "your_web3forms_access_key_here") {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: accessKey,
            from_name: "Solvantra Global Website",
            subject: `New Inquiry — Solvantra Global (${resolvedService || "General"})`,
            name: resolvedName,
            email: resolvedEmail,
            company: resolvedCompany,
            service: resolvedService,
            message: resolvedMessage,
            botcheck: website || hp || "",
          }),
        });
      } catch (forwardErr) {
        console.error("[WEB3FORMS_FORWARDING_ERROR]", forwardErr);
      }
    }

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
