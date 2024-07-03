import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CoolPortfolioComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const speech = `Hey there! I'm not your average developer. I'm a full-stack virtuoso crafting end-to-end digital experiences that captivate and inspire. From sleek front-end interfaces to robust back-end systems, I bring ideas to life. With Next.js, React, and TypeScript, I build lightning-fast, scalable apps that users can't resist. But here's where it gets exciting - I integrate cutting-edge AI to create truly intelligent solutions. Imagine an app that learns, adapts, and exceeds expectations. That's what I deliver. Full-stack mastery, AI innovation, and a passion for perfection. Let's revolutionize your digital presence and leave your competition in awe.`;

  const pages = speech.split('.').filter(sentence => sentence.trim() !== '').map(sentence => sentence.trim() + '.');

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 && currentPage < pages.length - 1) {
        setDirection(1);
        setCurrentPage(prev => prev + 1);
      } else if (e.deltaY < 0 && currentPage > 0) {
        setDirection(-1);
        setCurrentPage(prev => prev - 1);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage, pages.length]);

  const pageVariants = {
    enter: (direction: number) => ({
      transform: `perspective(1000px) rotateY(${direction > 0 ? '90deg' : '-90deg'})`,
      opacity: 0,
      zIndex: 10,
    }),
    center: {
      transform: 'perspective(1000px) rotateY(0deg)',
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      transform: `perspective(1000px) rotateY(${direction < 0 ? '90deg' : '-90deg'})`,
      opacity: 0,
      zIndex: 0,
    }),
  };

  const pageTransition = {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex justify-center items-center p-4">
      <div className="w-full max-w-2xl aspect-[3/4] bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden relative perspective">
        <div className="absolute inset-0 bg-opacity-10 bg-orange-100 dark:bg-opacity-10 dark:bg-orange-900" 
             style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f97316' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")"}}
        />
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={pageTransition}
            className="absolute inset-0 flex flex-col justify-center items-center p-8 backface-hidden"
          >
            <div className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-serif italic">
              &quot;{pages[currentPage]}&quot;
            </div>
            <div className="mt-4 text-gray-600 dark:text-gray-400">
              Page {currentPage + 1} of {pages.length}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CoolPortfolioComponent;