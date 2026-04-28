import { motion } from "framer-motion";
import { User } from "lucide-react";
import type { Paper } from "@/data/papers";
import { impactBadgeClass, themeBadgeClass } from "@/lib/theme-utils";

export const PaperCard = ({ paper, index = 0 }: { paper: Paper; index?: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
    className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-smooth"
  >
    <div className="flex items-center justify-between gap-2">
      <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${themeBadgeClass[paper.theme]}`}>
        {paper.theme}
      </span>
      <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold ${impactBadgeClass[paper.impact]}`}>
        {paper.impact} impact
      </span>
    </div>
    <h3 className="mt-3 font-semibold leading-snug group-hover:text-primary transition-smooth">
      {paper.title}
    </h3>
    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{paper.summary}</p>
    <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
      <span className="inline-flex items-center gap-1.5">
        <User className="h-3 w-3" />
        {paper.author}
      </span>
      <span className="font-mono font-semibold">{paper.year}</span>
    </div>
  </motion.article>
);
