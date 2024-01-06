"use client";

import { TextProps } from "@/types/index";

export default function Text({
  text,
  secondaryText,
  customStyle,
  id,
}: TextProps) {
  return (
    <div
      className={`cursor-default ${
        customStyle ? customStyle : "font-semibold text-[17px] text-dark"
      } font-mulish`}
      id={id}
    >
      {text} <br />
      {secondaryText}
    </div>
  );
}
