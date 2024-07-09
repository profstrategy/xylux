import React from 'react'
import Typewriter from 'typewriter-effect'

const AnimateText = () => {
    return <Typewriter
                options={{
                    strings: ['A top-notch developer, writer, and mentor who loves to solve problems and sharing experiences. Specialist in building exceptional digital experiences.'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 75,
                    
                }}
            />
}

export default AnimateText
