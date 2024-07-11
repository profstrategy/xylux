import React from 'react';

const Heading = ({ children, type, classname, id }) => {
  const big_head = 'text-big-head-clamp'; 
  const num_head = 'text-num-head-clamp';
  const title = 'text-title-clamp';
  const project_title = 'text-proj-title-clamp';
  const intro = 'text-intro-clamp';

  const styles = {
    big_heading: `${big_head} font-mono text-[#ccd6f6] font-bold leading-[56px] xl:mb-6 lg:mb-6 lg:leading-[56px] md:leading-[56px] md:mb-6 iconScreen:leading-[40px] iconScreen:mb-4`,
    numbered_heading: `${num_head} font-mono text-[#ccd6f6] font-bold leading-tight`,
    intro_title: `${intro} font-sans text-[#64ffda] leading-tight xl:mb-6 md:mb-6 lg:mb-6 iconScreen:mb-4`,
    title: `${title} font-semibold font-sans leading-tight text-[#ccd6f6]`,
    project_title: `${project_title} font-medium text-2xl leading-7 tracking-tighter`,
  };

  return (
    <div>
      <h2 className={`${styles[type]} ${classname} `} key={id}>{children}</h2>
    </div>
  );
};

export default Heading;

