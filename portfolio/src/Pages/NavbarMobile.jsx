import { navLinks_sm } from '@/contents/navbar'
import React from 'react'

const NavbarMobile = ({ isOpen }) => {
    return (
        <div>

            <aside className={`flex justify-center items-center fixed top-0 bottom-0 right-0 py-[50px] px-10 lg:min-w-[75vw] xl:min-w-[75vw] md:min-w-[75vw] tab:min-w-[75vw] iconScreen:min-w-[55vw] xsm:min-w-full h-[100vh] outline-none z-10 bg-light-navy ${isOpen ? 'translate-x-[0px] max-xsm:translate-x-[20%]  transition all 0.25s cubic-bezier(0.645,0.045,0.355,1) ' : 'translate-x-[100vw] iconScreen:translate-x-[105vw]'} xl:hidden lg:hidden md:hidden `}>
                <nav className='flex justify-between items-center w-100 flex-col text-lightest-slate font-font-mono  text-center'><ol className='p-0 m-0 list-none w-100
                 '>{navLinks_sm.map((nav) => (
                    <li key={nav.id_sm} className='relative mt-0 mr-auto mb-20 text-nav-sm-clamp list-nav-item-mobile'><a className='inline-block transition all 0.25s cubic-bezier(0.645,0.045,0.355,1) w-100 pt[3px] pr-5 pb-5 no-underline decoration-auto text-inherit li-counter hover:text-green-color cursor-pointer'>{nav.nav_sm}</a></li>
                ))}</ol></nav>
            </aside>
        </div>
    )
}

export default NavbarMobile
