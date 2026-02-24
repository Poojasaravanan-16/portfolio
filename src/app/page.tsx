"use client";

import Banner from "@/components/Banner";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ExperienceCredentials from "@/components/ExperienceCredentials";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import SocialSidebar from "@/components/SocialSidebar";
import { HorizontalScrollContainer } from "@/components/HorizontalScrollContainer";
import { HorizontalSection } from "@/components/HorizontalSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <SocialSidebar />
      <Header />
      <HorizontalScrollContainer>
        <HorizontalSection id="home" isHome className="bg-[url('/topography.svg')] bg-repeat">
          <Banner />
        </HorizontalSection>
        
        <HorizontalSection id="about" hideIndicator className="bg-[url('/topography.svg')] bg-repeat">
          <About />
        </HorizontalSection>
        
        <HorizontalSection id="projects" className="bg-[url('/topography.svg')] bg-repeat">
          <Projects />
        </HorizontalSection>
        
        <HorizontalSection id="experience" className="bg-[url('/topography.svg')] bg-repeat">
          <ExperienceCredentials />
        </HorizontalSection>
        
        <HorizontalSection id="education" className="bg-[url('/topography.svg')] bg-repeat">
          <Education />
        </HorizontalSection>
        
        <HorizontalSection id="contact" className="bg-[url('/topography.svg')] bg-repeat">
          <Contact />
        </HorizontalSection>
      </HorizontalScrollContainer>
    </main>
  );
}
