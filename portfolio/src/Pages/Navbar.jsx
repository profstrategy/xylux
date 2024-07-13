

import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";


import { logo } from "@/assets";
import { navLinks } from "@/contents/navbar";
import Button from "@/components/UI/Button";
import { Layout } from "@/utilities/padding";


const Navbar = ({ isOpen, isHandleIsOpen }) => {
 
  return (
    <div>
      <nav className={`flex justify-between items-center ${Layout.padddingX} h-[100px] w-100 m-auto `}>
        <div>
          <img src={logo} className="object-contain h-[58px] relative z-1  iconScreen:block" />
        </div>
        <ul className="flex justify-between items-center gap-[24px] ">
          {navLinks.map((nav, i) => (
            <div key={nav.id} className="flex gap-[3px] m-[5px] text-lightest-slate iconScreen:hidden">
              <li className="font-mono text-fz-xs text-green">
                <a href={`#${nav.id}`}>{`0${i + 1}.`}</a>
              </li>
              <li className={`font-mono uppercase text-fz-xs`}>
                <a href={`#${nav.id}`} className='hover:text-[#64ffda]'>{nav.nav}</a>
              </li>
            </div>
          ))}
          <div>
            <Button styles={'px-[0.75rem] py-[1rem] border-1 border-green-border font-mono text-fz-xs text-lightest-slate relative z-1 hover:transform hover:translate-x-[-8px] hover:translate-y-[-2px] transition-all duration-\[0.5s\] ease-\[cubic-bezier\(0.645,0.045,0.355,1\)\] delay-\[400\] hover:shadow-custom w-100 iconScreen:hidden'}>
              <a className="text-green ">Resume</a>
            </Button>
          </div>
        </ul>

        <button className="flex justify-center items-center relative z-20 -mr[15px] b-0 bg-transparent transition-all ease-linear duration-150 cursor-pointer xl:hidden lg:hidden md:hidden iconScreen:block  xsm:block" onClick={isHandleIsOpen}>{isOpen ? <LiaTimesSolid className="text-green-color w-[58px] object-contain h-11" /> : <HiMiniBars3BottomRight className="text-green-color w-[58px] object-contain h-11" />}
          
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
