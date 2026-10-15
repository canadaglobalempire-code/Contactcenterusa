"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { COUNTRIES, DEFAULT_COUNTRY } from "./countries";

/** A dial code is "+" followed by 1–4 digits. */
export const isValidDial = (dial: string) => /^\+\d{1,4}$/.test(dial);

/**
 * Normalise what the visitor typed in the dial-code box: digits (and an
 * optional leading "+") become "+digits"; anything else (letters, symbols) is
 * kept as typed so the field shows as invalid instead of silently changing.
 */
export function normalizeDial(raw: string): string {
  const v = raw.replace(/\s/g, "");
  return /^\+?\d*$/.test(v) ? `+${v.replace(/\D/g, "")}` : raw;
}

/** Country for an exact dial code; COUNTRIES lists pinned (US, CA, GB) first,
 *  so a shared code like +1 resolves to the pinned country. */
export const countryForDial = (dial: string, preferIso2?: string) =>
  COUNTRIES.find((c) => c.iso2 === preferIso2 && c.dial === dial) ??
  COUNTRIES.find((c) => c.dial === dial);

/**
 * Combine a dial code ("+1") and what the visitor typed into an E.164-style
 * value ("+14035551234"). Spaces, dashes, dots and parentheses are stripped;
 * anything else (letters, a second "+") makes the number invalid. Returns null
 * when the dial code is not "+" and 1–4 digits, or the number is empty or not
 * plausible (4+ national digits, 7–15 digits in total).
 */
export function toE164(dial: string, national: string): string | null {
  const raw = national.trim();
  if (!isValidDial(dial) || !raw || !/^[\d\s().-]+$/.test(raw)) return null;
  const digits = raw.replace(/\D/g, "");
  const dialDigits = dial.slice(1);
  const total = dialDigits.length + digits.length;
  if (digits.length < 4 || total < 7 || total > 15) return null;
  return `+${dialDigits}${digits}`;
}

const INVALID_MSG = "Enter a valid phone number (digits only, no letters).";
const INVALID_DIAL_MSG = "Enter a country code: + followed by 1–4 digits.";

type PhoneFieldProps = {
  /** Field name the backend already uses; the national number posts under it
   *  and the form's submit handler replaces it with the E.164 value. */
  name?: string;
  invalid?: boolean;
  placeholder?: string;
  ariaLabel?: string;
};

const DEFAULT_DIAL = COUNTRIES.find((c) => c.iso2 === DEFAULT_COUNTRY)?.dial ?? "+1";

/**
 * Required phone input group. Left: flag + editable dial-code box + chevron,
 * with an invisible native country <select> underneath the whole group
 * (flag/chevron clicks open the list; the dial box sits above it and can be
 * typed into, e.g. "+380"). Right: tel input. The tel input carries
 * `data-dial-code` so the submit handler can build the E.164 value with
 * toE164(); the dial box has no name, so it is never posted on its own.
 */
export function PhoneField({
  name = "phone_number",
  invalid = false,
  placeholder = "Phone number *",
  ariaLabel = "Phone number",
}: PhoneFieldProps) {
  const [dial, setDial] = useState(DEFAULT_DIAL);
  const [iso2, setIso2] = useState<string>(DEFAULT_COUNTRY);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialRef = useRef<HTMLInputElement>(null);
  const country = iso2 ? COUNTRIES.find((c) => c.iso2 === iso2) : undefined;
  const dialInvalid = !isValidDial(dial);

  const validate = (el: HTMLInputElement, d: string) => {
    el.setCustomValidity(el.value.trim() && !toE164(d, el.value) ? INVALID_MSG : "");
  };

  const applyDial = (next: string, nextIso2: string) => {
    setDial(next);
    setIso2(nextIso2);
    dialRef.current?.setCustomValidity(isValidDial(next) ? "" : INVALID_DIAL_MSG);
    if (inputRef.current) validate(inputRef.current, next);
  };

  return (
    <div
      className={
        "flex h-11 w-full items-stretch rounded-xl border border-gray-200 bg-white text-sm transition-colors focus-within:border-red focus-within:ring-2 focus-within:ring-red/20" +
        (invalid || dialInvalid ? " !border-red ring-2 ring-red/20" : "")
      }
    >
      <div className="relative flex shrink-0 items-center gap-1 rounded-l-xl border-r border-gray-200 pl-3 pr-2">
        <span aria-hidden="true" className="pointer-events-none relative text-base leading-none">
          {country?.flag ?? "\u{1F310}"}
        </span>
        <input
          ref={dialRef}
          type="text"
          inputMode="numeric"
          autoComplete="tel-country-code"
          maxLength={5}
          aria-label="Country dial code"
          aria-invalid={dialInvalid || undefined}
          value={dial}
          onChange={(e) => {
            const next = normalizeDial(e.target.value);
            applyDial(next, countryForDial(next, iso2)?.iso2 ?? "");
          }}
          className="relative z-10 w-12 min-w-0 bg-transparent text-gray-700 outline-none"
        />
        <ChevronDown aria-hidden="true" className="pointer-events-none relative h-3.5 w-3.5 text-gray-400" />
        <select
          aria-label="Country calling code"
          value={iso2}
          onChange={(e) => {
            const next = COUNTRIES.find((c) => c.iso2 === e.target.value);
            if (next) applyDial(next.dial, next.iso2);
          }}
          className="absolute inset-0 z-0 h-full w-full cursor-pointer opacity-0"
        >
          <option value="" disabled hidden>
            {`\u{1F310} Other ${dial}`}
          </option>
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
        data-dial-code={dial}
        onChange={(e) => validate(e.currentTarget, dial)}
        className="h-full min-w-0 flex-1 rounded-r-xl bg-transparent px-3 outline-none"
      />
    </div>
  );
}
