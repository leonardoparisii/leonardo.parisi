"use client";
import { TextProps } from "@/types/index";

export default function Text({ text, secondaryText, className }: TextProps) {
  return (
    <div
      className={`${
        className ? className : "font-semibold text-[17px] text-dark"
      } font-questrial h-fit`}
    >
      {text} <br />
      {secondaryText}
    </div>
  );
}
