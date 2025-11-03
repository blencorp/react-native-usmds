/**
 * Agency Theme Definitions
 *
 * Official color palettes from government agency design systems,
 * converted to HSL format for consistency with NativeWind theming.
 *
 * Each theme includes light and dark mode variants with semantic color tokens:
 * - background, foreground, card, primary, secondary, accent
 * - muted, destructive, border, input, ring
 *
 * Sources:
 * - VA: https://design.va.gov/foundation/color-palette
 * - USDA: https://usda-fsa.github.io/fsa-design-system/visual-style/color/
 * - CMS: https://design.cms.gov/foundation/theme-colors/
 * - CDC: https://www.cdc.gov/wcms/4.0/cdc-wp/page-and-site-options/preferred-color-pairings.html
 * - California: https://designsystem.webstandards.ca.gov/
 * - Utah: https://designsystem.utah.gov/
 * - Maryland: https://digital.maryland.gov/design-system/
 * - New York: https://designsystem.ny.gov/
 */

import type { ThemeId } from './theme-context';

export type ThemeColors = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  radius: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
};

export type AgencyThemeDefinition = {
  light: ThemeColors;
  dark: ThemeColors;
};

// ============================================================================
// USWDS (Default) Theme
// ============================================================================
export const usaTheme: AgencyThemeDefinition = {
  light: {
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(0 0% 11%)',
    card: 'hsl(0 0% 100%)',
    cardForeground: 'hsl(0 0% 11%)',
    popover: 'hsl(0 0% 100%)',
    popoverForeground: 'hsl(0 0% 11%)',
    primary: 'hsl(209 100% 32%)', // USWDS Blue-60v
    primaryForeground: 'hsl(0 0% 100%)',
    secondary: 'hsl(3 61% 52%)', // USWDS Red-50v
    secondaryForeground: 'hsl(0 0% 100%)',
    muted: 'hsl(0 0% 94%)',
    mutedForeground: 'hsl(0 0% 45%)',
    accent: 'hsl(190 100% 44%)', // USWDS Cyan-30v
    accentForeground: 'hsl(0 0% 11%)',
    destructive: 'hsl(17 94% 43%)', // USWDS Red-warm-50v
    destructiveForeground: 'hsl(0 0% 100%)',
    border: 'hsl(204 3% 88%)',
    input: 'hsl(204 3% 88%)',
    ring: 'hsl(211 100% 57%)',
    radius: '0.625rem',
    chart1: 'hsl(209 100% 32%)',
    chart2: 'hsl(190 100% 44%)',
    chart3: 'hsl(128 100% 33%)',
    chart4: 'hsl(44 100% 59%)',
    chart5: 'hsl(3 61% 52%)',
  },
  dark: {
    background: 'hsl(0 0% 11%)',
    foreground: 'hsl(0 0% 94%)',
    card: 'hsl(0 0% 11%)',
    cardForeground: 'hsl(0 0% 94%)',
    popover: 'hsl(0 0% 11%)',
    popoverForeground: 'hsl(0 0% 94%)',
    primary: 'hsl(208 74% 68%)',
    primaryForeground: 'hsl(0 0% 11%)',
    secondary: 'hsl(3 77% 74%)',
    secondaryForeground: 'hsl(0 0% 11%)',
    muted: 'hsl(0 0% 18%)',
    mutedForeground: 'hsl(0 0% 68%)',
    accent: 'hsl(190 100% 54%)',
    accentForeground: 'hsl(0 0% 11%)',
    destructive: 'hsl(17 94% 53%)',
    destructiveForeground: 'hsl(0 0% 94%)',
    border: 'hsl(0 0% 27%)',
    input: 'hsl(0 0% 27%)',
    ring: 'hsl(211 100% 67%)',
    radius: '0.625rem',
    chart1: 'hsl(208 74% 68%)',
    chart2: 'hsl(190 100% 54%)',
    chart3: 'hsl(125 69% 66%)',
    chart4: 'hsl(44 100% 69%)',
    chart5: 'hsl(3 77% 74%)',
  },
};

