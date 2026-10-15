"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { COUNTRIES, DEFAULT_COUNTRY, isKnownDial, isPartialDial, isValidE164 } from "./countries";

/** A dial code is valid only when it exactly matches one in the country list. */
export const isValidDial = isKnownDial;

/**
 * Normalise what the visitor typed in the dial-code box: digits (and any
 * leading "+") become "+digits"; anything else (letters, symbols) is
 * kept as typed so the field shows as invalid instead of silently changing.
 */
export function normalizeDial(raw: string): string {
  const v = raw.replace(/\s/g, "");
  return /^\+*\d*$/.test(v) ? `+${v.replace(/\D/g, "")}` : raw;
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
 * when the dial code is not one in the country list, or the number is empty or
 * not plausible (4+ national digits, 7–15 digits in total, E.164).
 */
export function toE164(dial: string, national: string): string | null {
  const raw = national.trim();
  if (!isValidDial(dial) || !raw || !/^[\d\s().-]+$/.test(raw)) return null;
  const digits = raw.replace(/\D/g, "");
  const value = `${dial}${digits}`;
  if (digits.length < 4 || !isValidE164(value)) return null;
  return value;
}

const INVALID_MSG = "Enter a valid phone number (digits only, no letters).";
const INVALID_DIAL_MSG = "Enter a valid country code, e.g. +1 or +44";

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
  // Set on blur / failed submit; while typing, a code that is still a prefix of
  // a real one ("+3" on the way to "+380") is not shown as an error yet.
  const [dialTouched, setDialTouched] = useState(false);
  const country = iso2 ? COUNTRIES.find((c) => c.iso2 === iso2) : undefined;
  const dialInvalid = !isValidDial(dial) && (dialTouched || !isPartialDial(dial));

  // An unknown dial code is reported on the dial box itself, so the number box
  // only flags problems with the number.
  const validate = (el: HTMLInputElement, d: string) => {
    el.setCustomValidity(isValidDial(d) && el.value.trim() && !toE164(d, el.value) ? INVALID_MSG : "");
  };

  const applyDial = (next: string, nextIso2: string) => {
    setDial(next);
    setIso2(nextIso2);
    setDialTouched(false);
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
      <div className="relative flex shrink-0 items-center gap-1 rounded-l-xl border-r border-gray-200 pl-2.5 pr-1.5">
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
          onBlur={() => setDialTouched(true)}
          onInvalid={() => setDialTouched(true)}
          // Sized to its text: ~3.5ch for "+1", up to 5ch for "+3800".
          style={{ width: `${Math.min(5, Math.max(3.5, dial.length + 0.5))}ch` }}
          className="relative z-10 min-w-0 bg-transparent text-gray-700 outline-none"
        />
        <ChevronDown aria-hidden="true" className="pointer-events-none relative h-3 w-3 text-gray-400" />
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
