import React from 'react'

const ProjectOverline = ({ children, classname }) => {
  return (
    <div>
      <p className={`font-mono text-green-color text-fz-xs mx-[10px] my-[0px] ${classname}`}>{children}</p>
    </div>
  )
}

export default ProjectOverline
