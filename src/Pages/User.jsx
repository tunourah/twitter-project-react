import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const User = () => {
  return (
    <div className='px-5 bg-black text-white'>
      {/* Header */}
      <div className='flex gap-5 mt-5 items-center'>
        <div>
          <FaArrowLeft className='text-gray-400' />
        </div>
        <div>
          <h1 className='text-xl font-bold'>Profile</h1>
          <p className='text-gray-400'>Number of posts</p>
        </div>
      </div>
      
      {/* Profile Header */}
      <div className='mt-5'>
        <img 
          src="https://pbs.twimg.com/profile_banners/1017686151883345921/1640925966/1500x500" 
          alt="Profile Banner" 
          className='w-full rounded-lg' 
        />
        <div className='flex justify-between items-center'>
          <div>
            <img 
              src="https://pbs.twimg.com/profile_images/1479980047104716802/59hXnWM__400x400.jpg" 
              alt="Profile" 
              className='h-32 w-32 rounded-full -mt-20 border-4 border-gray-800' 
            />
          </div>
          <button className='bg-blue-500 text-white p-2 rounded'>Edit Profile</button>
        </div>
        <div className='mt-3'>
          <h1 className='text-xl font-bold'>Nora</h1>
          <p className='text-gray-400'>@tu_nourah</p>
          <p className='text-white'>Bio: Your bio goes here.</p>
          <p className='text-gray-400'>Joined Date</p>
          <div className='flex gap-4 mt-5'>
            <div className='flex gap-2'>
              <h1 className='text-white font-bold'>100</h1>
              <p className='text-gray-400'>Followers</p>
            </div>
            <div className='flex gap-2'>
              <h1 className='text-white font-bold'>100</h1>
              <p className='text-gray-400'>Following</p>
            </div>
          </div>
        </div>
      </div>

      {/* Post Category */}
      <div className='flex mt-5 justify-between'>
        <button className='text-gray-400 font-bold'>Posts</button>
        <button className='text-gray-400'>Replies</button>
        <button className='text-gray-400'>Highlights</button>
        <button className='text-gray-400'>Articles</button>
        <button className='text-gray-400'>Media</button>
        <button className='text-gray-400'>Likes</button>
      </div>

      {/* Tweets Section */}
      <div className='mt-5'>
        <div className='bg-gray-800 p-4 rounded-lg mb-4'>
          <h2 className='font-bold'>Your Tweet Content Here</h2>
          <p className='text-gray-400'>Date of Tweet</p>
        </div>
        <div className='bg-gray-800 p-4 rounded-lg mb-4'>
          <h2 className='font-bold'>Another Tweet Content Here</h2>
          <p className='text-gray-400'>Date of Tweet</p>
        </div>
        <div className='bg-gray-800 p-4 rounded-lg mb-4'>
          <h2 className='font-bold'>More Tweet Content Here</h2>
          <p className='text-gray-400'>Date of Tweet</p>
        </div>
      </div>
    </div>
  );
};

export default User;
