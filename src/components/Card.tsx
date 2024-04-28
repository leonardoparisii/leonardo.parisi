import classNames from "classnames";
import React from "react";
import Button from "./ui/Button";
import Link from "next/link";

type Props = {
  workType: "work" | "side";
  title: string;
  label: string;
  desc: string;
  dates: {
    from: string;
    to: string;
  };
  url: string;
  type: string;
  link?: any;
} & (
  | { workType: "work"; stack: string[] }
  | { workType: "side"; stack?: string[] }
);

const Card = ({
  workType,
  title,
  label,
  desc,
  dates,
  url,
  type,
  stack,
  link,
  ...props
}: Props) => {
  return (
    <div
      className={classNames(
        "w-full flex flex-col py-8 gap-4",
        workType == "work" && "border-b-2 border-dark gap-8"
      )}
      {...props}
    >
      {workType == "work" ? (
        <div className="flex justify-between w-full">
          <div className="w-fit flex flex-col gap-3">
            <div className="relative flex w-fit items-center">
              <div className="md:text-[44px] text-4xl font-semibold font-source">
                {title}
              </div>
              <Link
                href={link}
                target="_blank"
                className="absolute -top-3 -right-8 underline font-questrial text-lg rounded-full"
              >
                Visit
              </Link>
            </div>
            <div className="font-questrial md:text-2xl sm:text-[22px] text-lg">
              {label}
            </div>
          </div>
          <div className="w-fit flex flex-col items-end gap-3 font-questrial md:text-[22px] sm:text-xl text-lg py-2">
            <div className="flex gap-1.5">
              <div className="w-full">{dates.from}</div>
              <div>-</div>
              <div className={classNames(dates.to == "Present" && "underline")}>
                {dates.to}
              </div>
            </div>
            <div>{type}</div>
          </div>
        </div>
      ) : (
        <div className="text-[40px] font-semibold font-source">{title}</div>
      )}
      <div className="flex lg:gap-24 sm:gap-8 gap-6 max-lg:flex-col-reverse">
        <div
          className={classNames(
            workType == "work" && "md:max-w-[80%]",
            "font-questrial md:text-xl text-lg w-full"
          )}
        >
          {desc}
        </div>
        {workType == "side" && (
          <div className="w-fit flex flex-col gap-3 font-questrial text-xl">
            <div className="font-questrial text-nowrap">{label}</div>
            <div className="flex w-fit gap-1.5">
              <div className="w-full">{dates.from}</div>
              <div>-</div>
              <div className={classNames(dates.to == "Present" && "underline")}>
                {dates.to}
              </div>
            </div>
          </div>
        )}
      </div>
      {workType == "work" && (
        <div className="flex flex-wrap gap-2">
          {stack.map((item, i) => (
            <Button
              key={i}
              title={item}
              className="rounded-full py-1.5 px-3 bg-dark text-neutral-300 font-normal max-xs:font-light font-questrial md:text-base text-[15px] max-xs:text-sm"
            ></Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
