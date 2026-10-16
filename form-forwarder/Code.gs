/**
 * RapidFix form forwarder (Google Apps Script).
 * Receives JSON from the website's Contact / Become-a-Partner forms and emails it
 * to partnership@getrapidfix.com. Setup steps: see form-forwarder/README.md
 */
const TO_EMAIL = "partnership@getrapidfix.com";
const SITE_NAME = "RapidFix LLC website";
const MAX_FIELD_LEN = 2000;
const THROTTLE_SECONDS = 20; // same sender can't submit more often than this

const FORM_TITLES = {
  contact: "New Quote Request",
  vendor: "New Partner / Vendor Application",
};

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");

    // Honeypot: real visitors never fill this hidden field. Pretend success to bots.
    if (data._hp) return reply({ ok: true });

    const formType = data.formType;
    if (!FORM_TITLES[formType]) return reply({ ok: false, error: "Unknown form." });

    const email = clean(data.email);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return reply({ ok: false, error: "Please enter a valid email address." });
    }

    // Light spam throttle
    const cache = CacheService.getScriptCache();
    const key = "t_" + Utilities.base64EncodeWebSafe(email).slice(0, 80);
    if (cache.get(key)) {
      return reply({ ok: false, error: "Please wait a moment before submitting again." });
    }
    cache.put(key, "1", THROTTLE_SECONDS);

    const skip = { formType: 1, _hp: 1 };
    const rows = Object.keys(data)
      .filter((k) => !skip[k] && clean(data[k]) !== "")
      .map((k) => [label(k), clean(data[k])]);

    const name =
      clean(data.name) || [clean(data.first_name), clean(data.last_name)].join(" ").trim() || email;
    const subject = FORM_TITLES[formType] + " - " + name;

    const text = rows.map((r) => r[0] + ": " + r[1]).join("\n");
    const html =
      '<div style="font-family:Arial,sans-serif;font-size:14px;color:#222">' +
      "<h2 style=\"margin:0 0 12px\">" + esc(FORM_TITLES[formType]) + "</h2>" +
      '<table cellpadding="6" style="border-collapse:collapse">' +
      rows
        .map(
          (r) =>
            '<tr><td style="border-bottom:1px solid #eee;font-weight:bold;vertical-align:top">' +
            esc(r[0]) + '</td><td style="border-bottom:1px solid #eee;white-space:pre-wrap">' +
            esc(r[1]) + "</td></tr>"
        )
        .join("") +
      "</table><p style=\"color:#888;font-size:12px\">Sent from the " + SITE_NAME +
      ". Hit Reply to respond to the sender.</p></div>";

    GmailApp.sendEmail(TO_EMAIL, subject, text, {
      htmlBody: html,
      replyTo: email,
      name: SITE_NAME,
    });

    return reply({ ok: true });
  } catch (err) {
    console.error(err);
    return reply({ ok: false, error: "Server error. Please call us instead." });
  }
}

// Visiting the URL in a browser just confirms it's deployed.
function doGet() {
  return reply({ ok: true, service: "rapidfix-form-forwarder" });
}

function clean(v) {
  return String(v == null ? "" : v).trim().slice(0, MAX_FIELD_LEN);
}
function label(k) {
  return k.replace(/_/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase());
}
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Run this once from the editor to test: sends a sample email to TO_EMAIL. */
function testSend() {
  const res = doPost({
    postData: {
      contents: JSON.stringify({
        formType: "contact", name: "Test User", email: TO_EMAIL,
        phone: "555-123-4567", message: "Test from Apps Script editor",
      }),
    },
  });
  console.log(res.getContent());
}
