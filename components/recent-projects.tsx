"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data";
import { PinContainer } from "./magicui/pin";
import { LocateIcon, X } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

const RecentProjects = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showLivePreview, setShowLivePreview] = useState(false);

  const handlePrevious = () => {
    setSelectedIndex((prev) =>
      prev === null || prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === null || prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const isPreviousDisabled = selectedIndex === 0;
  const isNextDisabled = selectedIndex === projects.length - 1;

  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item: Project, index: number) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
            onClick={() => setSelectedIndex(index)}
          >
            <PinContainer title={item.link} href="#">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src="/bg.png"
                    alt="bgimg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  width={300}
                  height={300}
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * iconIndex + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={`icon${iconIndex}`}
                        width={32}
                        height={32}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <LocateIcon className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              className="bg-gray-900 p-6 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative text-white"
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  {projects[selectedIndex].title}
                </h2>
                <button
                  onClick={() => setShowLivePreview(!showLivePreview)}
                  className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-purple-700 transition-colors"
                >
                  {showLivePreview ? "Show Details" : "Show Live Preview"}
                </button>
              </div>
              {showLivePreview ? (
                <iframe
                  src={projects[selectedIndex].link}
                  className="w-full h-[60vh] border-0 rounded"
                  title={projects[selectedIndex].title}
                />
              ) : (
                <>
                  <Image
                    src={projects[selectedIndex].img}
                    alt={projects[selectedIndex].title}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover mb-4 rounded"
                  />
                  <p className="text-gray-300 mb-4">
                    {projects[selectedIndex].des}
                  </p>
                </>
              )}
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrevious}
                  className={`px-4 py-2 rounded transition-colors ${
                    isPreviousDisabled
                      ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                  disabled={isPreviousDisabled}
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className={`px-4 py-2 rounded transition-colors ${
                    isNextDisabled
                      ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                  disabled={isNextDisabled}
                >
                  Next
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecentProjects;
