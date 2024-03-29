"use client";
import Image from "next/image";
import Text from "@/components/ui/Text";
import { TechData } from "@/data/techstackData.js";
import Contact from "@/components/Contacts";
import About from "@/components/About";

export default function Home() {
  const today = new Date();
  const birthDate = new Date("2007-02-15");
  const age =
    today.getFullYear() -
    birthDate.getFullYear() -
    (today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
      ? 1
      : 0);

  const secondaryText = (
    <p>
      A {age}-year-old junior frontend <br className="md:hidden" /> developer
      based in Italy.
    </p>
  );

  return (
    <div className="flex w-full justify-center items-start">
      <div className="flex flex-col justify-center items-center gap-24 max-md:gap-16 lg:px-0 px-6 sm:px-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-24 max-md:gap-12 h-full">
          <div>
            <Image
              src="/ProfileImage.png"
              alt="ProfileImage"
              className="border-[1.5px] border-solid border-dark relative bg-no-repeat bg-cover animate-border"
              width={300}
              height={300}
              draggable={false}
            />
          </div>
          <div className="flex flex-col w-full gap-6 items-start my-auto">
            <div className="lg:text-7xl text-5xl max-md:text-[38px] sm:font-medium font-semibold font-satoshi text-[#151515]">
              Hi, I'm <span className="text-orange">Leonardo</span>!
            </div>
            <Text
              text="I'm Leonardo Parisi."
              secondaryText={secondaryText}
              customStyle="max-sm:w-full max-md:text-center text-dark font-semibold"
            />
          </div>
        </div>
        <div className="flex gap-12" id="stack">
          <div className="flex-row gap-12 items-center hidden md:flex">
            <Text
              text="TECH STACK"
              customStyle="font-extrabold text-xl text-dark mt-1 font-satoshi"
            />
            <Text text="|" customStyle="font-semibold text-2xl text-dark" />
          </div>
          <div className="flex flex-row gap-6 items-center justify-center mt-1">
            {TechData.map((item) => (
              <div
                className="sm:text-[26px] text-[22px] text-[#151515] hover:text-orange/90 transition-all duration-500 cursor-pointer h-fit w-fit"
                key={item.name}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <Contact />
          <About />
        </div>
      </div>
    </div>
  );
}
