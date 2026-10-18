// Web3Forms Client-Side Integration Helper for Solvantra Global
// Official Web3Forms Submission Endpoint: https://api.web3forms.com/submit

export interface Web3FormsPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  sourcePage?: string;
  subject?: string;
  botcheck?: string; // Honeypot field — bots fill this, humans do not
  [key: string]: unknown;
}

export interface Web3FormsResult {
  success: boolean;
  message: string;
}

/**
 * Submits form data to the official Web3Forms API endpoint.
 * Destination inbox is configured via the access key on web3forms.com for info@solvantra.global.
 */
export async function submitToWeb3Forms(
  payload: Web3FormsPayload
): Promise<Web3FormsResult> {
  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    (typeof window !== "undefined"
      ? (window as unknown as { NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?: string })
          .NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
      : "");

  if (!accessKey || accessKey === "your_web3forms_access_key_here") {
    return {
      success: false,
      message:
        "Contact form submissions require a Web3Forms access key. Please configure NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your environment or email us directly at info@solvantra.global.",
    };
  }

  // Honeypot check: If the hidden botcheck field was filled, reject silently or flag
  if (payload.botcheck && payload.botcheck.trim() !== "") {
    return {
      success: false,
      message: "Submission flagged as automated spam.",
    };
  }

  try {
    const submissionBody: Record<string, unknown> = {
      access_key: accessKey,
      from_name: "Solvantra Global Website",
      subject: payload.subject || "New Website Inquiry — Solvantra Global",
      name: payload.name.trim(),
      email: payload.email.trim(),
      botcheck: payload.botcheck || "",
    };

    if (payload.phone?.trim()) {
      submissionBody.phone = payload.phone.trim();
    }
    if (payload.company?.trim()) {
      submissionBody.company = payload.company.trim();
    }
    if (payload.service?.trim()) {
      submissionBody.service_interest = payload.service.trim();
    }
    if (payload.message?.trim()) {
      submissionBody.message = payload.message.trim();
    }
    if (payload.sourcePage?.trim()) {
      submissionBody.source_page = payload.sourcePage.trim();
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(submissionBody),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return {
        success: true,
        message:
          data.message ||
          "Thank you for contacting Solvantra Global. Your message has been received and our team will get in touch shortly.",
      };
    } else {
      return {
        success: false,
        message:
          data.message ||
          "We could not process your submission. Please try again or reach out directly to info@solvantra.global.",
      };
    }
  } catch (error) {
    console.error("Web3Forms submission error:", error);
    return {
      success: false,
      message:
        "A network error occurred while submitting your message. Please check your connection or email info@solvantra.global directly.",
    };
  }
}
