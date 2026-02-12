import React, { createContext, useEffect, useState } from "react";

import api from "@utils/axiosInstance";
import { applyCustomColors, clearCustomColors, hexToRgb } from "@utils/themeUtils";

import { CustomColors, ThemeContextType, ThemeMode, ThemePreset, UserTheme } from "../types/theme";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem("theme-mode") as ThemeMode | null;
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const [preset, setPresetState] = useState<ThemePreset>(() => {
    return (localStorage.getItem("theme-preset") as ThemePreset) || "default";
  });

  const [customColors, setCustomColorsState] = useState<CustomColors | null>(() => {
    const stored = localStorage.getItem("theme-custom-colors");
    return stored ? (JSON.parse(stored) as CustomColors) : null;
  });

  // Apply theme to DOM
  const applyTheme = (
    newMode: ThemeMode,
    newPreset: ThemePreset,
    newCustom: CustomColors | null
  ): void => {
    const root = document.documentElement;

    // Apply data attributes for preset themes
    root.setAttribute("data-theme", newPreset);
    root.setAttribute("data-mode", newMode);

    // Apply or clear custom colors
    if (newCustom) {
      applyCustomColors(newCustom);
    } else {
      clearCustomColors();
    }
  };

  // Save to backend
  const saveToBackend = async (theme: UserTheme): Promise<void> => {
    try {
      await api.post("/user/theme", theme);
    } catch (error) {
      console.error("Failed to save theme to backend:", error);
    }
  };

  // Update mode
  const setMode = async (newMode: ThemeMode): Promise<void> => {
    setModeState(newMode);
    localStorage.setItem("theme-mode", newMode);
    applyTheme(newMode, preset, customColors);
    await saveToBackend({ mode: newMode, preset, customColors });
  };

  // Update preset
  const setPreset = async (newPreset: ThemePreset): Promise<void> => {
    setPresetState(newPreset);
    localStorage.setItem("theme-preset", newPreset);
    // Clear custom colors when switching presets
    setCustomColorsState(null);
    localStorage.removeItem("theme-custom-colors");
    applyTheme(mode, newPreset, null);
    await saveToBackend({ mode, preset: newPreset, customColors: null });
  };

  // Update custom color
  const updateCustomColor = async (key: keyof CustomColors, hexColor: string): Promise<void> => {
    const rgbColor = hexToRgb(hexColor);
    const newCustom = { ...customColors, [key]: rgbColor };
    setCustomColorsState(newCustom);
    localStorage.setItem("theme-custom-colors", JSON.stringify(newCustom));
    applyTheme(mode, preset, newCustom);
    await saveToBackend({ mode, preset, customColors: newCustom });
  };

  // Clear custom colors
  const clearCustom = async (): Promise<void> => {
    setCustomColorsState(null);
    localStorage.removeItem("theme-custom-colors");
    clearCustomColors();
    await saveToBackend({ mode, preset, customColors: null });
  };

  // Toggle mode
  const toggleMode = async (): Promise<void> => {
    await setMode(mode === "light" ? "dark" : "light");
  };

  // Apply theme on mount and when values change
  useEffect(() => {
    applyTheme(mode, preset, customColors);
  }, [mode, preset, customColors]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        preset,
        customColors,
        setMode,
        setPreset,
        updateCustomColor,
        clearCustomColors: clearCustom,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
