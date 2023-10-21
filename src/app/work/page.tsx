"use client";
import Text from "@/components/ui/Text";
import Title from "@/components/ui/Title";
import data from "@/data/data.json";
import Image from "next/image";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";

const Work = () => {
  const animation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 1250,
    config: { duration: 800 },
  });

  const text = (
    <p>
      Hi, here you can find a list of the projects I've worked on, <br /> each
      one teaching me valuable lessons and helping me grow.
      <br className="block" />
      <br className="block" />
      You can find other past personal projects{" "}
      <Link
        target="__blank"
        href="https://github.com/leonardoparisii"
        className="text-white font-semibold font-mulish underline cursor-pointer"
      >
        here
      </Link>
      .
    </p>
  );
  return (
    <div className="flex w-full justify-start items-start xl:-mt-6 px-6 sm:px-24 md:px-36">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2">
          <animated.div
            style={useSpring({
              from: { opacity: 0, transform: "translateY(40px)" },
              to: { opacity: 1, transform: "translateY(0)" },
              delay: 0,
              config: { duration: 550 },
            })}
          >
            <Title
              title="Projects and work experience."
              customStyle="text-4xl md:text-5xl font-source font-semibold"
            />
          </animated.div>
          <animated.div
            style={useSpring({
              from: { opacity: 0, transform: "translateY(40px)" },
              to: { opacity: 1, transform: "translateY(0)" },
              delay: 600,
              config: { duration: 550 },
            })}
          >
            <Text text={text} />
          </animated.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((item: any) => (
            <animated.div
              style={animation}
              key={item.text}
              className="flex gap-4 items-center text-lg text-white font-mulish font-semibold cursor-pointer"
            >
              <Link href={item.url} className="rounded-xl" target="__blank">
                <Image
                  alt="image"
                  src={item.image}
                  width={50}
                  height={50}
                  className="rounded-xl select-none"
                  draggable="false"
                />
              </Link>
              <div className="flex flex-col h-full w-fit">
                {item.title}
                <span className="text-base font-bold text-slate-500">
                  {item.text}
                </span>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