// ============================================================================
// VA (Department of Veterans Affairs) Theme
// Source: https://design.va.gov/foundation/color-palette
// ============================================================================
export const vaTheme: AgencyThemeDefinition = {
  light: {
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(0 0% 0%)',
    card: 'hsl(0 0% 100%)',
    cardForeground: 'hsl(0 0% 0%)',
    popover: 'hsl(0 0% 100%)',
    popoverForeground: 'hsl(0 0% 0%)',
    primary: 'hsl(205 100% 32%)', // VA Blue #005ea2
    primaryForeground: 'hsl(0 0% 100%)',
    secondary: 'hsl(3 69% 53%)', // VA Red #d83933
    secondaryForeground: 'hsl(0 0% 100%)',
    muted: 'hsl(200 5% 65%)', // VA Gray Light #a9aeb1
    mutedForeground: 'hsl(210 9% 38%)', // VA Gray #565c65
    accent: 'hsl(191 100% 45%)', // VA Cyan #00bde3
    accentForeground: 'hsl(0 0% 0%)',
    destructive: 'hsl(17 89% 48%)', // VA Error #d54309
    destructiveForeground: 'hsl(0 0% 100%)',
    border: 'hsl(0 0% 88%)', // VA Gray Lighter #dfe1e2
    input: 'hsl(0 0% 88%)',
    ring: 'hsl(205 100% 32%)',
    radius: '0.25rem', // VA uses sharper corners
    chart1: 'hsl(205 100% 32%)', // VA Blue
    chart2: 'hsl(191 100% 45%)', // VA Cyan
    chart3: 'hsl(142 100% 33%)', // VA Success #00a91c
    chart4: 'hsl(45 100% 59%)', // VA Warning #ffbe2e
    chart5: 'hsl(3 69% 53%)', // VA Red
  },
  dark: {
    background: 'hsl(210 15% 13%)', // Dark VA Gray
    foreground: 'hsl(0 0% 94%)',
    card: 'hsl(210 15% 18%)',
    cardForeground: 'hsl(0 0% 94%)',
    popover: 'hsl(210 15% 18%)',
    popoverForeground: 'hsl(0 0% 94%)',
    primary: 'hsl(205 74% 60%)', // Lighter VA Blue for dark mode
    primaryForeground: 'hsl(0 0% 0%)',
    secondary: 'hsl(3 77% 65%)', // Lighter VA Red
    secondaryForeground: 'hsl(0 0% 0%)',
    muted: 'hsl(210 9% 25%)',
    mutedForeground: 'hsl(200 5% 65%)',
    accent: 'hsl(191 100% 55%)', // Lighter Cyan
    accentForeground: 'hsl(0 0% 0%)',
    destructive: 'hsl(17 89% 58%)',
    destructiveForeground: 'hsl(0 0% 0%)',
    border: 'hsl(210 9% 30%)',
    input: 'hsl(210 9% 30%)',
    ring: 'hsl(205 74% 60%)',
    radius: '0.25rem',
    chart1: 'hsl(205 74% 60%)',
    chart2: 'hsl(191 100% 55%)',
    chart3: 'hsl(142 69% 55%)',
    chart4: 'hsl(45 100% 65%)',
    chart5: 'hsl(3 77% 65%)',
  },
};

