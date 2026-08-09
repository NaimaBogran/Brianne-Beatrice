# Contact Form Email Delivery

## How it works

The contact form (`/api/contact`) sends email via **nodemailer + Gmail SMTP**:

- **Transport:** Gmail service (`smtp.gmail.com`)
- **Sender account:** `bribeats@gmail.com` (sends from and to itself)
- **Auth:** Gmail App Password stored as the `GMAIL_APP_PASSWORD` environment secret — not the Gmail account password
- **Reply-To:** Set to the visitor's email address, so hitting Reply in Gmail goes directly to them

## Verified working

A test submission was sent and confirmed received with Gmail message ID `eec2b2b5-4848-ad84-fc43-2f8372101ca4@gmail.com`. End-to-end delivery is active.

## Keeping this working

| If you…                              | Then you need to…                                                                 |
|--------------------------------------|-----------------------------------------------------------------------------------|
| Change the Gmail account             | Generate a new App Password for the new account and update the `GMAIL_APP_PASSWORD` secret |
| Enable 2-Step Verification again     | Re-generate an App Password (they're tied to 2-Step being on)                    |
| See delivery failures in logs        | Check that `GMAIL_APP_PASSWORD` is still set and the App Password hasn't been revoked |
| Want to use a custom domain          | Switch to Resend (already integrated) or another SMTP provider and update `contact.ts` |

## App Password setup (for reference)

Gmail App Passwords require 2-Step Verification to be enabled on the account:

1. Go to **Google Account → Security → 2-Step Verification → App passwords**
2. Create a new app password (name it e.g. "Personal Branding Site")
3. Copy the 16-character password and set it as the `GMAIL_APP_PASSWORD` secret in Replit

## Log signature

A successful send logs:
```
INFO: Contact email sent successfully  messageId: "<...@gmail.com>"
```

A failure logs:
```
ERROR: Failed to send contact email  error: "..."
```
