import React from 'react'

const Stack = ({ children }) => {
  return (
    <div>
      <ul className='flex flex-wrap gap-[4px] relative z-10 mt-[25px] mr-0 mb-[10px] p-0 list-none justify-center iconScreen:justify-start'>
        {children}
      </ul>
    </div>
  )
}

export default Stack
