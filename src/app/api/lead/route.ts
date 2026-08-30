import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidUrl(value: string) {
  if (!value) return true; // optional field
  try {
    const url = new URL(value.startsWith("http") ? value : `https://${value}`);
    return Boolean(url.hostname);
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  let body: Record<string, string | boolean>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — bots fill this hidden field, humans never see it.
  if (body.company_website) {
    return NextResponse.json({ success: true, message: "Thanks — your enquiry has been received." });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const websiteUrl = String(body.websiteUrl ?? "").trim();
  const businessName = String(body.businessName ?? "").trim();
  const targetLocation = String(body.targetLocation ?? "").trim();
  const goal = String(body.goal ?? "").trim();
  const message = String(body.message ?? "").trim();
  const consent = body.consent === "true" || body.consent === true;

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your full name.";
  if (!email || !isValidEmail(email)) errors.email = "Please enter a valid email address.";
  if (websiteUrl && !isValidUrl(websiteUrl)) errors.websiteUrl = "Please enter a valid website URL.";
  if (!consent) errors.consent = "Please confirm you're happy to be contacted.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ success: false, message: "Please check the form for errors.", errors }, { status: 422 });
  }

  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is not configured.");
    return NextResponse.json(
      { success: false, message: "This form isn't fully configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const payload = {
    access_key: accessKey,
    subject: `New SEO enquiry from ${name}${businessName ? ` (${businessName})` : ""}`,
    from_name: "Rank Page 1 — SEO Enquiry Form",
    name,
    email,
    website_url: websiteUrl || "Not provided",
    business_name: businessName || "Not provided",
    target_location: targetLocation || "Not provided",
    main_seo_goal: goal || "Not provided",
    message: message || "Not provided",
  };

  try {
    const web3formsResponse = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await web3formsResponse.json();

    if (!web3formsResponse.ok || !result.success) {
      return NextResponse.json(
        { success: false, message: "We couldn't send your enquiry. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, message: "Thanks — your enquiry has been received." });
  } catch (error) {
    console.error("Web3Forms submission failed", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong sending your enquiry. Please try again." },
      { status: 500 },
    );
  }
}
