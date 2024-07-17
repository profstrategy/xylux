import React from 'react';
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";



import { pageHeading } from '@/contents/sectionHeading';
import { Layout } from '@/utilities/padding';
import Heading from '@/utilities/Heading';


import ProjectCards from '@/components/Card/ProjectCards';
import { project_1 } from '@/assets';
import ProjectOverline from '@/components/Card/ProjectOverline';
import Stack from '@/components/Card/Stack';
import ProjectLinks from '@/components/Card/ProjectLinks';
import { Project_1 } from '@/contents/project';
import ProjectDescription from '@/components/Card/ProjectDescription';


const Projects = () => {
    const aboutIndex = pageHeading.findIndex((heading) => heading === 'Some Things I’ve Built');
    const aboutElement = pageHeading[aboutIndex];

    return (
        <div>
            <section className={`${Layout.padddingY} ${Layout.padddingX} max-w-[1000px] px-6 mx-auto`}>
                <Heading classname="mb-[40px] numbered-heading" type="numbered_heading">
                    <>
                        <em className='text-green-color mr-[10px]'>0{`${aboutIndex + 1}.`}</em>
                        {aboutElement}
                    </>
                </Heading>

                <div>
                    <ProjectCards
                        overline={<ProjectOverline>Featured Project</ProjectOverline>}
                        title={<Heading type={'project_title'} classname='mb-[10px]'>3D landing page</Heading>}
                        Image={project_1}
                        description={<ProjectDescription>{Project_1.map((content) => (
                            <p key={content.id} className='font-sans'>{content.description}</p>
                        ))}
                        </ProjectDescription>}
                        stack={<Stack>{
                            Project_1.map((content) => (
                                <li className='mb-[5px] font-mono text-fz-xs text-light-slate whitespace-nowrap iconScreen:mb-[5px] iconScreen:mr-[20px]' key={content.id}>{content.proj_1}</li>
                            ))}</Stack>}

                        Links={<ProjectLinks>
                            <FiGithub className='text-lightest-slate w-[23px] h-[23px]' />
                            <FiExternalLink className='text-lightest-slate w-[23px] h-[23px]' />
                        </ProjectLinks>}
                    />
                </div>
            </section>
        </div>
    )
}

export default Projects;
