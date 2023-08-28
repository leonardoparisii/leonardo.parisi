import Link from "next/link";
import Text from "./ui/Text";
import Title from "./ui/Title";
import { useSpring, animated } from '@react-spring/web';

const About = () => {

    const text = (
        <p className="font-bold text-[17px]" id="about">
            I"m Leonardo Parisi, a  deeply passionate Frontend developer. <br/>
            I like to build dynamic and engaging user experiences through<br/>
            my proficiency with the <span className="text-white font-semibold font-mulish">best and latest technologies</span>. <br />
            With a keen eye for design aesthetics and a commitment <br />
            to staying updated with the latest web development trends, <br />
            I consistently strive to transform intricate ideas into intuitive, <br />
            visually appealing digital solutions.
            <br /><br />
            You can read my resume at <Link target="__blank" href="https://read.cv/leonardoparisi" className="text-white font-semibold font-mulish underline cursor-pointer">read.cv/leonardoparisi</Link>.
        </p>
    );

    return (
        <div className="flex flex-col gap-2 w-full">
            <animated.div style={useSpring({from: { opacity: 0, transform: 'translateY(20px)' },to: { opacity: 1, transform: 'translateY(0)' },delay: 2600,config: { duration: 800 },})}>
                <Title
                    title="About."
                    customStyle="font-medium text-4xl"
                />
            </animated.div>
            <animated.div style={useSpring({from: { opacity: 0, transform: 'translateY(20px)' },to: { opacity: 1, transform: 'translateY(0)' },delay: 3000,config: { duration: 800 },})}>
                <Text
                    text={text}
                />
            </animated.div>
        </div>
    );
};

export default About;