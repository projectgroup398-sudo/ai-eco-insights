export type Theme = "Energy" | "Supply Chain" | "E-Waste";
export type Impact = "High" | "Medium" | "Low";

export interface Paper {
  id: number;
  title: string;
  author: string;
  year: number;
  theme: Theme;
  summary: string;
  impact: Impact;
}

export const papers: Paper[] = [
  { id: 1, title: "Energy and Policy Considerations for Deep Learning", author: "Strubell et al.", year: 2019, theme: "Energy", summary: "Training large AI models produces high carbon emissions.", impact: "High" },
  { id: 2, title: "Data Centres and Data Transmission Networks", author: "IEA", year: 2023, theme: "Energy", summary: "Data centres contribute significantly to global electricity demand.", impact: "High" },
  { id: 3, title: "Greening Digital Technologies", author: "ITU", year: 2022, theme: "Energy", summary: "Energy efficiency is critical for sustainable computing systems.", impact: "Medium" },
  { id: 4, title: "The Carbon Footprint of AI Systems", author: "Henderson et al.", year: 2020, theme: "Energy", summary: "AI model training contributes to environmental emissions.", impact: "High" },
  { id: 5, title: "Green AI: Efficiency and Sustainability", author: "Schwartz et al.", year: 2020, theme: "Energy", summary: "AI should balance performance with energy efficiency.", impact: "High" },
  { id: 6, title: "Energy Usage in Cloud Computing", author: "Jones", year: 2018, theme: "Energy", summary: "Cloud infrastructure increases electricity consumption.", impact: "Medium" },
  { id: 7, title: "AI Infrastructure and Power Demand", author: "Smith", year: 2021, theme: "Energy", summary: "Growth of AI increases computational energy demand.", impact: "Medium" },
  { id: 8, title: "Critical Raw Materials Resilience", author: "European Commission", year: 2020, theme: "Supply Chain", summary: "AI hardware depends on rare earth materials.", impact: "High" },
  { id: 9, title: "Supply Chain Challenges in Semiconductor Industry", author: "Lee", year: 2021, theme: "Supply Chain", summary: "Semiconductor production relies on complex global supply chains.", impact: "Medium" },
  { id: 10, title: "Rare Earth Mining and Environmental Impact", author: "Brown", year: 2019, theme: "Supply Chain", summary: "Mining causes environmental degradation and pollution.", impact: "High" },
  { id: 11, title: "Sustainability in Electronics Manufacturing", author: "Wang", year: 2020, theme: "Supply Chain", summary: "Manufacturing processes have significant environmental impact.", impact: "Medium" },
  { id: 12, title: "Global Resource Supply Risks", author: "OECD", year: 2018, theme: "Supply Chain", summary: "Dependence on limited resources creates supply risks.", impact: "Medium" },
  { id: 13, title: "Material Footprint of AI Hardware", author: "Kumar", year: 2022, theme: "Supply Chain", summary: "AI hardware production requires intensive material use.", impact: "High" },
  { id: 14, title: "Geopolitics of Rare Earth Elements", author: "Zhang", year: 2021, theme: "Supply Chain", summary: "Resource concentration creates geopolitical challenges.", impact: "Medium" },
  { id: 15, title: "Global E-waste Monitor", author: "UNU", year: 2020, theme: "E-Waste", summary: "E-waste is rapidly increasing globally.", impact: "High" },
  { id: 16, title: "Electronic Waste and Environmental Risk", author: "Greenpeace", year: 2019, theme: "E-Waste", summary: "Improper disposal leads to pollution and health risks.", impact: "High" },
  { id: 17, title: "Lifecycle of Computing Hardware", author: "Davis", year: 2018, theme: "E-Waste", summary: "Short lifecycle increases waste generation.", impact: "Medium" },
  { id: 18, title: "Recycling Challenges in Electronics", author: "Wilson", year: 2021, theme: "E-Waste", summary: "Recycling electronic components is complex and inefficient.", impact: "Medium" },
  { id: 19, title: "Circular Economy in Technology", author: "Ellen MacArthur Foundation", year: 2019, theme: "E-Waste", summary: "Reusing materials reduces environmental impact.", impact: "Medium" },
  { id: 20, title: "Toxic Materials in E-waste", author: "UNEP", year: 2017, theme: "E-Waste", summary: "E-waste contains hazardous substances harmful to health.", impact: "High" },
  { id: 21, title: "AI Hardware Lifecycle Impact", author: "Patel", year: 2022, theme: "E-Waste", summary: "Frequent upgrades increase hardware waste.", impact: "Medium" },
  { id: 22, title: "Green Computing Strategies", author: "ITU", year: 2022, theme: "Energy", summary: "Sustainable computing reduces environmental impact.", impact: "Medium" },
  { id: 23, title: "Sustainable AI Development", author: "UNESCO", year: 2021, theme: "Energy", summary: "AI development should align with sustainability goals.", impact: "Medium" },
  { id: 24, title: "Environmental Impact of Data Centres", author: "IEA", year: 2022, theme: "Energy", summary: "Data centres are major contributors to emissions.", impact: "High" },
  { id: 25, title: "AI and Climate Change", author: "Nature", year: 2020, theme: "Energy", summary: "AI contributes to both environmental harm and solutions.", impact: "High" },
  { id: 26, title: "Digital Sustainability Trends", author: "World Bank", year: 2021, theme: "Supply Chain", summary: "Sustainable digital systems require resource management.", impact: "Medium" },
  { id: 27, title: "Future of Sustainable Computing", author: "McKinsey", year: 2023, theme: "Energy", summary: "Efficiency and policy are key to sustainable AI growth.", impact: "Medium" },
];

export const themeInsights: Record<Theme, { findings: string[]; impacts: string[] }> = {
  Energy: {
    findings: [
      "Training large language models can emit as much CO₂ as five cars over their lifetimes.",
      "Data centres account for an estimated 1–2% of global electricity demand and rising.",
      "Energy efficiency must be a first-class metric alongside accuracy in AI research.",
    ],
    impacts: [
      "Increased greenhouse gas emissions from compute-intensive training.",
      "Higher pressure on regional power grids near hyperscale data centres.",
      "Growing water consumption for cooling at scale.",
    ],
  },
  "Supply Chain": {
    findings: [
      "AI accelerators rely on rare earth elements concentrated in a few geographies.",
      "Semiconductor fabrication is one of the most resource-intensive industries on the planet.",
      "Geopolitical concentration of critical minerals creates structural supply risk.",
    ],
    impacts: [
      "Land degradation and water pollution from rare-earth mining.",
      "Carbon-intensive global logistics for hardware components.",
      "Strategic vulnerabilities in technology sovereignty.",
    ],
  },
  "E-Waste": {
    findings: [
      "Global e-waste is growing ~3× faster than the world's population.",
      "Less than 20% of electronic waste is formally collected and recycled.",
      "Shortening hardware lifecycles in AI infrastructure accelerates obsolescence.",
    ],
    impacts: [
      "Toxic leaching of heavy metals into soil and groundwater.",
      "Health risks for informal recycling workers in the Global South.",
      "Lost value from unrecovered critical materials.",
    ],
  },
};
