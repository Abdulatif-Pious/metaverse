import React from 'react'

const StartSteps = ({ index, feature}) => {
  return (
    <article className='text-base md:text-lg 2xl:text-2xl flex items-center w-4/5 text-white m-4 md:m-6 2xl:m-8 '>
      <div className='w-[50px] h-[50px] flex items-center justify-center bg-gradient-to-b from-indigo-500 to-purple-700  rounded-lg'>
        <p className='font-semibold'>{index + 1}</p>
      </div>
      <p className=' ml-4 md:ml-6 2xl:ml-12'>
        {feature}
      </p>
    </article>
  )
}

export default StartSteps