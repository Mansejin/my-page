import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Section } from "@/components/section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <Hero />

        <Section id="about" title="소개">
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">
            {siteConfig.intro}
          </p>
        </Section>

        <Section id="skills" title="기술">
          <Skills />
        </Section>

        <Section id="experience" title="경력">
          <Experience />
        </Section>

        <Section id="projects" title="프로젝트">
          <Projects />
        </Section>

        <Section id="contact" title="연락">
          <Contact />
        </Section>

        <SiteFooter />
      </main>
    </>
  );
}
