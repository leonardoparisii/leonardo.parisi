import Image from 'next/image'
import ProfileImage from '../../public/ProfileImage.png'
import Title from '@/components/ui/Title'
import Text from '@/components/ui/Text'
import { TechData } from '@/data/techstackData.js'
import Contact from '@/components/Contact'
import About from '@/components/About'

export default function Home() {

    const secondaryText = (
        <p>A 16-year-old junior frontend <br className='md:hidden'/> developer based in Italy.</p>
    )
  return (
    <div className='flex w-full justify-center items-start mt-8 md:mt-24'>
        <div className='flex flex-col justify-center items-center gap-24 lg:px-0 sm:px-12 px-8'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-24 h-full'>
                <Image
                    src={ProfileImage}
                    alt='ProfileImage'
                    className='border-2 border-solid border-slate-400 relative bg-no-repeat bg-cover animate-border'
                    width={250}
                    height={250}
                    draggable={false}
                />
                <div className='flex flex-col w-full gap-16 justify-between items-start my-auto'>
                    <Title
                        title="Hi, I'm Leonardo!"
                    />
                    <Text
                        text="I'm Leonardo Parisi."
                        secondaryText={secondaryText}
                    />
                </div>
            </div>
            <div className='flex gap-12'>
                <div className='flex-row gap-12 items-center hidden md:flex'>
                    <Text 
                        text='TECH STACK'
                        customStyle='font-bold text-xl text-white mt-1 font-inter'
                    />
                    <Text 
                        text='|'
                        customStyle='font-thin text-2xl text-white'
                    />
                </div>
                <div className='flex flex-row gap-6 items-center justify-center mt-1' id='tech-stack'>
                    {TechData.map((item) => (
                        <div className='text-[26px] h-fit w-fit' key={item.name}>
                            {item.icon}
                        </div>
                    ))}
                </div>
            </div>
            <Contact />
            <About />
        </div>
    </div>
  )
}