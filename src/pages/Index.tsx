import { Header } from "@/components/dashboard/Header";
import { Hero } from "@/components/dashboard/Hero";
import { Overview } from "@/components/dashboard/Overview";
import { Charts } from "@/components/dashboard/Charts";
import { PapersSection } from "@/components/dashboard/PapersSection";
import { ThemeInsights } from "@/components/dashboard/ThemeInsights";
import { CrossThemeFlow } from "@/components/dashboard/CrossThemeFlow";
import { TopPapers } from "@/components/dashboard/TopPapers";
import { Footer } from "@/components/dashboard/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <Overview />
      <Charts />
      <ThemeInsights />
      <CrossThemeFlow />
      <TopPapers />
      <PapersSection />
    </main>
    <Footer />
  </div>
);

export default Index;
