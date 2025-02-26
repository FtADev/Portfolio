import React from 'react'

interface PtojectProps {
  title: string
}

const ProjectItem = ({title} : PtojectProps) => {
  return (
    <div className='flex justify-center items-center w-[200px] h-[200px] border-2 border-bgPink rounded-xl'>
      {title}
    </div>
  )
}

export default ProjectItem
