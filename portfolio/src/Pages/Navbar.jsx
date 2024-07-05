

import { logo } from "@/assets";
import { navLinks } from "@/contents/navbar";
import Button from "@/Ui/Button";
import { Layout } from "@/utilities/padding";

const Navbar = () => {

  return (
    <div>
      <nav className={`flex justify-between items-center ${Layout.padddingX} h-[100px] relative w-100 max-w-[90rem] m-auto iconScreen:hidden`}>
        <div>
          <img src={logo} className={'object-contain w-[50x] h-[50px] relative z-1 '} />
        </div>
        <ul className="flex justify-between items-center gap-[24px]">
          {navLinks.map((nav, i) => (
            <div key={nav.id} className="flex gap-[3px] m-[5px] text-lightest-slate">
              <li className="font-mono text-fz-xs text-green">
                <a href={`#${nav.id}`}>{`0${i + 1}.`}</a>
              </li>
              <li className={`${window.innerWidth <= 767 ? 'hidden' : 'block'} font-mono uppercase text-fz-xs`}>
                <a href={`#${nav.id}`} className='hover:text-[#64ffda]'>{nav.nav}</a>
              </li>
            </div>
          ))}
          <Button styles={'px-[0.75rem] py-[1rem] border-1 border-green-border font-mono text-fz-xs text-lightest-slate'}>
            <a className="text-green">Resume</a>
          </Button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
