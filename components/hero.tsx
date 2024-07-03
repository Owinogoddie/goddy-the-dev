"use client";
import React from "react";
import { Spotlight } from "./magicui/spotlight";
import { TextGenerateEffect } from "./magicui/text-generate-effect";
import { HireMe } from "./hire-me";
import SparklesText from "./magicui/sparkles-text";
import { TypewriterEffectSmooth } from "./magicui/typewriter-effect";
import { HappyClients } from "./happy-clients";
import ResumeViewer from "./resume-viewer";

  const resumePdfUrl = '/resume.pdf';

const Hero = () => {
  const words = [
    {
      text: "Transforming",
    },
    {
      text: "concepts",
    },
    {
      text: "into",
    },
    {
      text: "seamless",
    },

    {
      text: "user",
    },
    {
      text: "Experiences.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const heretxt = "Transforming Concepts into Seamless User Experiences";
  return (
    <div className="pb-20 pt-20">
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh w-[50vw]]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="flex gap-4">
            <SparklesText
              text="THE WIZARD"
              className="text-sm"
              colors={{ first: "#A07CFE", second: "#FE8FB5" }}
            />
            <SparklesText
              text="THE WEB MASTER"
              className="text-sm text-black"
              colors={{ first: "#33ccff", second: "#9800ad" }}
            />
            {/* <SparklesText text="DYNAMIC WEB MAGICIAN" className="text-sm"
            colors={{ first: "#55088d", second: "#223ba1" }} /> */}
          </div>

          <TypewriterEffectSmooth words={words} className="" />
          {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! 🖐 I&apos;m Godfrey, a Web Developer based in Kenya.
          </p> */}
          <HireMe />
          <div className="my-2">
          <ResumeViewer pdfUrl={resumePdfUrl} />
          </div>
          {/* <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            /> */}
          {/* </a> */}

          {/* <HappyClients /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
