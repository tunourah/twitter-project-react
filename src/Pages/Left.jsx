import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiNotification2Line } from "react-icons/ri";
import { LuMessageSquare } from "react-icons/lu";
import { FaRegSquare } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { CgMoreO } from "react-icons/cg";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { MdWorkspacePremium } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconWithText from "../components/IconWithText";
import { Link } from "react-router-dom";

const Left = ({ name, username, profile }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [confirm, setConfirm] = useState(false); // State for confirmation dialog
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogoutClick = () => {
        setConfirm(true); // Show confirmation dialog
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate('/login');
        console.log("Logged out");
    };

    const handleCancel = () => {
        setConfirm(false); // Hide confirmation dialog
    };

    return (
        <div className=" hidden mx-2 sm:flex flex-col w-1/4 fixed top-0">
        <div>
          <img 
            src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=626&ext=jpg"
            alt="x logo" 
            className="rounded-full h-12 w-12 hover:border-gray-500 hover:border-2 hover:bg-gray-500 cursor-pointer" 
          />
        </div>
      
        <div>
          <Link to={"/home"}>
            <IconWithText Icon={MdHomeFilled} text="Home" className="flex flex-col sm:flex-row items-center" />
          </Link>
          <IconWithText Icon={IoSearch} text="Explore" className="flex flex-col sm:flex-row items-center" />
          <IconWithText Icon={RiNotification2Line} text="Notification" className="flex flex-col sm:flex-row items-center" />
          <IconWithText Icon={LuMessageSquare} text="Messages" className="flex flex-col sm:flex-row items-center" />
          <IconWithText Icon={FaRegSquare} text="Gork" className="flex flex-col sm:flex-row items-center" />
          <IconWithText Icon={PiBookmarkSimpleBold} text="Bookmarks" className="flex flex-col sm:flex-row items-center" />
          <IconWithText Icon={LuUsers} text="Communities" className="flex flex-col sm:flex-row items-center" />
          <IconWithText Icon={MdWorkspacePremium} text="Premium" className="flex flex-col sm:flex-row items-center" />
          <IconWithText Icon={MdHomeFilled} text="Business" className="flex flex-col sm:flex-row items-center" />
          <Link to="/user">
            <IconWithText Icon={CiUser} text="Profile" className="flex flex-col sm:flex-row items-center" />
          </Link>
          <IconWithText Icon={CgMoreO} text="More" className="flex flex-col sm:flex-row items-center" />
        </div>
      
        <button className="bg-blue-500 text-white rounded-full py-2 px-1 hidden sm:block sm:py-4 sm:px-2 mt-4 w-3/4 hover:bg-blue-600">
          Post
        </button>
      
        <div className="flex justify-between mt-10 w-3/4 items-center">
          <div className="flex items-center ms-4">
            <img 
              src={profile || "https://pbs.twimg.com/media/CNIuzq_WwAALz1u.png"} 
              alt="user profile" 
              className="rounded-full h-10 w-10" 
            />
            <div className="ml-2">
              <h1 className="text-white font-bold hidden sm:block">{name}</h1>
              <p className="text-gray-400 hidden sm:block">{username}</p>
            </div>
          </div>
          <button onClick={toggleDropdown} className="text-white">...</button>
          {isDropdownOpen && (
            <div className="absolute bottom-10 left-52 mt-2 bg-black text-white p-4 shadow-md shadow-white rounded-lg">
              <button onClick={handleLogoutClick} className="block w-full text-left px-4 py-2 hover:bg-gray-700">
                Logout
              </button>
            </div>
          )}
        </div>
      
        {confirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 m-5">
            <div className="bg-gray-900 sm:w-1/2 flex flex-col justify-center items-center mx-auto text-white p-5 rounded-lg">
              <h2 className="mb-4">Log out of X?</h2>
              <p className="sm:w-1/2">You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.</p>
              <div className="flex flex-col gap-2 mt-4 p-4 w-1/2">
                <button onClick={handleLogout} className="bg-white text-black border-2 border-b font-medium py-2 px-4 rounded-full mr-2 hover:bg-gray-700">
                  Log Out
                </button>
                <button onClick={handleCancel} className="bg-black border-2 text-white font-medium py-2 px-4 rounded-full hover:bg-gray-400">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
    );
};

export default Left;
