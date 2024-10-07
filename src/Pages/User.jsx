import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

const User = ({ user }) => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the API
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://670398d0ab8a8f892730c8c1.mockapi.io/tweet');
        const filteredPosts = response.data.filter(post => post.username === user.username);
        setUserPosts(filteredPosts);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    fetchPosts();
  }, [user.username]);

  const deletePost = async (postId) => {
    try {
      await axios.delete(`https://670398d0ab8a8f892730c8c1.mockapi.io/tweet/${postId}`);
      // Update local state to remove the deleted post
      setUserPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    } catch (error) {
      console.error("Error deleting tweet:", error);
    }
  };

  return (
    <div className='px-5 bg-black text-white'>
      {/* Header */}
      <div className='flex gap-5 mt-5 bg-black items-center'>
        <div>
          <FaArrowLeft className='text-gray-400' />
        </div>
        <div>
          <h1 className='text-xl font-bold'>Profile</h1>
          <p className='text-gray-400'>{userPosts.length} Posts</p> {/* Number of posts */}
        </div>
      </div>
      
      {/* Profile Header */}
      <div className='mt-5'>
        <img 
          src={user.banner || "https://pbs.twimg.com/profile_banners/1017686151883345921/1640925966/1500x500"} 
          alt="Profile Banner" 
          className='w-full rounded-lg' 
        />
        <div className='flex justify-between items-center'>
          <div>
            <img 
              src={user.profile || "https://pbs.twimg.com/profile_images/1479980047104716802/59hXnWM__400x400.jpg"} 
              alt="Profile" 
              className='h-32 w-32 rounded-full -mt-20 border-4 border-gray-800' 
            />
          </div>
          <button className='bg-blue-500 text-white p-2 rounded'>Edit Profile</button>
        </div>
        <div className='mt-3'>
          <h1 className='text-xl font-bold'>{user.name}</h1>
          <p className='text-gray-400'>@{user.username}</p>
          <p className='text-white'>{user.bio || "Bio: Your bio goes here."}</p>
          <p className='text-gray-400'>Joined {user.joinDate || "Date not available"}</p>
          <div className='flex gap-4 mt-5'>
            <div className='flex gap-2'>
              <h1 className='text-white font-bold'>{user.followers}</h1>
              <p className='text-gray-400'>Followers</p>
            </div>
            <div className='flex gap-2'>
              <h1 className='text-white font-bold'>{user.following}</h1>
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
        {userPosts.map((post) => (
          <div key={post.id} className='bg-gray-800 p-4 rounded-lg mb-4'>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src={post.profile || user.profile} 
                  alt={post.name} 
                  className='h-10 w-10 rounded-full' 
                />
                <div>
                  <h2 className='font-bold'>{post.name} <span className='text-gray-400'>@{post.username}</span></h2>
                  <p className='text-gray-400'>{new Date(post.time).toLocaleString()}</p>
                </div>
              </div>
              <button 
                onClick={() => deletePost(post.id)} 
                className='text-red-500 hover:text-red-700'
              >
                Delete
              </button>
            </div>
            <p className='mt-2'>{post.content}</p>
            <div className='flex gap-4 mt-3 text-gray-400'>
              <p>{post.likes || 0} Likes</p>
              <p>{post.retweets || 0} Retweets</p>
              {post.stats && <p>{post.stats} Views</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
