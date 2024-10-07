import React, { useEffect, useState } from "react";
import Left from "./Left";
import Right from "./Right";
import User from "./User";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem('user'));
      const postsData = JSON.parse(localStorage.getItem('posts')); // Assuming 'posts' is stored in localStorage

      if (userData) {
        setUser(userData);
      }

      if (postsData) {
        setPosts(postsData);
      } else {
        setPosts([]); // Set to empty array if no posts are found
      }
    } catch (error) {
      console.error("Error retrieving data from localStorage:", error);
      setUser(null);
      setPosts([]);
    }
  }, []);

  if (!user) {
    return <div className="text-white">Loading...</div>; // Show loading while fetching user data
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto bg-black">
        <div className="w-full grid grid-cols-12">
          <div className="col-span-3">
            <Left />
          </div>
          <div className="col-span-6 text-white">
            {/* Pass user and posts as props */}
            <User user={user} />
          </div>
          <div className="col-span-3">
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
