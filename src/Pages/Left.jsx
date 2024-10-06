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

import IconWithText from "../components/IconWithText";
const Left = () => {
  return (
    <div className=' mx-auto h-screen w-full flex flex-col'>
        <div>
            <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=626&ext=jpg" alt="logo" className="rounded-full h-12 w-12 hover:border-gray-500  hover:border-2 hover:bg-gray-500  cursor-pointer" />
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
    <button className="bg-blue-500 text-white rounded-full py-4 px-2  mt-4 w-3/4 hover:bg-blue-600">Post</button>

    {/* user and the info will be from apis */}
    <div className="flex justify-between mt-10 w-3/4 items-center">
    <div className="flex items-center  ms-4 ">
        <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" alt="user" className="rounded-full h-10 w-10" />
        <div className="ml-2">
            <h1 className="text-white font-bold">John Doe</h1>
            <p className="text-gray-400">
                @johndoe
            </p>

            </div>
            </div>
            <div className="text-white ">
                ...
            </div>
          
            </div>
    </div>
  )
}

export default Left