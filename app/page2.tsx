import { Approach } from "@/components/approach";
import Clients from "@/components/clients";
import Experience from "@/components/experiences";
import Footer from "@/components/footer";
import { BentoDemo } from "@/components/grid";
import Hero from "@/components/hero";
import { Introduction } from "@/components/intro";
import { Navbar } from "@/components/navbar";
import RecentProjects from "@/components/recent-projects";
import React, { ReactNode } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Contact from "@/components/contact";
import { HappyClients } from "@/components/happy-clients";

const AnimatedSection = ({ children }: { children: ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
const Page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10">
      <div className="fixed bottom-4 z-[99999999999]">
        <Navbar />
      </div>
      <div className="max-w-7xl w-full">
        <AnimatedSection>
          <div id="hero">
            {/* <Hero /> */}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="introduction">
            <Introduction />
          </div>
        </AnimatedSection>
        <HappyClients />
        <AnimatedSection>
          <div id="">
            <BentoDemo />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div id="projects">
            <RecentProjects />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="clients">
            <Clients />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="experience">
            <Experience />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="approach">
            <Approach />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="contact">
            <Contact />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </div>
    </main>
  );
};

export default Page;
