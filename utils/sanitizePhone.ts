/**
 * Sanitizes and normalizes any Saudi phone number format
 * Converts Eastern Arabic Numerals (٠-٩) to Western Latin (0-9)
 */
export function sanitizeSaudiPhone(raw: string): { isValid: boolean; normalized: string } {
  const easternDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  let cleaned = raw;
  easternDigits.forEach((char, i) => {
    cleaned = cleaned.split(char).join(i.toString());
  });

  cleaned = cleaned.replace(/[\s\-\(\)\.]/g, '');

  if (cleaned.startsWith('00966')) {
    cleaned = '+966' + cleaned.substring(5);
  } else if (cleaned.startsWith('966')) {
    cleaned = '+966' + cleaned.substring(3);
  } else if (cleaned.startsWith('05')) {
    cleaned = '+966' + cleaned.substring(1);
  } else if (cleaned.startsWith('5')) {
    cleaned = '+966' + cleaned;
  }

  const saudiRegex = /^\+9665[0-9]{8}$/;
  const isValid = saudiRegex.test(cleaned);

  return { isValid, normalized: isValid ? cleaned : raw };
}
