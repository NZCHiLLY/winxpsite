import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { from, subject, message } = req.body;

  if (!from || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const tenantId = process.env.AZURE_TENANT_ID;
  const clientId = process.env.AZURE_CLIENT_ID;
  const clientSecret = process.env.AZURE_CLIENT_SECRET;
  const fromEmail = process.env.FROM_EMAIL;
  const toEmail = process.env.TO_EMAIL;

  if (!tenantId || !clientId || !clientSecret || !fromEmail || !toEmail) {
    console.error("Email service not configured — missing environment variables");
    return res.status(500).json({ error: "Email service not configured" });
  }

  try {
    const tokenRes = await fetch(
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          scope: "https://graph.microsoft.com/.default",
          grant_type: "client_credentials",
        }),
      }
    );

    if (!tokenRes.ok) {
      const err = await tokenRes.text();
      console.error("Token error:", err);
      return res.status(500).json({ error: "Failed to authenticate with email service" });
    }

    const { access_token } = await tokenRes.json();

    const sendRes = await fetch(
      `https://graph.microsoft.com/v1.0/users/${fromEmail}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject: `Portfolio Contact: ${subject}`,
            body: {
              contentType: "Text",
              content: `From: ${from}\n\n${message}`,
            },
            from: {
              emailAddress: { address: fromEmail },
            },
            toRecipients: [{ emailAddress: { address: toEmail } }],
          },
          saveToSentItems: false,
        }),
      }
    );

    if (!sendRes.ok) {
      const err = await sendRes.text();
      console.error("Send error:", err);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
