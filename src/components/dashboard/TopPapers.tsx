import { Star } from "lucide-react";
import { papers } from "@/data/papers";
import { PaperCard } from "./PaperCard";

const top = papers.filter(p => p.impact === "High").slice(0, 5);

export const TopPapers = () => (
  <section id="top" className="container py-16 border-t border-border/60">
    <div className="mb-8 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-impact-medium/10 text-impact-medium ring-1 ring-impact-medium/20">
        <Star className="h-5 w-5" />
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">Top 5 most impactful</h2>
        <p className="text-muted-foreground mt-1">Featured high-impact research from the corpus.</p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {top.map((p, i) => <PaperCard key={p.id} paper={p} index={i} />)}
    </div>
  </section>
);
