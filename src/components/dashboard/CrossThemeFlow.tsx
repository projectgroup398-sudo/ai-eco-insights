import { ArrowRight, Cpu, Recycle, Zap } from "lucide-react";
import { motion } from "framer-motion";

const nodes = [
  { label: "Energy", desc: "Compute & data centres consume vast electricity.", icon: Zap, gradient: "gradient-energy" },
  { label: "Hardware", desc: "Chips & accelerators built from rare materials.", icon: Cpu, gradient: "gradient-supply" },
  { label: "E-Waste", desc: "Short lifecycles produce hazardous waste.", icon: Recycle, gradient: "gradient-ewaste" },
];

export const CrossThemeFlow = () => (
  <section className="container py-16 border-t border-border/60">
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold">Cross-theme insights</h2>
      <p className="text-muted-foreground mt-2">How AI's environmental challenges chain together.</p>
    </div>

    <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-card">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
        {nodes.map((n, i) => (
          <div key={n.label} className="flex flex-col md:flex-row items-center gap-6 flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="flex-1 w-full text-center"
            >
              <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${n.gradient} text-primary-foreground shadow-elevated`}>
                <n.icon className="h-7 w-7" />
              </div>
              <div className="mt-4 font-bold text-lg">{n.label}</div>
              <p className="mt-1 text-sm text-muted-foreground max-w-[220px] mx-auto leading-relaxed">{n.desc}</p>
            </motion.div>
            {i < nodes.length - 1 && (
              <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground shrink-0" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-border/60 text-sm text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
        Increasing AI demand drives energy-hungry compute, which requires resource-intensive hardware,
        which in turn produces electronic waste — a closed loop of environmental pressure.
      </div>
    </div>
  </section>
);
