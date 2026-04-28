import { motion } from "framer-motion";
import { BookOpen, Cpu, Recycle, Zap } from "lucide-react";
import { papers } from "@/data/papers";

const stats = [
  { label: "Total Papers", value: papers.length, icon: BookOpen, accent: "bg-primary/5 text-primary", ring: "ring-primary/10" },
  { label: "Energy", value: papers.filter(p => p.theme === "Energy").length, icon: Zap, accent: "bg-energy/10 text-energy", ring: "ring-energy/20" },
  { label: "Supply Chain", value: papers.filter(p => p.theme === "Supply Chain").length, icon: Cpu, accent: "bg-supply/10 text-supply", ring: "ring-supply/20" },
  { label: "E-Waste", value: papers.filter(p => p.theme === "E-Waste").length, icon: Recycle, accent: "bg-ewaste/10 text-ewaste", ring: "ring-ewaste/20" },
];

export const Overview = () => (
  <section id="overview" className="container py-16">
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold">Research at a glance</h2>
      <p className="text-muted-foreground mt-2">Distribution of papers across the three core themes.</p>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated transition-smooth"
        >
          <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${s.accent} ${s.ring}`}>
            <s.icon className="h-5 w-5" />
          </div>
          <div className="mt-4 text-3xl font-extrabold tracking-tight">{s.value}</div>
          <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
        </motion.div>
      ))}
    </div>
  </section>
);
