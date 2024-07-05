import React from 'react'
import { PiContactlessPaymentFill } from "react-icons/pi";
import { GiUnstableProjectile } from "react-icons/gi";
import { SiAboutdotme } from "react-icons/si";
import { GrServices } from "react-icons/gr";
import { Layout } from '@/utilities/padding';
import { NavLink } from 'react-router-dom';

const RouteEntry = () => {
    return (
        <div className={`fixed z-100 bottom-0 grid grid-cols-[1fr_1fr_1fr_1fr_1fr] w-full items-center ${Layout.subPddingY}`}>

            <NavLink to={'about'}><SiAboutdotme className='w-[30px] h-[30px] m-auto' /></NavLink>

            <NavLink to={'experience'}><GrServices className='w-[30px] h-[30px] m-auto' /></NavLink>

            <NavLink to={'projects'}><GiUnstableProjectile className='w-[30px] h-[30px] m-auto' /></NavLink>

            <NavLink to={'contact'}><PiContactlessPaymentFill className='w-[30px] h-[30px]  m-auto' /></NavLink>

        </div>
    )
}

export default RouteEntry
