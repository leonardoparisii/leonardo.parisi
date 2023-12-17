"use client";
import Text from "@/components/ui/Text";
import Title from "@/components/ui/Title";
import data from "@/data/data.json";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
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
        className="text-orange font-bold font-mulish underline cursor-pointer"
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
          <div>
            <Title
              title="Projects and work experience."
              customStyle="text-4xl md:text-5xl font-source font-semibold text-dark mb-3"
            />
          </div>
          <div>
            <Text text={text} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((item: any) => (
            <Link
              href={item.url}
              key={item.text}
              className="flex gap-4 w-fit items-center text-lg text-dark font-mulish font-semibold cursor-pointer"
              target="__blank"
            >
              <div className="rounded-xl relative">
                <div
                  className={`absolute top-0 -left-2 w-3 h-3 rounded-full ${item.status} `}
                />
                <Image
                  alt="image"
                  src={item.image}
                  width={50}
                  height={50}
                  className="rounded-full select-none"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col h-full w-fit font-bold">
                {item.title}
                <span className="text-sm font-semibold text-dark">
                  {item.text}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
