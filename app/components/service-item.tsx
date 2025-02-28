import React from 'react'

interface ServiceProps {
  title: string
  description: string
}

const ServiceItem = ({title, description} : ServiceProps) => {
  return (
    <div className='flex flex-col justify-center items-center  border-2 border-bgPink rounded-xl font-black text-center bg-white shadow-xl hover:bg-bgPink hover:text-white px-5 py-6  gap-3'>
      <span className="font-bold text-xl">
      {title}
      </span>
      <span className='text-sm font-normal'>{description}</span>
    </div>
  )
}

export default ServiceItem
