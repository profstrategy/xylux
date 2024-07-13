// About.jsx
import React from 'react';
import PageTitle from '@/components/PageTitle'
import { Layout } from '@/utilities/padding';
import { modifiedAbout_2, modifiedAbout_3, modifiedAbout_4 } from '@/contents/modifiedAbout';
import { pageHeading } from '@/contents/sectionHeading'

const About = () => {
    const aboutIndex = pageHeading.findIndex((heading) => heading === 'About');
    const aboutElement = pageHeading[aboutIndex];

    return (
        <div>
            
            <section className={` px-6 max-w-[950px] mx-auto my-8`}>
               <PageTitle className="mb-[40px] numbered-heading" type="numbered_heading">{<><em className='text-green-color mr-[10px]'>0{`${aboutIndex+1}`}</em> <em>{aboutElement}</em></>}</PageTitle>
                <div className="grid grid-cols-[3fr,2fr] gap-[50px]">
                    <div>
                        {modifiedAbout_2.map((cont2) => (
                            <p className='mb-[15px] font-sans' key={cont2.id}>
                                {cont2.content2}
                            </p>
                        ))}

                        {modifiedAbout_3.map((cont3) => (
                            <p className='mb-[15px] font-sans' key={cont3.id}>
                                {cont3.content3}
                            </p>
                        ))}

                        {modifiedAbout_4.map((cont4) => (
                            <p className='mb-[15px] font-sans' key={cont4.id}>
                                {cont4.content3}
                            </p>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

