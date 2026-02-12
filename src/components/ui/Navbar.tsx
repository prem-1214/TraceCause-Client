import ThemeButton from "./ThemeButton";

export default function Navbar(): React.JSX.Element {
  return (
    <nav className="flex items-center justify-between border-b border-border bg-card px-6 py-4">
      <h1 className="text-xl font-bold text-foreground">My App</h1>

      <div className="flex items-center gap-4">
        <ThemeButton />
      </div>
    </nav>
  );
}
