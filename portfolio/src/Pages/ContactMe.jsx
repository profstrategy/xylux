import ProjectOverline from '@/components/Card/ProjectOverline';
import { contact } from '@/contents/contactme';
import { pageHeading } from '@/contents/sectionHeading';
import Heading from '@/utilities/Heading';
import React from 'react'

const Login = () => {
  const aboutIndex = pageHeading.findIndex((heading) => heading === 'What’s Next?');
  const aboutElement = pageHeading[aboutIndex];
  return (
    <section className='max-w-[600px] mb-[40px] text-center mt-0 mx-auto'>
      <ProjectOverline classname="mb-[20px] text-fz-md ">
        <>
          <em className='text-green-color mr-[10px]'>0{`${aboutIndex + 1}.`}</em>
          {aboutElement}
        </>
      </ProjectOverline>

      <Heading type={'title'} classname='mb-[20px]'>Get In Touch</Heading>

      {contact.map((cont) => (<p key={cont.id} className='font-sans'>{cont.contact}</p>))}
    </section>
  )
}

export default Login
