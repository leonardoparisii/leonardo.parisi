'use client'
import Image from "next/image"
import ProfileImage from "../../public/ProfileImage.png"
import Title from "@/components/ui/Title"
import Text from "@/components/ui/Text"
import { TechData } from "@/data/techstackData.js"
import Contact from "@/components/Contacts"
import About from "@/components/About"
const Fade = require("react-reveal/Fade")

export default function Home() {
    
    const secondaryText = (
        <p>A 16-year-old junior frontend <br className="md:hidden"/> developer based in Italy.</p>
    )
  return (
    <div className="flex w-full justify-center items-start mt-8 md:mt-24">
        <div className="flex flex-col justify-center items-center gap-24 lg:px-0 sm:px-12 px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-24 h-full">
                <Fade duration={1400} delay={300} bottom>
                    <Image
                        src={ProfileImage}
                        alt="ProfileImage"
                        className="border-2 border-solid border-slate-400 relative bg-no-repeat bg-cover animate-border"
                        width={350}
                        height={350}
                        draggable={false}
                        />
                </Fade>
                    <div className="flex flex-col w-full gap-16 justify-between items-start my-auto">
                        <Fade duration={1400} delay={600} bottom>
                            <Title
                                title="Hi, I'm Leonardo!"
                                />
                            <Text
                                text="I'm Leonardo Parisi."
                                secondaryText={secondaryText}
                                />
                        </Fade>
                    </div>
            </div>
            <div className="flex gap-12">
                <div className="flex-row gap-12 items-center hidden md:flex">
                    <Fade duration={1400} delay={1000} bottom>
                        <Text 
                            text="TECH STACK"
                            customStyle="font-bold text-xl text-white mt-1 font-inter"
                        />
                        <Text 
                            text="|"
                            customStyle="font-thin text-2xl text-white"
                        />
                    </Fade>
                </div>
                <div className="flex flex-row gap-6 items-center justify-center mt-1" id="tech-stack">
                    <Fade duration={1400} delay={1500} bottom cascade>
                        {TechData.map((item) => (
                            <div className="text-[26px] h-fit w-fit" key={item.name}>
                                {item.icon}
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
                <Contact />
            <About />
        </div>
    </div>
  )
}