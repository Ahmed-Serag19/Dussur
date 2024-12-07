"use client";

import { FieldError, UseFormRegister } from "react-hook-form";

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

export function FormInput({
  label,
  name,
  type,
  placeholder,
  register,
  error,
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
      />
      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </div>
  );
}
