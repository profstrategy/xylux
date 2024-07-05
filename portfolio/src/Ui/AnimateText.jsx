import { heroContent } from '@/contents/hero'
import React from 'react'
import Typewriter from 'typewriter-effect'

const AnimateText = () => {
    return (
        <div>
            <Typewriter
                options={{
                    strings: ['A top-notch developer, writer, and mentor who loves to solve problems and sharing experiences.'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 75,
                    
                }}
            />
        </div>
    )
}

export default AnimateText
