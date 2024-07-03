'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Introduction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const speech = `Hey there! 🖐 ,
  
  I'm Godfrey, the dev you've been looking for. I'm a full-stack virtuoso crafting end-to-end digital experiences that captivate and inspire.

From sleek front-end interfaces to robust back-end systems, I bring ideas to life. With Next.js, React, and TypeScript, I build lightning-fast, scalable apps that users can't resist.

But here's where it gets exciting - I integrate cutting-edge AI to create truly intelligent solutions. Imagine an app that learns, adapts, and exceeds expectations. That's what I deliver.

Full-stack mastery, AI innovation, and a passion for perfection. Let's revolutionize your digital presence and leave your competition in awe.





`;

  const paragraphs = speech.split('\n\n');

  const bookRotation = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const bookScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div className="-mt-40 mb-12 min-h-[100vh]">
      <motion.div 
        ref={containerRef}
        className="max-w-xl mx-auto mb-10 relative"
        style={{
          rotateX: bookRotation,
          scale: bookScale,
        }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-opacity-10 bg-orange-100 dark:bg-opacity-10 dark:bg-orange-900" 
            style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f97316' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")"}}
          />
          <AnimatedQuoteMark isOpening={true} progress={scrollYProgress} />
          <div className="pl-8 pr-8 relative z-10">
            {paragraphs.map((paragraph, index) => (
              <Paragraph key={index} text={paragraph} progress={scrollYProgress} startRange={index / paragraphs.length} endRange={(index + 1) / paragraphs.length} />
            ))}
          </div>
          <AnimatedQuoteMark isOpening={false} progress={scrollYProgress} />
        </div>
      </motion.div>
      <ScrollDownIndicator />
    </div>
  );
};

const Paragraph: React.FC<{ text: string; progress: any; startRange: number; endRange: number }> = ({ text, progress, startRange, endRange }) => {
  const opacity = useTransform(progress, [startRange, startRange + 0.25], [0.2, 1]);
  const color = useTransform(progress, [startRange, startRange + 0.25], ["#6B7280", "#FFFFFF"]);

  return (
    <motion.p 
      style={{ opacity, color }} 
      className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-serif italic mb-6"
    >
      {text}
    </motion.p>
  );
};

const AnimatedQuoteMark: React.FC<{ isOpening: boolean; progress: any }> = ({ isOpening, progress }) => {
  const quoteY = useTransform(progress, [0, 1], [0, 50]);
  const quoteOpacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const quoteScale = useTransform(progress, [0, 0.5, 1], [1, 1.5, 1]);

  return (
    <motion.span 
      style={{ 
        opacity: quoteOpacity,
        y: quoteY,
        scale: quoteScale,
      }}
      className={`text-6xl sm:text-7xl md:text-8xl text-white font-serif absolute z-20 ${isOpening ? 'top-0 left-0' : 'bottom-0 right-0'}`}
    >
      {isOpening ? '"' : '"'}
    </motion.span>
  );
};

const ScrollDownIndicator: React.FC = () => {
  return (
    <motion.div 
      className="flex justify-center items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
    >
      <svg className="w-12 h-12 text-slate-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
      <span className="ml-2 text-xl text-orange-500 font-semibold">Scroll for more</span>
    </motion.div>
  );
};