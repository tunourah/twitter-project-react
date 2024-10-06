import React from 'react'
import Left from './Left'

const Home = () => {
  return (
   <div className='    container mx-auto bg-black  '>
    <div className='    w-full grid grid-cols-12 '>
        
<div className='col-span-3  '><Left  /></div>
<div className='col-span-6  text-white'>Main </div>
<div className='col-span-3 '>Right Side </div>
    </div>
    </div>
  )
}

export default Home