import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox, MdOutlinePoll, MdOutlineEmojiEmotions } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoLocationOutline, IoShareOutline } from "react-icons/io5";
import { IoMdStats } from "react-icons/io";
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const Main = ({ name, username, profile }) => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleTweet = () => {
    if (tweet) {
      const currentTime = new Date();
      setTweets([{ content: tweet, time: currentTime }, ...tweets]);
      setTweet("");
    }
  };

  const formatTime = (time) => {
    const now = new Date();
    const diff = Math.floor((now - new Date(time)) / 1000);

    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
    return new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col  mt-5 mx-2 sm:mx-5">
      {/* First sections */}
      <div className="flex justify-around p-3  border-b border-gray-700  sm:p-5  ">
        <button className="text-gray-500 text-sm sm:text-base w-1/2 hover:bg-gray-700">For you</button>
        <button className="text-gray-500 text-sm sm:text-base w-1/2 hover:bg-gray-700">Following</button>
      </div>
    
      {/* Write tweet section */}
      <div className="p-3 sm:p-4 border-b border-gray-700 flex space-x-2 sm:space-x-3">
        <img
          src={profile || "https://pbs.twimg.com/media/CNIuzq_WwAALz1u.png"} 
          alt="User Avatar"
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
        />
        <div className="flex-grow">
          <textarea
            placeholder="What's happening?!"
            className="w-full bg-black text-gray-300 placeholder-gray-500 text-sm sm:text-xl resize-none outline-none h-16 sm:h-20 px-3 sm:px-4 py-2 rounded-lg"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          ></textarea>
          <div className="flex justify-between items-center mt-2">
            <div className="flex space-x-2 sm:space-x-4 text-blue-500 cursor-pointer">
              <CiImageOn />
              <MdOutlineGifBox />
              <MdOutlinePoll />
              <MdOutlineEmojiEmotions />
              <RiCalendarScheduleLine />
              <IoLocationOutline />
            </div>
            <button onClick={handleTweet} className="bg-blue-500 text-white rounded-full px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base">
              Post
            </button>
          </div>
        </div>
      </div>
      
      {/* Show tweets */}
      {tweets.map((tweetData, index) => (
        <div key={index} className="p-3 sm:p-4 border-b border-gray-700">
          <div className="flex gap-2 sm:gap-3 mt-2">
            <img
               src={profile || "https://pbs.twimg.com/media/CNIuzq_WwAALz1u.png"} 
              alt="User Avatar"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
            />
            <div className="w-full">
              <div className="flex justify-between w-full">
                <div className="flex gap-2 items-center">
                  <h1 className="text-white font-bold text-sm sm:text-base">{name}</h1>
                  <p className="text-gray-400 text-xs sm:text-sm">{username}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">· {formatTime(tweetData.time)}</p>
                </div>
                <button className="font-bold text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-800 p-1">
                  ...
                </button>
              </div>
              <p className="text-white text-sm sm:text-base mt-1">{tweetData.content}</p>
              <div className="flex justify-between mt-3 text-gray-500">
                <button className="hover:text-blue-500">
                  <FaRegComment />
                </button>
                <button className="hover:text-green-500">
                  <FaRetweet />
                </button>
                <button className="hover:text-red-500">
                  <FaRegHeart />
                </button>
                <button className="hover:text-blue-500">
                  <IoMdStats />
                </button>
                <div className="flex gap-1 items-center justify-center">
                  <button className="hover:text-blue-500">
                    <CiBookmark />
                  </button>
                  <button className="hover:text-blue-500">
                    <IoShareOutline />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
