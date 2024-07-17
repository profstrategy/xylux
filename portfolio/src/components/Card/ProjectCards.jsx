import React from 'react'

const ProjectCards = ({ Image, Links, overline, title, description, stack }) => {

  return (
    <ul className='list-none p-0 m-0 '>
      <li className={`relative grid grid-cols-12 items-center`}>
        <div className='project-content'>
          <div>
            {overline}
            {title}
            {description}
            {stack}
            {Links}

          </div>
        </div>

        <div className='col-start-1 col-end-8 relative z-10 iconScreen:col-span-full iconScreen:h-full iconScreen:opacity-25 project-image'>
          <a className='w-full h-full align-middle custom-hover-focus bg-green-bg rounded-[4px]'>
            <div className='mix-blend-multiply filter-grayscale filter-contrast-100 filter-brightness-90 rounded-[4px]'>
              <div className='max-w-[700px] block'>
                <img className=' iconScreen:w-auto iconScreen:h-full iconScreen:filter-grayscale iconScreen:filter-contrast-100 iconScreen:filter-brightness-90 iconScreen:object-cover' src={Image} />
              </div>
            </div>
          </a>
        </div>
      </li>
    </ul>
  )
}

export default ProjectCards
