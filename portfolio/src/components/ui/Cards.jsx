import classNames from 'classnames'
import React from 'react'

const Cards = ({ children, styles }) => {
   const className = classNames({
    'w-[387px]': true,
    'h-[272px]': true,
   })
  return (
    <div className={`${className} ${styles}`}>
      {children}
    </div>
  )
}

export default Cards
