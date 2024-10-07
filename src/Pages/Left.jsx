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
        <div className='mx-2 h-screen w-full flex flex-col'>
            <div>
                <img 
                    src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=626&ext=jpg"
                    alt="x logo" 
                    className="rounded-full h-12 w-12 hover:border-gray-500 hover:border-2 hover:bg-gray-500 cursor-pointer" 
                />
            </div>
            
            <div>
                <IconWithText Icon={MdHomeFilled} text="Home" />
                <IconWithText Icon={IoSearch} text="Explore" />
                <IconWithText Icon={RiNotification2Line} text="Notification" />
                <IconWithText Icon={LuMessageSquare} text="Messages" />
                <IconWithText Icon={FaRegSquare} text="Gork" />
                <IconWithText Icon={PiBookmarkSimpleBold} text="Bookmarks" />
                <IconWithText Icon={LuUsers} text="Communities" />
                <IconWithText Icon={MdWorkspacePremium} text="Premium" />
                <IconWithText Icon={MdHomeFilled} text="Business" />
                <IconWithText Icon={CiUser} text="Profile" />
                <IconWithText Icon={CgMoreO} text="More" />
            </div>
            
            <button className="bg-blue-500 text-white rounded-full py-2 px-1 sm:py-4 sm:px-2 mt-4 w-3/4 hover:bg-blue-600">
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
                <button onClick={toggleDropdown} className="text-white hidden sm:block">...</button>
                {isDropdownOpen && (
                    <div className="absolute bottom-10 left-52 mt-2 bg-gray-800 text-white p-4 shadow-md shadow-white rounded-lg">
                        <button onClick={handleLogoutClick} className="block w-full text-left px-4 py-2 hover:bg-gray-700">
                            Logout
                        </button>
                    </div>
                )}
            </div>

            {confirm && ( // Render confirmation dialog
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 m-5 ">
                    <div className="bg-gray-900 w-1/2 flex flex-col justify-center items-center mx-auto  text-white p-5 rounded-lg">
                        <h2 className="mb-4">Log out of X?</h2>
                        
                        <p className="w-1/2">You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.</p>

                     
                        <div className=" flex flex-col gap-2  mt-4 p-4 w-1/2">
                            <button onClick={handleLogout} className="bg-white text-black border-2 border-black font-medium py-2 px-4 rounded-full mr-2 hover:bg-gray-700">Log Out</button>
                        
                            <button onClick={handleCancel} className="bg-black border-2 text-white font-medium py-2 px-4 rounded-full hover:bg-gray-400">Cancel</button>
                      
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Left;
