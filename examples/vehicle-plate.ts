// Selected from packages/shared/src/vehicle.ts.
export const VEHICLE_PLATE_MIN_LENGTH = 4;
export const VEHICLE_PLATE_MAX_LENGTH = 32;
const VEHICLE_PLATE_ALLOWED_CHARACTERS = /^[\p{L}\p{N}\s./-]+$/u;
const VEHICLE_PLATE_DIGITS = /[0-9\u06f0-\u06f9\u0660-\u0669]/gu;
export function normalizeVehiclePlate(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const normalized = value.normalize("NFKC")
    .replace(/[\u0640\u2013\u2014]/gu, "-")
    .replace(/[\u200c\u200d]/gu, " ")
    .replace(/\s+/gu, " ").trim();
  if (normalized.length < VEHICLE_PLATE_MIN_LENGTH ||
      normalized.length > VEHICLE_PLATE_MAX_LENGTH ||
      !VEHICLE_PLATE_ALLOWED_CHARACTERS.test(normalized)) return null;
  const digits = normalized.match(VEHICLE_PLATE_DIGITS) ?? [];
  return digits.length >= 4 ? normalized : null;
}
export function isValidVehiclePlate(value: unknown): value is string {
  return normalizeVehiclePlate(value) !== null;
}
