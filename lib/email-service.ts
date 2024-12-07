import emailjs from "@emailjs/browser";

interface EmailData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      data as unknown as Record<string, unknown>,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
    return result.status === 200;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
}
