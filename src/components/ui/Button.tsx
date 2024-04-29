"use client";
import { ButtonProps } from "@/types/index";
import classNames from "classnames";
import Link from "next/link";

export default function Button({
  title,
  className,
  link,
  ...props
}: ButtonProps) {
  return (
    <Link href={link ?? ""}>
      <button
        {...props}
        className={classNames(
          className,
          "transition-all w-fit py-2 px-3.5 text-base text-black font-semibold select-none"
        )}
      >
        {title}
      </button>
    </Link>
  );
}
