import type { Impact, Theme } from "@/data/papers";

export const themeBadgeClass: Record<Theme, string> = {
  Energy: "bg-energy/10 text-energy border-energy/20",
  "Supply Chain": "bg-supply/10 text-supply border-supply/20",
  "E-Waste": "bg-ewaste/10 text-ewaste border-ewaste/20",
};

export const themeDotClass: Record<Theme, string> = {
  Energy: "bg-energy",
  "Supply Chain": "bg-supply",
  "E-Waste": "bg-ewaste",
};

export const themeGradient: Record<Theme, string> = {
  Energy: "gradient-energy",
  "Supply Chain": "gradient-supply",
  "E-Waste": "gradient-ewaste",
};

export const impactBadgeClass: Record<Impact, string> = {
  High: "bg-impact-high/10 text-impact-high border-impact-high/30",
  Medium: "bg-impact-medium/10 text-impact-medium border-impact-medium/30",
  Low: "bg-impact-low/10 text-impact-low border-impact-low/30",
};

export const themeHsl: Record<Theme, string> = {
  Energy: "hsl(217 91% 55%)",
  "Supply Chain": "hsl(25 95% 53%)",
  "E-Waste": "hsl(0 78% 56%)",
};
