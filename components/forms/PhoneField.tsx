"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { COUNTRIES, DEFAULT_COUNTRY } from "./countries";

/**
 * Combine a dial code ("+1") and what the visitor typed into an E.164-style
 * value ("+14035551234"). Spaces, dashes, dots and parentheses are stripped;
 * anything else (letters, a second "+") makes the number invalid. Returns null
 * when the number is empty or not plausible (4+ national digits, 15 max total).
 */
export function toE164(dial: string, national: string): string | null {
  const raw = national.trim();
  if (!raw || !/^[\d\s().-]+$/.test(raw)) return null;
  const digits = raw.replace(/\D/g, "");
  const dialDigits = dial.replace(/\D/g, "");
  if (!dialDigits || digits.length < 4 || dialDigits.length + digits.length > 15) return null;
  return `+${dialDigits}${digits}`;
}

const INVALID_MSG = "Enter a valid phone number (digits only, no letters).";

type PhoneFieldProps = {
  /** Field name the backend already uses; the national number posts under it
   *  and the form's submit handler replaces it with the E.164 value. */
  name?: string;
  invalid?: boolean;
  placeholder?: string;
  ariaLabel?: string;
};

/**
 * Required phone input group: native country <select> (shown as flag + dial
 * code, default United States) on the left, tel input on the right. The tel
 * input carries `data-dial-code` so the submit handler can build the E.164
 * value with toE164().
 */
export function PhoneField({
  name = "phone_number",
  invalid = false,
  placeholder = "Phone number *",
  ariaLabel = "Phone number",
}: PhoneFieldProps) {
  const [iso2, setIso2] = useState(DEFAULT_COUNTRY);
  const inputRef = useRef<HTMLInputElement>(null);
  const country = COUNTRIES.find((c) => c.iso2 === iso2) ?? COUNTRIES[0];

  const validate = (el: HTMLInputElement, dial: string) => {
    el.setCustomValidity(el.value.trim() && !toE164(dial, el.value) ? INVALID_MSG : "");
  };

  return (
    <div
      className={
        "flex h-11 w-full items-stretch rounded-xl border border-gray-200 bg-white text-sm transition-colors focus-within:border-red focus-within:ring-2 focus-within:ring-red/20" +
        (invalid ? " !border-red ring-2 ring-red/20" : "")
      }
    >
      <div className="relative flex shrink-0 items-center gap-1 rounded-l-xl border-r border-gray-200 pl-3 pr-2">
        <span aria-hidden="true" className="text-base leading-none">
          {country.flag}
        </span>
        <span aria-hidden="true" className="text-gray-700">
          {country.dial}
        </span>
        <ChevronDown aria-hidden="true" className="h-3.5 w-3.5 text-gray-400" />
        <select
          aria-label="Country calling code"
          value={iso2}
          onChange={(e) => {
            const next = COUNTRIES.find((c) => c.iso2 === e.target.value) ?? COUNTRIES[0];
            setIso2(next.iso2);
            if (inputRef.current) validate(inputRef.current, next.dial);
          }}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        >
          {COUNTRIES.map((c) => (
            <option key={c.iso2} value={c.iso2}>
              {`${c.flag} ${c.name} ${c.dial}`}
            </option>
          ))}
        </select>
      </div>
      <input
        ref={inputRef}
        name={name}
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        required
        aria-label={ariaLabel}
        placeholder={placeholder}
        data-dial-code={country.dial}
        onChange={(e) => validate(e.currentTarget, country.dial)}
        className="h-full min-w-0 flex-1 rounded-r-xl bg-transparent px-3 outline-none"
      />
    </div>
  );
}
