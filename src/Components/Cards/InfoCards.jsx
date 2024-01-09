import React from 'react'
import "../../index.css"

const InfoCards = ({title,numbers}) => {
  return (
    <div className='w-1/2 flex flex-col  gap-5 px-5 py-5 rounded custom-shadow'>
        <div className='text-base text-gray-600'>{title}</div>
        <div className='text-[32px] font-medium'>{numbers}</div>
    </div>
  )
}

export default InfoCards;