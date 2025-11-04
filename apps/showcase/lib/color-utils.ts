/**
 * Convert HSL color string to Hex format for React Navigation
 * React Navigation doesn't support HSL colors, so we need to convert them
 *
 * @param hslString - HSL string in format "hsl(209 100% 32%)" or "209 100% 32%"
 * @returns Hex color string like "#005EA2"
 */
export function hslToHex(hslString: string): string {
  // Extract H, S, L values from string
  // Handle both "hsl(209 100% 32%)" and "209 100% 32%" formats
  const match = hslString.match(/(\d+\.?\d*)\s+(\d+\.?\d*)%\s+(\d+\.?\d*)%/);

  if (!match) {
    console.warn(`Invalid HSL color format: ${hslString}`);
    return '#000000'; // Fallback to black
  }

  const h = parseFloat(match[1]);
  const s = parseFloat(match[2]) / 100;
  const l = parseFloat(match[3]) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  // Convert to 0-255 range and then to hex
  const toHex = (value: number) => {
    const hex = Math.round((value + m) * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Convert a theme colors object (with HSL strings) to hex format
 * for use with React Navigation
 */
export function convertColorsToHex(colors: Record<string, string>): Record<string, string> {
  const hexColors: Record<string, string> = {};

  for (const [key, value] of Object.entries(colors)) {
    // Skip non-color values like radius
    if (key === 'radius' || typeof value !== 'string') {
      hexColors[key] = value;
      continue;
    }

    // Convert HSL to hex
    hexColors[key] = hslToHex(value);
  }

  return hexColors;
}
