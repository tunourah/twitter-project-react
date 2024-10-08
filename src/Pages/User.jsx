import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  const [userPosts, setUserPosts] = useState([]);
  const [postToDelete, setPostToDelete] = useState(null); // Track the post to delete
  const [confirm, setConfirm] = useState(false); // Track whether to show the confirm dialog
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown visibility
  const [editingPhoto, setEditingPhoto] = useState(false); // Track if user is editing profile photo
  const [newProfilePhoto, setNewProfilePhoto] = useState(''); // New profile photo URL

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

  const handleDelete = async () => {
    if (postToDelete) {
      try {
        await axios.delete(`https://670398d0ab8a8f892730c8c1.mockapi.io/tweet/${postToDelete.id}`);
        // Update local state to remove the deleted post
        setUserPosts(prevPosts => prevPosts.filter(post => post.id !== postToDelete.id));
        setConfirm(false); // Hide confirmation after deletion
        setPostToDelete(null); // Clear post to delete
      } catch (error) {
        console.error("Error deleting tweet:", error);
      }
    }
  };

  const handleCancel = () => {
    setConfirm(false); // Hide confirmation dialog
    setPostToDelete(null); // Clear the post to delete
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const handleEditPhoto = () => {
    setEditingPhoto(true); // Open photo edit mode
  };

  const handleSavePhoto = () => {
    // Update user's profile photo
    if (newProfilePhoto) {
      user.profile = newProfilePhoto;
      setEditingPhoto(false); // Close photo edit mode
      setNewProfilePhoto(''); // Reset input field
    }
  };

  return (
    <div className='px-3 bg-black text-white'>
      {/* Header */}
      <div className='flex gap-2 mt-3  bg-black items-center'>
        <Link to="/home">
          <FaArrowLeft className='text-gray-400 cursor-pointer' />
        </Link>
        <div>
          <h1 className='text-lg font-bold'>Profile</h1>
          <p className='text-gray-400'>{userPosts.length} Posts</p>
        </div>
      </div>
      
      {/* Profile Header */}
      <div className='mt-5'>
        <img 
          src={user.banner || "https://pbs.twimg.com/profile_banners/1017686151883345921/1640925966/1500x500"} 
          alt="Profile Banner" 
          className='w-full h-32 rounded-lg' 
        />
        <div className='flex flex-col items-start'>
          <div>
            {editingPhoto ? (
              <div className='flex flex-col items-start'>
                <input 
                  type="text" 
                  placeholder="New Profile Photo URL" 
                  value={newProfilePhoto}
                  onChange={(e) => setNewProfilePhoto(e.target.value)}
                  className='text-black p-1 rounded'
                />
                <button 
                  onClick={handleSavePhoto}
                  className='bg-blue-500 text-white p-2 rounded mt-2'>
                  Save Photo
                </button>
              </div>
            ) : (
              <img 
                src={user.profile || "https://pbs.twimg.com/profile_images/1479980047104716802/59hXnWM__400x400.jpg"} 
                alt="Profile" 
                className='h-24 w-24 rounded-full -mt-12 border-4 border-gray-800' 
              />
            )}
          </div>
          {!editingPhoto && (
            <button 
              className='bg-blue-500 text-white p-2 rounded mt-2'
              onClick={handleEditPhoto}>
              Edit Profile Photo
            </button>
          )}
        </div>
        <div className='mt-3'>
          <h1 className='text-lg font-bold'>{user.name}</h1>
          <p className='text-gray-400'>@{user.username}</p>
          <p className='text-white'>{user.bio || " your bio here"}</p>
          <p className='text-gray-400'>Joined {user.joinDate || "Date not available"}</p>
          <div className='flex  gap-2 mt-5'>
            <div className='flex gap-2'>
              <h1 className='text-white font-bold'>{user.followers}</h1>
              <p className='text-gray-400'> 100 Followers</p>
            </div>
            <div className='flex gap-2'>
              <h1 className='text-white font-bold'>{user.following}</h1>
              <p className='text-gray-400'>56 Following</p>
            </div>
          </div>
        </div>
      </div>

      {/* Post Category */}
      <div className='flex flex-wrap justify-between mt-5 gap-2'>
        <button className='text-gray-400 font-bold hover:text-white'>Posts</button>
        <button className='text-gray-400 hover:text-white'>Replies</button>
        <button className='text-gray-400 hidden sm:block hover:text-white' >Highlights</button>
        <button className='text-gray-400  hidden sm:block hover:text-white'>Articles</button>
        <button className='text-gray-400 hover:text-white'>Media</button>
        <button className='text-gray-400 hover:text-white'>Likes</button>
      </div>

      {/* Tweets Section */}
      <div className='mt-5'>
        {userPosts.map((post) => (
          <div key={post.id} className='bg-gray-800 p-2 rounded-lg mb-4'>
            <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-2">
              <div className="flex items-center gap-2">
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
                onClick={() => { setPostToDelete(post); setConfirm(true); }} // Trigger delete confirmation
                className='text-red-500 hover:text-red-700'
              >
                Delete
              </button>
            </div>
            <p className='mt-2'>{post.content}</p>
            <div className='flex  sm:justify-between gap-2 mt-3 text-gray-400'>
              <p>{post.likes || 0} Likes</p>
              <p>{post.retweets || 0} Retweets</p>
              {post.stats && <p>{post.stats} Views</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Confirm Delete Dialog */}
      {confirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-black p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Confirm Delete</h2>
            <p>Are you sure you want to delete this post?</p>
            <div className="flex justify-end gap-2 mt-4">
              <button 
                onClick={handleCancel} 
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
              >
                Cancel
              </button>
              <button 
                onClick={handleDelete} 
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
