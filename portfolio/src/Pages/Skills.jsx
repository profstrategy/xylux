import React from 'react'


import { Layout } from '@/utilities/padding'
import Heading from '@/utilities/Heading';
import { stack, stack_1 } from '@/contents/skill';
import PageTitle from '@/components/PageTitle';
import { pageHeading } from '@/contents/sectionHeading';

const Skills = () => {
    const aboutIndex = pageHeading.findIndex((heading) => heading === 'Skills');
    const aboutElement = pageHeading[aboutIndex];

    return (
        <div>
        <section className={` px-6 max-w-[1000px] mx-auto`}>
            <Heading classname="mb-[40px] numbered-heading" type="numbered_heading">
                <>
                    <em className='text-green-color mr-[10px]'>0{`${aboutIndex + 1}.`}</em>
                    {aboutElement}
                </>
            </Heading>
            <div className="grid xl:grid-cols-[3fr_3fr] lg:grid-cols-[3fr_3fr] ">
                <div className="">
                    {stack.map((stack) => (
                        <div className='flex gap-[20px] items-center mb-5 w-full' key={stack.id}>
                            <div className='bg-slate p-[15px] rounded-sm'>
                                <div className='text-green-color'>{stack.icon}</div>
                            </div>
                            <div className='w-full grid gap-[1px]'>
                                <Heading type={'project_title'}><em>{stack.text}</em></Heading>
                                <div>{stack.progress}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full'>
                    {stack_1.map((stack) => (
                        <div className='flex tab:flex-col iconScreen:flex-col xsm:flex-col w-full items-center mb-5' key={stack.id_1}>
                            <div className='skill'></div>
                            <div className='flex gap-[20px] items-center w-full justify-center'>
                                <div className='bg-slate p-[15px] rounded-sm'>
                                    <div className='text-green-color'>{stack.icon_1}</div>
                                </div>
                                <div className='w-full grid gap-[1px]'>
                                    <Heading type={'project_title'}><em>{stack.text_1}</em></Heading>
                                    <div>{stack.progress}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
    )
}

export default Skills

