import React from 'react';
import { pageHeading } from '@/contents/sectionHeading';
import { Layout } from '@/utilities/padding';
import Heading from '@/utilities/Heading';


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
            </section>
        </div>
    )
}

export default Projects;
