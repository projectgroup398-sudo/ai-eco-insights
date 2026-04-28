import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const Hero = () => (
  <section className="relative overflow-hidden border-b border-border/60">
    <div className="absolute inset-0 gradient-hero opacity-[0.04] dark:opacity-[0.15]" />
    <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-energy/10 blur-3xl" />
    <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-ewaste/10 blur-3xl" />
    <div className="container relative py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-card">
          <Sparkles className="h-3 w-3 text-energy" />
          27 research papers · 3 themes · 2017–2023
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          The environmental cost of <span className="bg-gradient-to-r from-energy via-supply to-ewaste bg-clip-text text-transparent">artificial intelligence</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          A visual synthesis of academic and industry research on AI's footprint —
          mapping the connections between energy consumption, supply chains, and electronic waste.
        </p>
      </motion.div>
    </div>
  </section>
);
