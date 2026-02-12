import { PresetThemeConfig } from "../types/theme";

export const THEME_PRESETS: Record<string, PresetThemeConfig> = {
  default: {
    id: "default",
    name: "Default Blue",
    colors: {
      primary: "59 130 246",
      secondary: "139 92 246",
      accent: "236 72 153",
      background: "255 255 255",
      foreground: "15 23 42",
      card: "248 250 252",
      border: "226 232 240",
    },
  },
  ocean: {
    id: "ocean",
    name: "Ocean Breeze",
    colors: {
      primary: "14 165 233",
      secondary: "6 182 212",
      accent: "20 184 166",
      background: "240 249 255",
      foreground: "12 74 110",
      card: "224 242 254",
      border: "186 230 253",
    },
  },
  forest: {
    id: "forest",
    name: "Forest Green",
    colors: {
      primary: "34 197 94",
      secondary: "132 204 22",
      accent: "74 222 128",
      background: "240 253 244",
      foreground: "20 83 45",
      card: "220 252 231",
      border: "187 247 208",
    },
  },
  sunset: {
    id: "sunset",
    name: "Sunset Orange",
    colors: {
      primary: "249 115 22",
      secondary: "234 88 12",
      accent: "251 146 60",
      background: "255 251 235",
      foreground: "67 20 7",
      card: "254 243 199",
      border: "253 186 116",
    },
  },
};
