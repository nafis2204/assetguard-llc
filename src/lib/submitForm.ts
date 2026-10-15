export type FormType = "contact" | "vendor";

// Paste your Google Apps Script "Web app" URL here (ends with /exec)
const ENDPOINT = "PASTE_YOUR_APPS_SCRIPT_URL_HERE";

export interface SubmitResult {
  ok: boolean;
  error?: string;
}

/**
 * Sends a form submission to partnership@getrapidfix.com via Google Apps Script.
 * `fields` = every form field (names become labels in the email).
 * `honeypot` = value of the hidden "website" input (should stay empty for humans).
 */
export async function submitForm(
  formType: FormType,
  fields: Record<string, string | undefined>,
  honeypot = ""
): Promise<SubmitResult> {
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      // text/plain avoids a CORS preflight, which Apps Script doesn't support
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...fields, formType, website: honeypot }),
    });
    const json = await res.json();
    if (json.ok) return { ok: true };
    return { ok: false, error: json.error || "Something went wrong. Please try again." };
  } catch {
    return { ok: false, error: "Network error. Please check your connection and try again." };
  }
}

