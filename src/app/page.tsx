import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContributionsSection } from "@/components/contributions-section";
import { SocialSection } from "@/components/social-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContributionsSection />
      <SocialSection />
      <Footer />
    </main>
  );
}