"use client";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import ProfileImage from "../../public/ProfileImage.png";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import { TechData } from "@/data/techstackData.js";
import Contact from "@/components/Contacts";
import About from "@/components/About";

export default function Home() {
  const secondaryText = (
    <p className="text-xl">
      A 16-year-old junior frontend <br className="md:hidden" /> developer based
      in Italy.
    </p>
  );

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 0,
    config: { duration: 800 },
  });

  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 300,
    config: { duration: 800 },
  });

  const iconAnimations = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 1000,
    config: { duration: 800 },
  });

  return (
    <div className="flex w-full justify-center items-start">
      <div className="flex flex-col justify-center items-center gap-24 lg:px-0 px-6 sm:px-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-24 h-full">
          <animated.div style={imageAnimation}>
            <Image
              src={ProfileImage}
              alt="ProfileImage"
              className="border-2 border-solid border-slate-400 relative bg-no-repeat bg-cover animate-border"
              width={350}
              height={350}
              draggable={false}
            />
          </animated.div>
          <animated.div
            style={textAnimation}
            className="flex flex-col w-full gap-6 items-start my-auto"
          >
            <Title title="Hi, I'm Leonardo!" />
            <Text text="I'm Leonardo Parisi." secondaryText={secondaryText} />
          </animated.div>
        </div>
        <div className="flex gap-12">
          <animated.div
            style={useSpring({
              from: { opacity: 0, transform: "translateY(50px)" },
              to: { opacity: 1, transform: "translateY(0)" },
              delay: 800,
              config: { duration: 800 },
            })}
            className="flex-row gap-12 items-center hidden md:flex"
          >
            <Text
              text="TECH STACK"
              customStyle="font-bold text-xl text-white mt-1 font-inter"
            />
            <Text text="|" customStyle="font-thin text-2xl text-white" />
          </animated.div>
          <animated.div
            style={iconAnimations}
            className="flex flex-row gap-6 items-center justify-center mt-1"
            id="tech-stack"
          >
            {TechData.map((item) => (
              <div className="text-[26px] h-fit w-fit" key={item.name}>
                {item.icon}
              </div>
            ))}
          </animated.div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <Contact />
          <About />
        </div>
      </div>
    </div>
  );
}
