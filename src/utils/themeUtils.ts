import { toast } from "sonner";

import { CustomColors, RgbColor } from "../types/theme";

export function hexToRgb(hex: string): RgbColor {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    toast.error(`Invalid hex color: ${hex}`);
    throw new Error(`Invalid hex color: ${hex}`);
  }
  const r = parseInt(result[1] ?? "0", 16);
  const g = parseInt(result[2] ?? "0", 16);
  const b = parseInt(result[3] ?? "0", 16);
  return `${r} ${g} ${b}`;
}

export function rgbToHex(rgb: RgbColor): string {
  const [r, g, b] = rgb.split(" ").map(Number);
  if (r === undefined || g === undefined || b === undefined) {
    toast.error(`Invalid RGB color: ${rgb}`);
    throw new Error(`Invalid RGB color: ${rgb}`);
  }
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}

export function applyCustomColors(customColors: CustomColors): void {
  const root = document.documentElement;
  Object.entries(customColors).forEach(([key, value]) => {
    if (value) {
      root.style.setProperty(`--c-${key}`, value as string | null);
    }
  });
}

export function clearCustomColors(): void {
  const root = document.documentElement;
  const keys = ["primary", "secondary", "accent", "background", "foreground", "card", "border"];
  keys.forEach((key) => root.style.removeProperty(`--c-${key}`));
}
