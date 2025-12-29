import * as z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must not exceed 20 characters")
    .regex(/^[\p{L}\s]+$/u, "Name can only contain letters and spaces"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must not exceed 100 characters"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(30, "Subject must not exceed 30 characters")
    .regex(/^[\p{L}0-9\s.,!?-]+$/u, "Subject contains invalid characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must not exceed 500 characters")
    .regex(/^[\p{L}0-9\s.,!?@#$%&*()\-_+=\n]+$/u, "Message contains invalid characters"),
});
