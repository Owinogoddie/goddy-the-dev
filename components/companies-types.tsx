"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let services = [
  {
    name: "Custom Web Development",
    description: "Crafting tailored websites that perfectly align with your brand",
    icon: "🌐",
    color: "#4285F4",
    time: "Ongoing",
  },
  {
    name: "AI Integration",
    description: "Implementing cutting-edge AI solutions to enhance user experience",
    icon: "🤖",
    color: "#EA4335",
    time: "Latest Tech",
  },
  {
    name: "Mobile App Creation",
    description: "Developing responsive and intuitive mobile applications",
    icon: "📱",
    color: "#FBBC05",
    time: "Cross-platform",
  },
  {
    name: "E-commerce Solutions",
    description: "Building robust online stores with secure payment gateways",
    icon: "🛒",
    color: "#34A853",
    time: "24/7 Support",
  },
  {
    name: "Performance Optimization",
    description: "Enhancing website speed and efficiency for better user retention",
    icon: "⚡",
    color: "#FF6D01",
    time: "Continuous",
  },
  {
    name: "UI/UX Design",
    description: "Creating visually appealing and user-friendly interfaces",
    icon: "🎨",
    color: "#9C27B0",
    time: "Trend-setting",
  },
  {
    name: "SEO Improvement",
    description: "Boosting your online visibility and search engine rankings",
    icon: "🔍",
    color: "#00C853",
    time: "Ongoing",
  },
  {
    name: "Cloud Integration",
    description: "Implementing scalable cloud solutions for your business",
    icon: "☁️",
    color: "#03A9F4",
    time: "Future-proof",
  },
  {
    name: "Data Analytics",
    description: "Providing insights through advanced data analysis techniques",
    icon: "📊",
    color: "#FF5722",
    time: "Real-time",
  },
  {
    name: "Cybersecurity",
    description: "Ensuring robust security measures to protect your digital assets",
    icon: "🔒",
    color: "#607D8B",
    time: "24/7 Protection",
  },
];

const Service = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function Companies() {
  return (
   <div className="flex mx-auto">
     <div className="relative flex items-center justify-center max-h-[400px] min-h-[400px] w-full flex-col overflow-hidden rounded-lg border bg-black-100 p-6 shadow-lg">
        <h2 className="absolute top-0 z-50 text-pretty text-2xl bg-black-100 capitalize p-3 rounded-lg text-purple-500 mb-3">How I Can Empower Your Digital Journey</h2>
      <AnimatedList>
        {services.map((item, idx) => (
          <Service {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
   </div>
  );
}