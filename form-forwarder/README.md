# Form forwarder (Google Workspace, ~5 min, free)

Both site forms (Contact and Become a Partner) POST to a small Google Apps Script,
which emails the submission to **partnership@getrapidfix.com**. It runs on your Google
Workspace account, so it needs no server, PHP or extra service on Hostinger.

1. Sign in to Google as a Workspace user (ideally partnership@getrapidfix.com) and go to <https://script.google.com> → **New project**.
2. Delete the default code, paste in everything from `Code.gs`, click **Save**.
3. Pick `testSend` in the function dropdown → **Run**. Approve the Gmail permission prompt. Check the partnership@ inbox for the test email.
4. **Deploy → New deployment → type: Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   → **Deploy**, then copy the **Web app URL** (ends in `/exec`).
5. In GitHub, edit `src/lib/submitForm.ts` and replace `PASTE_YOUR_APPS_SCRIPT_URL_HERE` with that URL. Commit; rebuild/redeploy the site.

If you later change `Code.gs`, use **Deploy → Manage deployments → Edit → New version** (the URL stays the same).

Notes
- Replies: the email's Reply-To is the visitor's address, so you can just hit Reply.
- Spam: hidden honeypot field + 20-second per-email throttle.
- Gmail sends ~1,500+ emails/day on Workspace, far more than needed.
- The Partner form collects EIN; it travels over HTTPS to your own mailbox only.
