"use client";

import { TextProps } from "@/types/index";

export default function Text({ text, secondaryText, className }: TextProps) {
  return (
    <div
      className={`cursor-default ${
        className ? className : "font-semibold text-[17px] text-dark"
      } font-mulish`}
    >
      {text} <br />
      {secondaryText}
    </div>
  );
}
