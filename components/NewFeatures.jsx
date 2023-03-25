import React from 'react'

export const NewFeatures = ({ imgUrl, title, subtitle }) => {
  return (
    <article className='flex  flex-col items-center w-full md:w-1/2 text-white my-4 md:my-6 2xl:my-12'>
      <div className='flex items-center justify-center w-full my-2 md:my-4 2xl:my-8'>
        <div className='flex items-center justify-center w-[75px] h-[75px] rounded-lg bg-gradient-to-b from-indigo-500 to-purple-900'>
          <img 
            src={imgUrl}
            alt={title}
            className="w-1/2 h-1/2"
          />
        </div>
      </div>
      <h4 className='text-lg md:text-[24px] 2xl:text-[32px] my-4 md:my-6 2xl:my-8'>
        {title}
      </h4>
      
      <p className='text-base text-gray-300 md:text-lg 2xl:text-[24px] px-12 leading-[32px] md:leading-[40px] 2xl:leading-[50px]'>
        {subtitle}
      </p>
    </article>
  )
}

export default NewFeatures;