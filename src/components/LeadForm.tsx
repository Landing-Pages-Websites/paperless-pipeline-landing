"use client";

import React, { useState } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";

interface LeadFormProps {
  className?: string;
  ctaText?: string;
  budgetPrice?: string;
  onSuccess?: () => void;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function isValidPhone(value: string): boolean {
  return value.replace(/\D/g, '').length === 10;
}

export function LeadForm({ 
  className = "", 
  ctaText = "Get My Free Demo",
  budgetPrice = "$99/month",
  onSuccess 
}: LeadFormProps) {
  const { submit: submitLead } = useMegaLeadForm();
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!isValidPhone(phone)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitLead({
        firstName,
        lastName,
        email,
        phone,
        budget,
      });

      if (result.ok) {
        setIsSubmitted(true);
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      setError("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white/90 backdrop-blur rounded-xl p-8 border-2 border-primary shadow-2xl ${className}`}>
        <div className="text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">
            We'll be in touch within 24 hours to schedule your demo.
          </p>
          <div className="text-sm text-gray-500">
            Check your email for confirmation details.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white/90 backdrop-blur rounded-xl p-8 border-2 border-gray-200 shadow-2xl ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                name="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-0 transition-colors"
              />
            </div>
            <div>
              <input
                name="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-0 transition-colors"
              />
            </div>
          </div>
          
          <div>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-0 transition-colors"
            />
          </div>
          
          <div>
            <input
              name="phone"
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              placeholder="(555) 123-4567"
              required
              pattern="\(\d{3}\) \d{3}-\d{4}"
              title="Please enter a valid 10-digit phone number"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-0 transition-colors"
            />
          </div>

          <div>
            <p className="text-sm font-medium mb-2 text-gray-700">
              Our software starts at {budgetPrice}. Is this within your budget?
            </p>
            <div className="flex gap-3">
              <label className="flex-1 cursor-pointer">
                <input 
                  type="radio" 
                  name="budget" 
                  value="yes" 
                  required 
                  className="sr-only peer" 
                  onChange={(e) => setBudget(e.target.value)}
                />
                <div className="peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white border-2 border-gray-300 rounded-lg py-2.5 text-center font-semibold transition-all text-gray-700">
                  Yes
                </div>
              </label>
              <label className="flex-1 cursor-pointer">
                <input 
                  type="radio" 
                  name="budget" 
                  value="no" 
                  className="sr-only peer"
                  onChange={(e) => setBudget(e.target.value)}
                />
                <div className="peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white border-2 border-gray-300 rounded-lg py-2.5 text-center font-semibold transition-all text-gray-700">
                  No
                </div>
              </label>
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white font-bold py-4 px-6 rounded-lg hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {isSubmitting ? "Submitting..." : ctaText}
          </button>
        </div>
      </form>
      
      <div className="text-xs text-gray-500 text-center mt-4">
        No spam. We respect your privacy.
      </div>
    </div>
  );
}