"use client";
import { ButtonProps } from "@/types/index";
import classNames from "classnames";

export default function Button({ title, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        className,
        "transition-all w-fit py-2 px-3.5 text-base text-black font-semibold"
      )}
    >
      {title}
    </button>
  );
}
