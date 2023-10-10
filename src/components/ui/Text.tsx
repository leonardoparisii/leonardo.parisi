"use client";

import { TextProps } from "@/types/index";

export default function Text({ text, secondaryText, customStyle }: TextProps) {
  return (
    <div
      className={`${
        customStyle ? customStyle : "font-bold text-xl text-slate-500"
      } font-mulish`}
    >
      {text} <br />
      {secondaryText}
    </div>
  );
}
