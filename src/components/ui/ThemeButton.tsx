import React, { useState } from "react";

import { Palette } from "lucide-react";

import ThemeSelectorCard from "../ThemeSelectorCard";

export default function ThemeButton(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full border border-border bg-card p-3 shadow-lg transition-colors hover:bg-primary hover:text-card"
        aria-label="Open theme settings"
      >
        <Palette size={20} />
      </button>

      <ThemeSelectorCard isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
