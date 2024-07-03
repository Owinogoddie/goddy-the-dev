import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { companies } from "@/data";
import React from "react";
import Image from "next/image";


const firstRow = companies.slice(0, companies.length / 2);
const secondRow = companies.slice(companies.length / 2);

const ReviewCard = ({
  img,
  name,
  id,
  nameImg,
}: {
  img: string;
  name: string;
  id: number;
  nameImg: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-black-100 dark:bg-transparent dark:hover:bg-black-100/[.15]",
      )}
    >
      <React.Fragment key={id}>
      <div className="flex md:max-w-60 max-w-32 gap-2">
  <Image
    src={img}
    alt={name}
    width={40}
    height={40}
    className="md:w-10 w-5"
  />
  <Image
    src={nameImg}
    alt={name}
    width={id === 4 || id === 5 ? 100 : 150}
    height={24}
    className="md:w-24 w-20"
  />
</div>
  </React.Fragment>
    </figure>
  );
};

export const Companies = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden  bg-black-100  md:shadow-xl z-0">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black-100"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black-100"></div>
    </div>
  );
};

