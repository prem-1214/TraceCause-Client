// Theme mode: light or dark
export type ThemeMode = "light" | "dark";

// Available preset themes
export type ThemePreset = "default" | "ocean" | "forest" | "sunset";

// RGB color string format: "59 130 246"
export type RgbColor = string;

// Custom color overrides
export interface CustomColors {
  primary?: RgbColor;
  secondary?: RgbColor;
  accent?: RgbColor;
  background?: RgbColor;
  foreground?: RgbColor;
  card?: RgbColor;
  border?: RgbColor;
}

// Preset theme definition
export interface PresetThemeConfig {
  id: ThemePreset;
  name: string;
  colors: {
    primary: RgbColor;
    secondary: RgbColor;
    accent: RgbColor;
    background: RgbColor;
    foreground: RgbColor;
    card: RgbColor;
    border: RgbColor;
  };
}

// User's complete theme state
export interface UserTheme {
  mode: ThemeMode;
  preset: ThemePreset;
  customColors: CustomColors | null;
}

// Theme context API
export interface ThemeContextType {
  mode: ThemeMode;
  preset: ThemePreset;
  customColors: CustomColors | null;
  setMode: (mode: ThemeMode) => Promise<void>;
  setPreset: (preset: ThemePreset) => Promise<void>;
  updateCustomColor: (key: keyof CustomColors, hexColor: string) => Promise<void>;
  clearCustomColors: () => Promise<void>;
  toggleMode: () => Promise<void>;
}
