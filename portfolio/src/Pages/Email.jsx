import { email } from '@/contents/email'
import React from 'react'

const Email = () => {
  return (
    <div>
      <div className='fixed w-[20px] right-[40px] bottom-0 top-72 z-50 flex flex-col items-center iconScreen:hidden'>
        <div className='flex flex-col items-center relative mail-div font-font-mono'>{email.map((mail) => (
          <a className='inline-block relative decoration-none all 0.25s cubic-bezier(0.645,0.045,0.355,1) hover:text-green-color' key={mail.id}>{mail.email}</a>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Email
