import React from 'react'
import { FiLinkedin } from "react-icons/fi"
import { LuGithub } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";

const Socials = () => {
  return (
    <div>
      <div className='fixed max-w-[40px] xl:left-[40px] lg:left-[40px] md:left-[40px] bottom-0 top-72 z-50 flex flex-col iconScreen:hidden'>
        <ul className='flex flex-col items-center list-none p-0 m-0 gap-[32px] ul-hero'>
          <li>
            <a className='inline-block relative transition all 0.25s cubic-bezier(0.645,0.045,0.355,1) hover:transform hover:translate-x-[-8px] hover:translate-y-[-2px] cursor-pointer'>
              <FiLinkedin className='hover:text-green-color'/>
            </a>
          </li>

          <li>
            <a className='inline-block relative transition all 0.25s cubic-bezier(0.645,0.045,0.355,1) hover:transform hover:translate-x-[-8px] hover:translate-y-[-2px] cursor-pointer'>
              <LuGithub className='hover:text-green-color'/>
            </a>
          </li>

          <li>
            <a className='inline-block relative transition all 0.25s cubic-bezier(0.645,0.045,0.355,1) hover:transform hover:translate-x-[-8px] hover:translate-y-[-2px] cursor-pointer'>
              <LuTwitter className='hover:text-green-color'/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Socials
