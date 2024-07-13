import React from 'react';
import { GrReactjs } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiCsswizardry } from 'react-icons/si';
import { GiSatelliteCommunication } from 'react-icons/gi';
import { FaHtml5 } from 'react-icons/fa';
import { RiWindyFill } from 'react-icons/ri'; // Using RiWindyFill as an alternative
import { BsBootstrapFill } from 'react-icons/bs';
import { Progress } from "@/components/UI/Progress"



export const skills = [
    {
        id: 'cont1',
        content1: 'My Skills'
    },
]


export const stack = [
    {
        id: 'react',
        text: 'React JS',
        icon: <GrReactjs />,
        progress: <Progress value={90}  />
    },
    {
        id: 'javascript',
        text: 'JavaScript',
        icon: <IoLogoJavascript />,
        progress: <Progress value={90}  />
    },
    {
        id: 'typescript',
        text: 'TypeScript',
        icon: <SiTypescript />,
        progress: <Progress value={50}  />
    },
    {
        id: 'communication',
        text: 'Communication',
        icon: <GiSatelliteCommunication />,
        progress: <Progress value={90}  />
    },
];

export const stack_1 = [
    {
        id_1: 'html',
        text_1: 'HTML',
        icon_1: <FaHtml5 />,
        progress: <Progress value={90}  />
    },
    {
        id_1: 'css',
        text_1: 'CSS',
        icon_1:<SiCsswizardry />,
        progress: <Progress value={90}  />
    },
    {
        id_1: 'tailwind',
        text_1: 'Tailwind CSS',
        icon_1: <RiWindyFill />,
        progress: <Progress value={90}  />
    },
    {
        id_1: 'bootstrap',
        text_1: 'Bootstrap',
        icon_1: <BsBootstrapFill />,
        progress: <Progress value={90}  />
    }
]
