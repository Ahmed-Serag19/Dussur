"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/lib/contact-validation";
import { sendEmail } from "@/lib/email-service";
import { FormInput } from "@/components/ui/form-input";
import { FormTextarea } from "@/components/ui/form-textarea";
import { SubmitButton } from "@/components/ui/submit-button";
import type { z } from "zod";

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const success = await sendEmail({
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: "eng.abdulwahab7@gmail.com",
      });

      if (success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6">
      <div className="bg-card rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
        <h2 className="text-xl sm:text-2xl font-bold text-card-foreground mb-6 sm:mb-8">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <FormInput
              label="Name"
              name="name"
              type="text"
              placeholder="Your name"
              register={register}
              error={errors.name}
            />

            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              register={register}
              error={errors.email}
            />
          </div>

          <FormInput
            label="Subject"
            name="subject"
            type="text"
            placeholder="Message subject"
            register={register}
            error={errors.subject}
          />

          <FormTextarea
            label="Message"
            name="message"
            placeholder="Your message"
            register={register}
            error={errors.message}
          />

          <div className="space-y-4">
            <SubmitButton isSubmitting={isSubmitting} />

            {submitStatus === "success" && (
              <p className="text-sm sm:text-base text-green-600 dark:text-green-400 text-center animate-fade-in">
                Message sent successfully!
              </p>
            )}

            {submitStatus === "error" && (
              <p className="text-sm sm:text-base text-destructive text-center animate-fade-in">
                Failed to send message. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
