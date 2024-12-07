"use client";

import { FieldError, UseFormRegister } from "react-hook-form";

interface FormTextareaProps {
  label: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

export function FormTextarea({
  label,
  name,
  placeholder,
  register,
  error,
}: FormTextareaProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <textarea
        id={name}
        {...register(name)}
        placeholder={placeholder}
        rows={5}
        className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
      />
      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </div>
  );
}
