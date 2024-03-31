"use client";

import { TitleProps } from "@/types/index";

export default function Title({ title, className }: TitleProps) {
  return (
    <div
      className={`${
        className
          ? className
          : "lg:text-7xl text-5xl max-md:text-[38px] font-medium text-dark"
      } font-satoshi `}
    >
      {title}
    </div>
  );
}
