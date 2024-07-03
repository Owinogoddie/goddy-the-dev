"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./magicui/canvas-reveal-effect";
import ShineBorder from "./magicui/shine-border";

export function NextStep() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[20rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center hover:bg-black w-full gap-4 mx-auto px-8 relative"
    >
      <div className="flex flex-col items-center justify-center">
        <p className="md:text-3xl text-2xl font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
          Ready to take your digital presence to the next level?
        </p>
        <p className="md:text-lg text-md font-medium text-center text-muted relative z-20 max-w-2xl mx-auto">
          Reach out to me and lets discuss how i can help you achieve your goals
        </p>
        <ShineBorder
          className="text-center text-2xl font-bold capitalize"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          Shine Border
        </ShineBorder>
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}