// ============================================================================
// USDA (Department of Agriculture / FPAC) Theme
// Source: https://usda-fsa.github.io/fsa-design-system/visual-style/color/
// ============================================================================
export const usdaTheme: AgencyThemeDefinition = {
  light: {
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(0 0% 13%)',
    card: 'hsl(0 0% 100%)',
    cardForeground: 'hsl(0 0% 13%)',
    popover: 'hsl(0 0% 100%)',
    popoverForeground: 'hsl(0 0% 13%)',
    primary: 'hsl(147 67% 27%)', // USDA Primary Green #236430
    primaryForeground: 'hsl(0 0% 100%)',
    secondary: 'hsl(209 64% 35%)', // USDA Secondary Blue #205493
    secondaryForeground: 'hsl(0 0% 100%)',
    muted: 'hsl(0 0% 94%)',
    mutedForeground: 'hsl(20 4% 29%)', // USDA Tertiary #494440
    accent: 'hsl(194 100% 41%)', // USDA Aqua #00A6D2
    accentForeground: 'hsl(0 0% 100%)',
    destructive: 'hsl(357 73% 48%)', // USDA Red #CD2026
    destructiveForeground: 'hsl(0 0% 100%)',
    border: 'hsl(0 0% 88%)',
    input: 'hsl(0 0% 88%)',
    ring: 'hsl(147 67% 27%)',
    radius: '0.25rem',
    chart1: 'hsl(147 67% 27%)', // Primary Green
    chart2: 'hsl(209 64% 35%)', // Secondary Blue
    chart3: 'hsl(194 100% 41%)', // Aqua
    chart4: 'hsl(44 97% 56%)', // USDA Yellow #FDB81E
    chart5: 'hsl(357 73% 48%)', // Red
  },
  dark: {
    background: 'hsl(20 4% 15%)', // Based on tertiary color
    foreground: 'hsl(0 0% 94%)',
    card: 'hsl(20 4% 20%)',
    cardForeground: 'hsl(0 0% 94%)',
    popover: 'hsl(20 4% 20%)',
    popoverForeground: 'hsl(0 0% 94%)',
    primary: 'hsl(147 60% 45%)', // Lighter green for dark mode
    primaryForeground: 'hsl(0 0% 0%)',
    secondary: 'hsl(209 70% 55%)', // Lighter blue
    secondaryForeground: 'hsl(0 0% 0%)',
    muted: 'hsl(20 4% 25%)',
    mutedForeground: 'hsl(0 0% 68%)',
    accent: 'hsl(194 100% 55%)', // Lighter aqua
    accentForeground: 'hsl(0 0% 0%)',
    destructive: 'hsl(357 73% 60%)', // Lighter red
    destructiveForeground: 'hsl(0 0% 0%)',
    border: 'hsl(20 4% 30%)',
    input: 'hsl(20 4% 30%)',
    ring: 'hsl(147 60% 45%)',
    radius: '0.25rem',
    chart1: 'hsl(147 60% 45%)',
    chart2: 'hsl(209 70% 55%)',
    chart3: 'hsl(194 100% 55%)',
    chart4: 'hsl(44 97% 65%)',
    chart5: 'hsl(357 73% 60%)',
  },
};

// ============================================================================
// CMS (Centers for Medicare & Medicaid Services) Theme
// Source: https://design.cms.gov/foundation/theme-colors/
// ============================================================================
export const cmsTheme: AgencyThemeDefinition = {
  light: {
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(0 0% 13%)',
    card: 'hsl(0 0% 100%)',
    cardForeground: 'hsl(0 0% 13%)',
    popover: 'hsl(0 0% 100%)',
    popoverForeground: 'hsl(0 0% 13%)',
    primary: 'hsl(203 100% 37%)', // CMS Ocean 500 #0071bc
    primaryForeground: 'hsl(0 0% 100%)',
    secondary: 'hsl(203 100% 45%)', // Lighter ocean shade
    secondaryForeground: 'hsl(0 0% 100%)',
    muted: 'hsl(0 0% 94%)',
    mutedForeground: 'hsl(0 0% 45%)',
    accent: 'hsl(203 100% 37%)', // Using primary as accent
    accentForeground: 'hsl(0 0% 100%)',
    destructive: 'hsl(357 85% 45%)', // CMS Error
    destructiveForeground: 'hsl(0 0% 100%)',
    border: 'hsl(0 0% 88%)',
    input: 'hsl(0 0% 88%)',
    ring: 'hsl(203 100% 37%)',
    radius: '0.5rem',
    chart1: 'hsl(203 100% 37%)', // Ocean
    chart2: 'hsl(203 100% 50%)', // Ocean Light
    chart3: 'hsl(140 60% 45%)', // Success Green
    chart4: 'hsl(45 100% 50%)', // Warning Yellow
    chart5: 'hsl(357 85% 45%)', // Error Red
  },
  dark: {
    background: 'hsl(203 20% 13%)',
    foreground: 'hsl(0 0% 94%)',
    card: 'hsl(203 20% 18%)',
    cardForeground: 'hsl(0 0% 94%)',
    popover: 'hsl(203 20% 18%)',
    popoverForeground: 'hsl(0 0% 94%)',
    primary: 'hsl(203 85% 60%)', // Lighter ocean for dark mode
    primaryForeground: 'hsl(0 0% 0%)',
    secondary: 'hsl(203 85% 70%)',
    secondaryForeground: 'hsl(0 0% 0%)',
    muted: 'hsl(203 15% 25%)',
    mutedForeground: 'hsl(0 0% 68%)',
    accent: 'hsl(203 85% 60%)',
    accentForeground: 'hsl(0 0% 0%)',
    destructive: 'hsl(357 85% 60%)',
    destructiveForeground: 'hsl(0 0% 0%)',
    border: 'hsl(203 15% 30%)',
    input: 'hsl(203 15% 30%)',
    ring: 'hsl(203 85% 60%)',
    radius: '0.5rem',
    chart1: 'hsl(203 85% 60%)',
    chart2: 'hsl(203 85% 70%)',
    chart3: 'hsl(140 60% 60%)',
    chart4: 'hsl(45 100% 65%)',
    chart5: 'hsl(357 85% 60%)',
  },
};

