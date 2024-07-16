import React from 'react'

const Stack = ({ children }) => {
  return (
    <div>
      <li className='mb-[5px] mr-[20px] font-mono text-fz-xs text-light-slate whitespace-nowrap'>{children}</li>
    </div>
  )
}

export default Stack
