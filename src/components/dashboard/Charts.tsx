import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { papers, type Theme } from "@/data/papers";
import { themeHsl } from "@/lib/theme-utils";

const themes: Theme[] = ["Energy", "Supply Chain", "E-Waste"];

const themeData = themes.map(t => ({
  theme: t,
  count: papers.filter(p => p.theme === t).length,
  fill: themeHsl[t],
}));

const yearData = Array.from(new Set(papers.map(p => p.year)))
  .sort()
  .map(y => ({ year: y, papers: papers.filter(p => p.year === y).length }));

const ChartCard = ({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) => (
  <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
    <div className="mb-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
    </div>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        {children as any}
      </ResponsiveContainer>
    </div>
  </div>
);

const tooltipStyle = {
  background: "hsl(var(--popover))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "0.75rem",
  fontSize: "12px",
  color: "hsl(var(--foreground))",
};

export const Charts = () => (
  <section id="charts" className="container py-16 border-t border-border/60">
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold">Data visualisation</h2>
      <p className="text-muted-foreground mt-2">Patterns across themes, years, and distribution.</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <ChartCard title="Papers by theme" subtitle="Counts across the three research domains">
        <BarChart data={themeData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis dataKey="theme" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "hsl(var(--muted))" }} />
          <Bar dataKey="count" radius={[8, 8, 0, 0]}>
            {themeData.map((d) => <Cell key={d.theme} fill={d.fill} />)}
          </Bar>
        </BarChart>
      </ChartCard>

      <ChartCard title="Publications per year" subtitle="Temporal distribution 2017–2023">
        <LineChart data={yearData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
          <Tooltip contentStyle={tooltipStyle} />
          <Line type="monotone" dataKey="papers" stroke="hsl(var(--energy))" strokeWidth={2.5} dot={{ r: 4, fill: "hsl(var(--energy))" }} activeDot={{ r: 6 }} />
        </LineChart>
      </ChartCard>

      <ChartCard title="Theme distribution" subtitle="Share of total research corpus">
        <PieChart>
          <Pie data={themeData} dataKey="count" nameKey="theme" cx="50%" cy="50%" innerRadius={50} outerRadius={85} paddingAngle={3}>
            {themeData.map((d) => <Cell key={d.theme} fill={d.fill} />)}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 12 }} iconType="circle" />
        </PieChart>
      </ChartCard>
    </div>
  </section>
);