// ============================================================================
// CDC (Centers for Disease Control and Prevention) Theme
// Source: https://www.cdc.gov/wcms/4.0/cdc-wp/page-and-site-options/preferred-color-pairings.html
// Using Blue palette as primary
// ============================================================================
export const cdcTheme: AgencyThemeDefinition = {
  light: {
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(0 0% 13%)',
    card: 'hsl(0 0% 100%)',
    cardForeground: 'hsl(0 0% 13%)',
    popover: 'hsl(0 0% 100%)',
    popoverForeground: 'hsl(0 0% 13%)',
    primary: 'hsl(207 100% 33%)', // CDC Blue Primary #005eaa
    primaryForeground: 'hsl(0 0% 100%)',
    secondary: 'hsl(207 47% 64%)', // CDC Blue Secondary #88c3ea
    secondaryForeground: 'hsl(0 0% 0%)',
    muted: 'hsl(207 100% 93%)', // CDC Blue Quaternary #edf9ff
    mutedForeground: 'hsl(0 0% 45%)',
    accent: 'hsl(192 100% 29%)', // CDC Teal Primary #007B91
    accentForeground: 'hsl(0 0% 100%)',
    destructive: 'hsl(4 48% 48%)', // CDC Pink Primary #af4448
    destructiveForeground: 'hsl(0 0% 100%)',
    border: 'hsl(0 0% 88%)',
    input: 'hsl(0 0% 88%)',
    ring: 'hsl(207 100% 33%)',
    radius: '0.5rem',
    chart1: 'hsl(207 100% 33%)', // Blue Primary
    chart2: 'hsl(192 100% 29%)', // Teal Primary
    chart3: 'hsl(91 70% 34%)', // CDC Green Primary #497d0c
    chart4: 'hsl(39 97% 54%)', // CDC Amber Primary #fbab18
    chart5: 'hsl(4 48% 48%)', // Pink Primary
  },
  dark: {
    background: 'hsl(207 30% 13%)',
    foreground: 'hsl(0 0% 94%)',
    card: 'hsl(207 30% 18%)',
    cardForeground: 'hsl(0 0% 94%)',
    popover: 'hsl(207 30% 18%)',
    popoverForeground: 'hsl(0 0% 94%)',
    primary: 'hsl(207 85% 60%)', // Lighter CDC Blue
    primaryForeground: 'hsl(0 0% 0%)',
    secondary: 'hsl(207 47% 70%)', // Lighter secondary
    secondaryForeground: 'hsl(0 0% 0%)',
    muted: 'hsl(207 30% 25%)',
    mutedForeground: 'hsl(0 0% 68%)',
    accent: 'hsl(192 60% 50%)', // Lighter teal
    accentForeground: 'hsl(0 0% 0%)',
    destructive: 'hsl(4 55% 60%)', // Lighter pink
    destructiveForeground: 'hsl(0 0% 0%)',
    border: 'hsl(207 30% 30%)',
    input: 'hsl(207 30% 30%)',
    ring: 'hsl(207 85% 60%)',
    radius: '0.5rem',
    chart1: 'hsl(207 85% 60%)',
    chart2: 'hsl(192 60% 50%)',
    chart3: 'hsl(91 60% 50%)',
    chart4: 'hsl(39 97% 65%)',
    chart5: 'hsl(4 55% 60%)',
  },
};

