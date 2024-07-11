import Heading from '@/utilities/Heading'
import React from 'react'

const PageTitle = ({ children, className, key }) => {

    return (
        <div>
            <div>
                <Heading type='numbered_heading' classname={`${className}`} key={key}>{children}</Heading>
            </div>
        </div>
    )
}

export default PageTitle
