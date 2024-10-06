import React from 'react';

const FollowCard = ({ title, profiles }) => {
  return (
    <div className='bg-black border border-gray-500 rounded-lg p-4 mb-4'>
      <h1 className='text-white text-lg font-semibold mb-4'>
        {title}
      </h1>

      {profiles.map((profile, index) => (
        <div key={index} className='flex items-center gap-4 mb-4'>
          <img
            src={profile.image}
            alt='Profile'
            className='w-12 h-12 rounded-full'
          />
          <div>
            <h2 className='text-white font-semibold'>{profile.name}</h2>
            <p className='text-gray-400'>{profile.handle}</p>
          </div>
          <button className='ml-auto bg-white text-black px-4 py-1 rounded-full hover:bg-gray-200'>
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default FollowCard;
