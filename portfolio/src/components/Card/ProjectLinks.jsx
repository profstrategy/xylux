import React from 'react'

const ProjectLinks = ({ children }) => {
  return (
    <div className=' flex justify-end ml-0 -mr-10px iconScreen:justify-start iconScreen:mr-0 iconScreen:-ml-[10px]'>
      <a className='flex justify-center items-center gap-[10px]'>{children}</a>
    </div>
  )
}

export default ProjectLinks
