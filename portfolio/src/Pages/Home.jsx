
import { heroContent_1, heroContent_2, heroContent_3 } from "@/contents/hero"
import AnimateText from "@/components/UI/AnimateText"
import Heading from "@/utilities/Heading"
import { Paragraph } from '@/utilities/paragraph'
import { Layout } from "@/utilities/padding"
import Navbar from "./Navbar"
import Socials from "./Socials"
import Email from "./Email"
import Button from "@/components/UI/Button"
import NavbarMobile from "./NavbarMobile"

const Home = ({ isOpen, isHandleIsOpen }) => {
  return (
    <div>
      <div className={`max-h-100vh relative ${isOpen ? '' : ''}`}>

        <Navbar isOpen={isOpen} isHandleIsOpen={isHandleIsOpen} />
        <NavbarMobile isOpen={isOpen} />
        <Socials />
        <Email />


        <div className={`${Layout.padddingX} ${Layout.padddingY} max-w-[1000px] xl:ml-[80px] lg:ml-[80px] md:ml-[50px] tab:ml-[50px]  m-auto flex justify-center flex-col items-start`}>
          {heroContent_1.map((cont1) => (<Heading key={cont1.id} type='intro_title'>{cont1.content1}</Heading>))}


          {heroContent_2.map((cont2) => (<Heading key={cont2.id}
            type='big_heading'>{cont2.content2}</Heading>))}

          {heroContent_3.map((cont3) => (<Heading key={cont3.id} type='big_heading'>{cont3.content3}</Heading>))}

          <Paragraph type={'hero_paragraph'}><AnimateText /></Paragraph>

          <div className="flex gap-8 justify-center items-center">
            <Button styles={'border-1 border-green-border font-mono text-fz-xs text-lightest-slate relative z-1 hover:transform hover:translate-x-[-8px] hover:translate-y-[-2px] transition-all duration-\[0.5s\] ease-\[cubic-bezier\(0.645,0.045,0.355,1\)\] delay-\[400\] hover:shadow-custom text-fz-sm font-mono mt-[50px] leading-1 xl:py-[1.25rem]  lg:py-[1.25rem] md:py-[1.25rem] iconScreen:py-[.8rem] xsm:py-[1rem] xsm:px-[.9rem] text-green-color lg:px-[1.75rem]  md:px-[1.75rem]  xl:px-[1.75rem] iconScreen:px-[1rem]'}><a>Get in Touch</a></Button>

            <Button styles={'border-1 border-green-border font-mono text-fz-xs text-lightest-slate relative z-1 hover:transform hover:translate-x-[-8px] hover:translate-y-[-2px] transition-all duration-\[0.5s\] ease-\[cubic-bezier\(0.645,0.045,0.355,1\)\] delay-\[400\] hover:shadow-custom text-fz-sm font-mono mt-[50px] leading-1 text-green-color  xl:py-[1.25rem]  lg:py-[1.25rem] md:py-[1.25rem] iconScreen:py-[.8rem] xsm:py-[1rem] xsm:px-[.9rem] text-green-color lg:px-[1.75rem]  md:px-[1.75rem]  xl:px-[1.75rem] iconScreen:px-[1rem] xl:hidden lg:hidden md:hidden iconScreen:block xsm:block'}><a>View Resume</a></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
