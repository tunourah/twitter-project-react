import React from 'react'
import FollowCard from '../components/FollowCard'
import { IoIosSearch } from "react-icons/io";

const Right = () => {
    const profiles = [
        {
          image: 'https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png',
          name: 'React',
          handle: '@react',
        },
        {
          image: 'https://pbs.twimg.com/profile_images/1479980047104716802/59hXnWM__400x400.jpg',
          name: 'nora',
          handle: '@tu_nourah',
        }
      ];
  return (
    <div className='md:flex md:flex-col justify-center mt-5 hidden  fixed top-0 w-1/4 '>
{/* search bar  */}
<div className="relative mb-4 ">
      <input
        type="text"
        placeholder="Search Twitter"
        className="bg-black text-white border w-full border-gray-500 rounded-full p-2 pl-10 pr-4"
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <IoIosSearch />
      </div>
    </div>

    {/* Subscribe to Premium */}
    <div className="bg-black border border-gray-500 rounded-lg p-4 mb-4">
        <h1 className="text-white text-lg font-semibold mb-4">
            Subscribe to Premium
        </h1>
        <p className="text-gray-400">
            Get more out of Twitter with Premium
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600">
            Subscribe now
        </button>
    </div>
    {/* 
What’s happening card */}
<div className="bg-black border border-gray-500 rounded-lg p-4 mb-4">
        <h1 className="text-white text-lg font-semibold mb-4">
            What’s happening
        </h1>
        <p className="text-gray-400">
            Find out what’s happening in the world right now
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600">
            Explore
        </button>
    </div>

    {/* card 3 */}
<FollowCard title="Who to follow" profiles={profiles} />

<div className='flex gap-4'>
<p className='text-gray-300 text-xs hover:text-gray-500 '>Terms of Service</p>
<p className='text-gray-300 text-xs  hover:text-gray-500 '>Privacy Policy</p>
<p className='text-gray-300 text-xs   hover:text-gray-500'>Cookie Policy</p>
<p className='text-gray-300 text-xs  hover:text-gray-500 '>Ads info</p>
<p className='text-gray-300 text-xs   hover:text-gray-500'>More</p>
<p className='text-gray-300 text-xs   hover:text-gray-500'> Hire the developer</p>
</div>
    </div>
  )
}

export default Right