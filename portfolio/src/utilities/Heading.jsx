import React from 'react';

const Heading = ({ children, type, classname }) => {
  const big_head = `
  big-head-clamp
  `; 
  const num_head = `num-head-clamp`
  const title= `title-clamp`
  const project_title = `proj-title-clamp`

  
  const styles = {
    big_heading: big_head + 'font-mono text-[#ccd6f6] font-semibold leading-tight',
    numbered_heading: num_head + 'font-mono text-[#ccd6f6] font-semibold leading-tight',
    title: title + 'font-semibold font-sans leading-tight text-[#ccd6f6]',
    project_title: project_title + 'font-medium text-2xl leading-7 tracking-tighter',
  }

  return (
    <div>
      <h2 className={`${styles[type]} ${classname}`}>{children}</h2>
    </div>
  );
};

export default Heading;