// ============================================================================
// Maryland State Theme
// Source: https://digital.maryland.gov/design-system/
// Using Maryland flag colors and state branding
// ============================================================================
export const marylandTheme: AgencyThemeDefinition = {
  light: {
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(0 0% 13%)',
    card: 'hsl(0 0% 100%)',
    cardForeground: 'hsl(0 0% 13%)',
    popover: 'hsl(0 0% 100%)',
    popoverForeground: 'hsl(0 0% 13%)',
    primary: 'hsl(351 71% 48%)', // Maryland Red #9D2235 (from flag)
    primaryForeground: 'hsl(0 0% 100%)',
    secondary: 'hsl(46 100% 47%)', // Maryland Gold #EAAA00 (from flag)
    secondaryForeground: 'hsl(0 0% 0%)',
    muted: 'hsl(0 0% 94%)',
    mutedForeground: 'hsl(0 0% 45%)',
    accent: 'hsl(351 71% 48%)', // Using primary red
    accentForeground: 'hsl(0 0% 100%)',
    destructive: 'hsl(357 85% 45%)',
    destructiveForeground: 'hsl(0 0% 100%)',
    border: 'hsl(0 0% 88%)',
    input: 'hsl(0 0% 88%)',
    ring: 'hsl(351 71% 48%)',
    radius: '0.5rem',
    chart1: 'hsl(351 71% 48%)', // Red
    chart2: 'hsl(46 100% 47%)', // Gold
    chart3: 'hsl(0 0% 0%)', // Black
    chart4: 'hsl(0 0% 100%)', // White
    chart5: 'hsl(351 71% 60%)', // Lighter red
  },
  dark: {
    background: 'hsl(351 20% 13%)',
    foreground: 'hsl(0 0% 94%)',
    card: 'hsl(351 20% 18%)',
    cardForeground: 'hsl(0 0% 94%)',
    popover: 'hsl(351 20% 18%)',
    popoverForeground: 'hsl(0 0% 94%)',
    primary: 'hsl(351 71% 65%)', // Lighter red
    primaryForeground: 'hsl(0 0% 0%)',
    secondary: 'hsl(46 100% 60%)', // Lighter gold
    secondaryForeground: 'hsl(0 0% 0%)',
    muted: 'hsl(351 15% 25%)',
    mutedForeground: 'hsl(0 0% 68%)',
    accent: 'hsl(351 71% 65%)',
    accentForeground: 'hsl(0 0% 0%)',
    destructive: 'hsl(357 85% 60%)',
    destructiveForeground: 'hsl(0 0% 0%)',
    border: 'hsl(351 15% 30%)',
    input: 'hsl(351 15% 30%)',
    ring: 'hsl(351 71% 65%)',
    radius: '0.5rem',
    chart1: 'hsl(351 71% 65%)',
    chart2: 'hsl(46 100% 60%)',
    chart3: 'hsl(0 0% 80%)', // Light gray instead of black
    chart4: 'hsl(0 0% 94%)', // Off-white
    chart5: 'hsl(351 71% 75%)',
  },
};

// ============================================================================
// California State Theme
// Source: https://designsystem.webstandards.ca.gov/
// ============================================================================
export const californiaTheme: AgencyThemeDefinition = {
  light: {
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(0 0% 13%)',
    card: 'hsl(0 0% 100%)',
    cardForeground: 'hsl(0 0% 13%)',
    popover: 'hsl(0 0% 100%)',
    popoverForeground: 'hsl(0 0% 13%)',
    primary: 'hsl(217 79% 43%)', // California Primary 700 #165ac2
    primaryForeground: 'hsl(0 0% 100%)',
    secondary: 'hsl(217 39% 60%)', // California Primary 500 #5a8ad4
    secondaryForeground: 'hsl(0 0% 100%)',
    muted: 'hsl(217 44% 95%)', // California Primary 100 #e7eef9
    mutedForeground: 'hsl(0 0% 45%)',
    accent: 'hsl(23 87% 48%)', // California Accent1 500 #de6516
    accentForeground: 'hsl(0 0% 100%)',
    destructive: 'hsl(357 79% 43%)', // California Danger 700 #b91b37
    destructiveForeground: 'hsl(0 0% 100%)',
    border: 'hsl(0 0% 88%)',
    input: 'hsl(0 0% 88%)',
    ring: 'hsl(217 79% 43%)',
    radius: '0.5rem',
    chart1: 'hsl(217 79% 43%)', // Primary
    chart2: 'hsl(23 87% 48%)', // Accent1
    chart3: 'hsl(145 73% 38%)', // Success 700 #0f6d38
    chart4: 'hsl(45 100% 32%)', // Warning 700 #6f5e00
    chart5: 'hsl(357 79% 43%)', // Danger
  },
  dark: {
    background: 'hsl(217 30% 13%)',
    foreground: 'hsl(0 0% 94%)',
    card: 'hsl(217 30% 18%)',
    cardForeground: 'hsl(0 0% 94%)',
    popover: 'hsl(217 30% 18%)',
    popoverForeground: 'hsl(0 0% 94%)',
    primary: 'hsl(217 39% 65%)', // Lighter California primary
    primaryForeground: 'hsl(0 0% 0%)',
    secondary: 'hsl(217 39% 75%)',
    secondaryForeground: 'hsl(0 0% 0%)',
    muted: 'hsl(217 30% 25%)',
    mutedForeground: 'hsl(0 0% 68%)',
    accent: 'hsl(23 75% 60%)', // Lighter accent
    accentForeground: 'hsl(0 0% 0%)',
    destructive: 'hsl(357 70% 60%)', // Lighter danger
    destructiveForeground: 'hsl(0 0% 0%)',
    border: 'hsl(217 30% 30%)',
    input: 'hsl(217 30% 30%)',
    ring: 'hsl(217 39% 65%)',
    radius: '0.5rem',
    chart1: 'hsl(217 39% 65%)',
    chart2: 'hsl(23 75% 60%)',
    chart3: 'hsl(145 60% 50%)',
    chart4: 'hsl(45 100% 50%)',
    chart5: 'hsl(357 70% 60%)',
  },
};

