"use client"
import FilterBar from "@/components/FilterBar"
import Text from "@/components/ui/Text"
import Title from "@/components/ui/Title"
import { useSearchParams } from "next/navigation"
import { getFilteredData } from "@/actions/getFilteredData"
import Image from "next/image"
import Link from "next/link"
import { useSpring, animated } from '@react-spring/web';

const Work = () => {
    const params = useSearchParams();
    const data = params.get("filter")
    const filteredData = getFilteredData(data);
    
    const animation = useSpring({from: { opacity: 0, transform: 'translateY(50px)' },to: { opacity: 1, transform: 'translateY(0)' },delay: 1250,config: { duration: 800 },})

    const text = (
        <p>
            Each and every project I embarked upon became a stepping <br className="hidden sm:block"/> stone of profound value, each offering its own unique and <br/> remarkable contribution to my growth and learning journey.<br className="hidden sm:block"/><br className="hidden sm:block"/>
            you can explore all of them by clicking <Link target="__blank" href="https://github.com/leonardoparisii" className="text-white font-semibold font-mulish underline cursor-pointer">here</Link>.
        </p>
    );
  return (
    <div className="flex w-full justify-start items-start xl:-mt-6 px-12 sm:px-24 md:px-36">
        <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2">
                <animated.div style={useSpring({from: { opacity: 0, transform: 'translateY(40px)' },to: { opacity: 1, transform: 'translateY(0)' },delay: 0,config: { duration: 550 }})}>
                    <Title
                        title="Projects and work experience."
                        customStyle="text-5xl font-source font-semibold"
                    />
                </animated.div>
                <animated.div style={useSpring({from: { opacity: 0, transform: 'translateY(40px)' },to: { opacity: 1, transform: 'translateY(0)' },delay: 600,config: { duration: 550 }})}>
                    <Text
                        text={text}
                    />
                </animated.div>
            </div>
            <FilterBar />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {filteredData.map((item: any) => (
                    <animated.div style={animation} key={item.text} className="flex flex-col gap-4 items-center text-lg text-white font-mulish font-semibold cursor-pointer">
                        <Image
                            alt="image"
                            src={item.image}
                            width={200}
                            height={200}
                            className="rounded-xl"
                        />
                        {item.text}
                    </animated.div>
                ))}
            </div>
        </div>
    </div>
  )
};

export default Work