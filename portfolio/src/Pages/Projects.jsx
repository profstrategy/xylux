import React from 'react';
import PageTitle from '@/components/PageTitle';
import { pageHeading } from '@/contents/sectionHeading';
import { Layout } from '@/utilities/padding';


const Projects = () => {
    const aboutIndex = pageHeading.findIndex((heading) => heading === 'Some Things I’ve Built');
    const aboutElement = pageHeading[aboutIndex];
    
    return (
        <div>
            <section className={`${Layout.padddingY} ${Layout.padddingX} max-w-[950px] mx-auto mt-0`}>
            <PageTitle className="mb-[40px] numbered-heading" type="numbered_heading">
                <>
                    <em className='text-green-color mr-[10px]'>0{`${aboutIndex + 1}`}</em>
                    <em>{aboutElement}</em>
                </>
            </PageTitle>
            </section>
        </div>
    )
}

export default Projects;
