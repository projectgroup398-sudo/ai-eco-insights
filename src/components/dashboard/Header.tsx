import { Leaf, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useThemeMode } from "@/hooks/use-theme-mode";

export const Header = () => {
  const { isDark, toggle } = useThemeMode();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-hero shadow-card">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold">AI Sustainability</span>
            <span className="text-xs text-muted-foreground">Research Dashboard</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#overview" className="hover:text-foreground transition-smooth">Overview</a>
          <a href="#charts" className="hover:text-foreground transition-smooth">Insights</a>
          <a href="#papers" className="hover:text-foreground transition-smooth">Papers</a>
          <a href="#themes" className="hover:text-foreground transition-smooth">Themes</a>
          <a href="#top" className="hover:text-foreground transition-smooth">Top 5</a>
        </nav>
        <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle dark mode">
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
    </header>
  );
};
