import * as z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must not exceed 100 characters"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must not exceed 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});
