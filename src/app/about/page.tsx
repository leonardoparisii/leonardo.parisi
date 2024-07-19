"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Link from "next/link";
import data from "@/data/data.json";
import Button from "@/components/ui/Button";

const page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1000);
    })();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className={`flex flex-col w-full justify-center items-start`}>
      {!isMobile && (
        <AnimatedCursor
          innerSize={36}
          innerStyle={{
            border: "2px solid #6b6253",
            background: "transparent",
          }}
          outerStyle={{ background: "#6b625320" }}
          outerSize={26}
          color="255, 255, 255"
          outerAlpha={1}
          innerScale={0.05}
          outerScale={2}
        />
      )}
      <div className="h-screen w-screen 2xl:text-[192px] lg:text-[132px] md:text-[112px] xs:text-[106px] text-8xl font-source sm:pt-[464px] pt-[382px]">
        <div className="w-fit 2xl:pl-[338px] xl:pl-[292px] lg:pl-[216px] md:pl-[15%] pl-[10%]">
          <div className="relative">
            <div
              style={{
                clipPath: "inset(0% 0% -20% 0%)",
              }}
            >
              <motion.div
                className="relative"
                initial={{
                  transform: "translateY(220px)",
                }}
                animate={{
                  transform: "translateY(0px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 25,
                  duration: 0.75,
                  delay: 0.25,
                }}
              >
                <div className="font-source flex max-sm:flex-col gap-4">
                  About
                </div>
              </motion.div>
            </div>
            <motion.div
              className="relative"
              initial={{
                transform: "translateY(-320px)",
                opacity: 0,
              }}
              animate={{
                transform: "translateY(-240px)",
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 25,
                duration: 0.75,
                delay: 1.5,
              }}
            >
              <Image
                src={"/about_image_1.png"}
                alt="Profile Image 1"
                width={300}
                height={300}
                className="absolute z-[1] lg:-top-52 md:-top-48 sm:-top-40 -top-28 xl:-right-[424px] lg:-right-[342px] md:-right-[312px] sm:-right-[242px] -right-[44px] max-xs:mr-[32px] rounded-2xl 2xl:w-72 xl:w-64 lg:w-60 md:w-56 sm:w-52 w-48"
              />
            </motion.div>
            {/* <motion.div
              className="relative"
              initial={{
                transform: "translateY(-308px)",
                opacity: 0,
              }}
              animate={{
                transform: "translateY(-272px)",
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 25,
                duration: 0.75,
                delay: 2.25,
              }}
            >
              <Image
                src={"/about_image_2.png"}
                alt="Profile Image 2"
                width={300}
                height={300}
                className="absolute z-[2] lg:-top-52 md:-top-48 sm:-top-40 -top-28 xl:-right-[396px] lg:-right-[342px] md:-right-[312px] sm:-right-[242px] -right-[44px] max-xs:mr-[32px] rounded-2xl 2xl:w-72 xl:w-64 lg:w-60 md:w-56 sm:w-52 w-48"
              />
            </motion.div>
            <motion.div
              className="relative"
              initial={{
                transform: "translateY(-262px)",
                opacity: 0,
              }}
              animate={{
                transform: "translateY(-226px)",
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 25,
                duration: 0.75,
                delay: 3,
              }}
            >
              <Image
                src={"/about_image_3.png"}
                alt="Profile Image 3"
                width={300}
                height={300}
                className="absolute z-[2] lg:-top-52 md:-top-48 sm:-top-40 -top-28 xl:-right-[346px] lg:-right-[342px] md:-right-[312px] sm:-right-[242px] -right-[44px] max-xs:mr-[32px] rounded-2xl 2xl:w-72 xl:w-64 lg:w-60 md:w-56 sm:w-52 w-48"
              />
            </motion.div>
            <motion.div
              className="relative"
              initial={{
                transform: "translateY(-232px)",
                opacity: 0,
              }}
              animate={{
                transform: "translateY(-186px)",
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 25,
                duration: 0.75,
                delay: 3.75,
              }}
            >
              <Image
                src={"/about_image_4.png"}
                alt="Profile Image 4"
                width={300}
                height={300}
                className="absolute z-[2] lg:-top-52 md:-top-48 sm:-top-40 -top-28 xl:-right-[466px] lg:-right-[342px] md:-right-[312px] sm:-right-[242px] -right-[44px] max-xs:mr-[32px] rounded-2xl 2xl:w-72 xl:w-64 lg:w-60 md:w-56 sm:w-52 w-48"
              />
            </motion.div>
            <motion.div
              className="relative"
              initial={{
                transform: "translateY(-256px)",
                opacity: 0,
              }}
              animate={{
                transform: "translateY(-232px)",
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 25,
                duration: 0.75,
                delay: 4.5,
              }}
            >
              <Image
                src={"/about_image_5.png"}
                alt="Profile Image 5"
                width={300}
                height={300}
                className="absolute z-[2] lg:-top-52 md:-top-48 sm:-top-40 -top-28 xl:-right-[546px] lg:-right-[342px] md:-right-[312px] sm:-right-[242px] -right-[44px] max-xs:mr-[32px] rounded-2xl 2xl:w-72 xl:w-64 lg:w-60 md:w-56 sm:w-52 w-48"
              />
            </motion.div>
            <motion.div
              className="relative"
              initial={{
                transform: "translateY(-296px)",
                opacity: 0,
              }}
              animate={{
                transform: "translateY(-256px)",
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 25,
                duration: 0.75,
                delay: 5.25,
              }}
            >
              <Image
                src={"/about_image_6.png"}
                alt="Profile Image 6"
                width={300}
                height={300}
                className="absolute z-[2] lg:-top-52 md:-top-48 sm:-top-40 -top-28 xl:-right-[612px] lg:-right-[342px] md:-right-[312px] sm:-right-[242px] -right-[44px] max-xs:mr-[32px] rounded-2xl 2xl:w-72 xl:w-64 lg:w-60 md:w-56 sm:w-52 w-48"
              />
            </motion.div> */}
          </div>
        </div>
      </div>
      <div className="md:my-[50vh] my-[15vh] flex max-lg:flex-col w-fit mx-auto gap-12 px-8">
        <div className="flex flex-col gap-3">
          <Title
            text="Hi, I'm Leonardo Parisi,"
            reference={titleRef}
            className="lg:text-5xl sm:text-4xl text-wrap font-source"
            border={false}
            viewMargin={"0px 0px 0% 0px"}
          />
          <div className="font-questrial text-xl flex flex-col gap-3 max-w-[500px]">
            <div className="text-wrap">
              a deeply passionate Frontend developer. I like to build dynamic
              and engaging user experiences through my proficiency with the best
              and latest technologies.{" "}
            </div>
            <div className="text-wrap">
              With a keen eye for design aesthetics and a commitment to staying
              updated with the latest web development trends, I love to turn
              complex ideas into intuitive digital solutions.
            </div>
            <div>
              You can read my resume at 
              <Link
                href={"https://read.cv/leonardoparisi"}
                className="underline"
              >
                read.cv/leonardoparisi.
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Title
            text="Technical Expertise"
            reference={titleRef}
            className="lg:text-5xl text-4xl text-wrap font-source"
            border={false}
            delay={0.75}
            viewMargin={"0px 0px 0% 0px"}
          />
          <div className="flex flex-wrap max-w-[425px] gap-2">
            {data.tech_stack.map((item: string, i: number) => (
              <Button
                key={i}
                title={item}
                className="rounded-full py-1.5 px-3 bg-dark text-neutral-300 font-thin font-questrial md:text-base sm:text-[15px] text-sm max-xs:text-sm"
              ></Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