// ============================================================================
// Utah State Theme
// Source: https://designsystem.utah.gov/
// Based on USWDS with Utah-specific customizations
// ============================================================================
export const utahTheme: AgencyThemeDefinition = {
  light: {
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(0 0% 28%)', // Utah base text #474747
    card: 'hsl(0 0% 100%)',
    cardForeground: 'hsl(0 0% 28%)',
    popover: 'hsl(0 0% 100%)',
    popoverForeground: 'hsl(0 0% 28%)',
    primary: 'hsl(209 100% 32%)', // USWDS Blue (Utah uses USWDS base)
    primaryForeground: 'hsl(0 0% 100%)',
    secondary: 'hsl(3 61% 52%)', // USWDS Red
    secondaryForeground: 'hsl(0 0% 100%)',
    muted: 'hsl(0 0% 94%)',
    mutedForeground: 'hsl(0 0% 45%)',
    accent: 'hsl(190 100% 44%)', // USWDS Cyan
    accentForeground: 'hsl(0 0% 0%)',
    destructive: 'hsl(17 94% 43%)',
    destructiveForeground: 'hsl(0 0% 100%)',
    border: 'hsl(0 0% 88%)',
    input: 'hsl(0 0% 88%)',
    ring: 'hsl(209 100% 32%)',
    radius: '0.5rem',
    chart1: 'hsl(209 100% 32%)',
    chart2: 'hsl(190 100% 44%)',
    chart3: 'hsl(128 100% 33%)',
    chart4: 'hsl(44 100% 59%)',
    chart5: 'hsl(3 61% 52%)',
  },
  dark: {
    background: 'hsl(0 0% 13%)',
    foreground: 'hsl(0 0% 94%)',
    card: 'hsl(0 0% 18%)',
    cardForeground: 'hsl(0 0% 94%)',
    popover: 'hsl(0 0% 18%)',
    popoverForeground: 'hsl(0 0% 94%)',
    primary: 'hsl(208 74% 68%)',
    primaryForeground: 'hsl(0 0% 0%)',
    secondary: 'hsl(3 77% 74%)',
    secondaryForeground: 'hsl(0 0% 0%)',
    muted: 'hsl(0 0% 25%)',
    mutedForeground: 'hsl(0 0% 68%)',
    accent: 'hsl(190 100% 54%)',
    accentForeground: 'hsl(0 0% 0%)',
    destructive: 'hsl(17 94% 53%)',
    destructiveForeground: 'hsl(0 0% 0%)',
    border: 'hsl(0 0% 30%)',
    input: 'hsl(0 0% 30%)',
    ring: 'hsl(208 74% 68%)',
    radius: '0.5rem',
    chart1: 'hsl(208 74% 68%)',
    chart2: 'hsl(190 100% 54%)',
    chart3: 'hsl(125 69% 66%)',
    chart4: 'hsl(44 100% 69%)',
    chart5: 'hsl(3 77% 74%)',
  },
};

