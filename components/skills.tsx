import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function Skills() {
  return (
    <div className="relative flex flex-col  w-full max-w-[32rem] items-center justify-center overflow-hidden  bg-transparent px-20  pt-4 text-purple-200 ">
      <p className="text-xl -mb-4 capitalize">My Techstack</p>
      <IconCloud iconSlugs={slugs} />
     {/* <p className="absolute left-4 bottom-3">Skills</p> */}
    </div>
  );
}
