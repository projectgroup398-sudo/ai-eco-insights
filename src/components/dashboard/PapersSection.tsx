import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { papers } from "@/data/papers";
import { PaperCard } from "./PaperCard";

const ALL = "all";

export const PapersSection = () => {
  const [q, setQ] = useState("");
  const [theme, setTheme] = useState<string>(ALL);
  const [year, setYear] = useState<string>(ALL);
  const [impact, setImpact] = useState<string>(ALL);

  const years = useMemo(() => Array.from(new Set(papers.map(p => p.year))).sort(), []);

  const filtered = useMemo(() => papers.filter(p => {
    const ql = q.trim().toLowerCase();
    if (ql && !p.title.toLowerCase().includes(ql) && !p.author.toLowerCase().includes(ql)) return false;
    if (theme !== ALL && p.theme !== theme) return false;
    if (year !== ALL && String(p.year) !== year) return false;
    if (impact !== ALL && p.impact !== impact) return false;
    return true;
  }), [q, theme, year, impact]);

  const hasFilters = q || theme !== ALL || year !== ALL || impact !== ALL;
  const reset = () => { setQ(""); setTheme(ALL); setYear(ALL); setImpact(ALL); };

  return (
    <section id="papers" className="container py-16 border-t border-border/60">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Research library</h2>
          <p className="text-muted-foreground mt-2">Browse, search, and filter all 27 papers in the corpus.</p>
        </div>
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {papers.length}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-4 shadow-card mb-6 flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by title or author…"
            className="pl-9"
          />
        </div>
        <Select value={theme} onValueChange={setTheme}>
          <SelectTrigger className="md:w-[160px]"><SelectValue placeholder="Theme" /></SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>All themes</SelectItem>
            <SelectItem value="Energy">Energy</SelectItem>
            <SelectItem value="Supply Chain">Supply Chain</SelectItem>
            <SelectItem value="E-Waste">E-Waste</SelectItem>
          </SelectContent>
        </Select>
        <Select value={year} onValueChange={setYear}>
          <SelectTrigger className="md:w-[120px]"><SelectValue placeholder="Year" /></SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>All years</SelectItem>
            {years.map(y => <SelectItem key={y} value={String(y)}>{y}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={impact} onValueChange={setImpact}>
          <SelectTrigger className="md:w-[140px]"><SelectValue placeholder="Impact" /></SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>All impact</SelectItem>
            <SelectItem value="High">High</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Low">Low</SelectItem>
          </SelectContent>
        </Select>
        {hasFilters && (
          <Button variant="ghost" onClick={reset} className="md:w-auto">
            <X className="h-4 w-4 mr-1" /> Clear
          </Button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
          No papers match your filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => <PaperCard key={p.id} paper={p} index={i} />)}
        </div>
      )}
    </section>
  );
};