// ============================================================================
// New York State Theme
// Source: https://designsystem.ny.gov/foundations/tokens/
// ============================================================================
export const newyorkTheme: AgencyThemeDefinition = {
  light: {
    background: 'hsl(0 0% 100%)', // Color Surface #ffffff
    foreground: 'hsl(0 0% 11%)', // Color Text #1b1b1b
    card: 'hsl(0 0% 96%)', // Color Surface Raised #f6f6f6
    cardForeground: 'hsl(0 0% 11%)',
    popover: 'hsl(0 0% 100%)',
    popoverForeground: 'hsl(0 0% 11%)',
    primary: 'hsl(208 69% 27%)', // Color Theme #154973
    primaryForeground: 'hsl(0 0% 100%)',
    secondary: 'hsl(49 100% 49%)', // Color Accent #face00
    secondaryForeground: 'hsl(0 0% 0%)',
    muted: 'hsl(60 2% 81%)', // Color Base #d0d0ce
    mutedForeground: 'hsl(204 3% 30%)', // Color Text Weak #4a4d4f
    accent: 'hsl(49 100% 49%)', // Color Accent #face00
    accentForeground: 'hsl(0 0% 0%)',
    destructive: 'hsl(0 61% 44%)', // Color Danger #b52c2c
    destructiveForeground: 'hsl(0 0% 100%)',
    border: 'hsl(180 2% 75%)', // Color Text Weakest #bec0c1
    input: 'hsl(180 2% 75%)',
    ring: 'hsl(218 100% 41%)', // Color Focus #004dd1
    radius: '0.5rem',
    chart1: 'hsl(208 69% 27%)', // Theme primary
    chart2: 'hsl(218 100% 41%)', // Info blue
    chart3: 'hsl(131 59% 29%)', // Success green #1e752e
    chart4: 'hsl(49 100% 49%)', // Warning yellow
    chart5: 'hsl(0 61% 44%)', // Danger red
  },
  dark: {
    background: 'hsl(0 0% 11%)', // Color Surface Reverse #1b1b1b
    foreground: 'hsl(60 2% 81%)', // Color Text Reverse #d0d0ce
    card: 'hsl(0 0% 16%)',
    cardForeground: 'hsl(60 2% 81%)',
    popover: 'hsl(0 0% 16%)',
    popoverForeground: 'hsl(60 2% 81%)',
    primary: 'hsl(207 41% 46%)', // Color Theme Mid #457aa5
    primaryForeground: 'hsl(0 0% 100%)',
    secondary: 'hsl(49 100% 55%)', // Lighter accent for dark mode
    secondaryForeground: 'hsl(0 0% 0%)',
    muted: 'hsl(0 0% 20%)',
    mutedForeground: 'hsl(180 2% 75%)', // Color Text Reverse Weak
    accent: 'hsl(49 100% 55%)',
    accentForeground: 'hsl(0 0% 0%)',
    destructive: 'hsl(0 61% 58%)', // Lighter danger for dark mode
    destructiveForeground: 'hsl(0 0% 100%)',
    border: 'hsl(0 0% 30%)',
    input: 'hsl(0 0% 30%)',
    ring: 'hsl(218 85% 60%)', // Lighter focus blue
    radius: '0.5rem',
    chart1: 'hsl(207 41% 46%)',
    chart2: 'hsl(218 85% 60%)',
    chart3: 'hsl(131 55% 45%)',
    chart4: 'hsl(49 100% 55%)',
    chart5: 'hsl(0 61% 58%)',
  },
};

// ============================================================================
// Theme Registry
// ============================================================================
export const AGENCY_THEMES: Record<ThemeId, AgencyThemeDefinition> = {
  usa: usaTheme,
  va: vaTheme,
  usda: usdaTheme,
  cms: cmsTheme,
  cdc: cdcTheme,
  maryland: marylandTheme,
  california: californiaTheme,
  utah: utahTheme,
  newyork: newyorkTheme,
};

/**
 * Get theme colors for a specific agency and color scheme
 */
export function getAgencyTheme(themeId: ThemeId, colorScheme: 'light' | 'dark'): ThemeColors {
  return AGENCY_THEMES[themeId][colorScheme];
}
