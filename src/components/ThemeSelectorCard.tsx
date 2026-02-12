import { THEME_PRESETS } from "@constants/themePresets";
import useTheme from "@hooks/useTheme";
import { Moon, Sun, X } from "lucide-react";

interface ThemeSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThemeSelectorCard({
  isOpen,
  onClose,
}: ThemeSelectorProps): React.JSX.Element | null {
  const { mode, preset, setMode, setPreset } = useTheme();
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter" || event.key === " ") {
      onClose();
    }
  };
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 cursor-pointer bg-black/20"
        onClick={onClose}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        {/* Card */}
        <div className="fixed top-16 right-4 z-50 w-80 rounded-lg border bg-card p-6 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground">Theme Settings</h3>
            <button onClick={onClose} className="rounded-md p-1 hover:bg-background/50">
              <X size={18} className="text-foreground" />
            </button>
          </div>

          {/* Mode Toggle */}
          <div className="mb-6">
            <p className="mb-2 block text-sm font-medium text-foreground">Mode</p>
            <div className="grid grid-cols-2 gap-2 rounded-md bg-background p-1">
              <button
                onClick={() => {
                  void (async () => {
                    await setMode("light");
                  })();
                }}
                className={`flex items-center justify-center gap-2 rounded py-2 text-sm font-medium transition-colors ${
                  mode === "light"
                    ? "bg-primary text-card shadow-sm"
                    : "text-foreground hover:bg-card"
                }`}
              >
                <Sun size={16} />
                Light
              </button>
              <button
                onClick={() => {
                  void (async () => {
                    await setMode("dark");
                  })();
                }}
                className={`flex items-center justify-center gap-2 rounded py-2 text-sm font-medium transition-colors ${
                  mode === "dark"
                    ? "bg-primary text-card shadow-sm"
                    : "text-foreground hover:bg-card"
                }`}
              >
                <Moon size={16} />
                Dark
              </button>
            </div>
          </div>

          {/* Preset Themes */}
          <div>
            <p className="mb-2 block text-sm font-medium text-foreground">Color Palette</p>
            <div className="grid grid-cols-2 gap-3">
              {Object.values(THEME_PRESETS).map((themePreset) => (
                <button
                  key={themePreset.id}
                  onClick={() => {
                    void (async () => {
                      await setPreset(themePreset.id);
                    })();
                  }}
                  className={`rounded-lg border-2 p-3 text-left transition-all ${
                    preset === themePreset.id
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="mb-2 flex gap-1">
                    <div
                      className="h-4 w-4 rounded-full"
                      style={{ backgroundColor: `rgb(${themePreset.colors.primary})` }}
                    />
                    <div
                      className="h-4 w-4 rounded-full"
                      style={{ backgroundColor: `rgb(${themePreset.colors.secondary})` }}
                    />
                    <div
                      className="h-4 w-4 rounded-full"
                      style={{ backgroundColor: `rgb(${themePreset.colors.accent})` }}
                    />
                  </div>
                  <div className="text-sm font-medium text-foreground">{themePreset.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
