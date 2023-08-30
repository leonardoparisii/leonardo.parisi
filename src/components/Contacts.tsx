import { useSpring, animated } from '@react-spring/web';
import Link from "next/link";
import Text from "./ui/Text";
import Title from "./ui/Title";

const Contact = () => {
    const contactSectionAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 1600,
        config: { duration: 800},
    });

    const emailSectionAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 2200,
        config: { duration: 800 },
    });

    const text = (
        <p className="font-bold text-[17px]">
            Feel free to contact me at the emails below, otherwise <br />
            you can contact me on <Link target="__blank" href="https://discord.com/users/657671413947301959" className="text-white font-semibold font-mulish underline cursor-pointer">Discord</Link> too.
        </p>
    );

    const email = (
        <p className="text-white text-md font-semibold font-mulish underline cursor-pointer">
            parisileonardo15@gmail.com
        </p>
    );

    return (
        <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col gap-7">
            <animated.div style={contactSectionAnimation}>   
                <Title
                    title="Contacts."
                    customStyle="font-medium text-4xl"
                />
                <Text
                    text={text}
                    />
            </animated.div>
        </div>
        <div className="flex flex-col" id='contacts'>
            <animated.div style={emailSectionAnimation}>   
                <Text
                    text="Email"
                    customStyle="text-semibold font-inter text-slate-500"
                />
                <Text
                    text={email}
                />
            </animated.div>
        </div>
    </div>
    );
};

export default Contact;
