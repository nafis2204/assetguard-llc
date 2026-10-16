export type FormType = "contact" | "vendor";

// Google Apps Script "Web app" URL (ends with /exec). Setup: form-forwarder/README.md
const ENDPOINT = "PASTE_YOUR_APPS_SCRIPT_URL_HERE";

export interface SubmitResult {
  ok: boolean;
  error?: string;
}

/**
 * Sends a form submission to partnership@getrapidfix.com via Google Apps Script.
 * `fields` = every form field (keys become labels in the email).
 * `honeypot` = value of the hidden bot-trap input (stays empty for humans).
 */
export async function submitForm(
  formType: FormType,
  fields: Record<string, string | undefined>,
  honeypot = ""
): Promise<SubmitResult> {
  if (!ENDPOINT.startsWith("https://")) {
    return {
      ok: false,
      error: "The form isn't connected yet. Please call or email us directly.",
    };
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      // text/plain avoids a CORS preflight, which Apps Script doesn't support
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...fields, formType, _hp: honeypot }),
    });
    const json = await res.json();
    if (json.ok) return { ok: true };
    return { ok: false, error: json.error || "Something went wrong. Please try again." };
  } catch {
    return { ok: false, error: "Network error. Please check your connection and try again." };
  }
}
