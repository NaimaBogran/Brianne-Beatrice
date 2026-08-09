/**
 * Shared inquiry type constants for the contact form.
 * Used by both the frontend (dropdown options) and the API server (validation).
 * Adding or removing a value here updates both simultaneously.
 */

export const INQUIRY_TYPE_VALUES = [
  "Speaking",
  "Workshop/Coaching",
  "Directing",
  "Educational Collaboration",
  "Other",
] as const;

export type InquiryType = (typeof INQUIRY_TYPE_VALUES)[number];

/** Structured list for rendering the dropdown. */
export const INQUIRY_TYPES = INQUIRY_TYPE_VALUES.map((value) => ({
  value,
  label: value,
})) as { value: InquiryType; label: string }[];
