import React from 'react'
import { Progress } from "@/components/ui/progress"



const Skills = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='w-2/6'>
                <Progress value={33} className=''/>
            </div>
             <div className='w-2/6'>
                <Progress value={43} />
            </div>

        </div>
    )
}

export default Skills

