"use client";
import { ButtonProps } from "@/types/index";

export default function Button({ title, onClick, customStyle }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${customStyle} transition-all bg-slate-700/20 w-fit py-2 px-3.5 cursor-pointer rounded-lg text-sm text-black font-semibold border border-slate-700/70 box-border transition-colors hover:bg-white hover:text-black hover:border-slate-500/50`}
    >
      {title}
    </button>
  );
}
