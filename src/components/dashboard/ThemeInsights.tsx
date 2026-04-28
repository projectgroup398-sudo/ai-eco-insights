import { Cpu, Recycle, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { themeInsights, type Theme } from "@/data/papers";

const themeMeta: Record<Theme, { icon: LucideIcon; gradient: string; ring: string }> = {
  Energy: { icon: Zap, gradient: "gradient-energy", ring: "ring-energy/20" },
  "Supply Chain": { icon: Cpu, gradient: "gradient-supply", ring: "ring-supply/20" },
  "E-Waste": { icon: Recycle, gradient: "gradient-ewaste", ring: "ring-ewaste/20" },
};

export const ThemeInsights = () => (
  <section id="themes" className="container py-16 border-t border-border/60">
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold">Theme insights</h2>
      <p className="text-muted-foreground mt-2">Key findings and environmental implications, grouped by domain.</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {(Object.keys(themeInsights) as Theme[]).map((t) => {
        const Meta = themeMeta[t];
        const Icon = Meta.icon;
        const data = themeInsights[t];
        return (
          <div key={t} className={`rounded-2xl border border-border bg-card overflow-hidden shadow-card ring-1 ${Meta.ring}`}>
            <div className={`${Meta.gradient} p-6 text-primary-foreground`}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{t}</h3>
              </div>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key findings</h4>
                <ul className="space-y-2">
                  {data.findings.map((f, i) => (
                    <li key={i} className="text-sm leading-relaxed flex gap-2">
                      <span className="text-muted-foreground mt-1">·</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Environmental impacts</h4>
                <ul className="space-y-2">
                  {data.impacts.map((f, i) => (
                    <li key={i} className="text-sm leading-relaxed flex gap-2">
                      <span className="text-muted-foreground mt-1">·</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
