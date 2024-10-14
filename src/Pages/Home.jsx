import React from "react";
import Left from "./Left";
import Right from "./Right";
import Main from "./Main";
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
import { Link } from "react-router-dom";
import User from "./user";
import { useEffect, useState } from "react";
const Home = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
          setUser(userData);
        }
      }, []);
    
      if (!user) {
        return <div>Loading...</div>; // Show loading while fetching user data
      }
  return (
    <div className="bg-black">
    <div className="    container mx-auto bg-black  ">
      <div className="    w-full grid grid-cols-12   ">
        <div className="  sm:block sm:col-span-3  ">
        <Left name={user.yourname} username={user.username} profile={user.profile} />

        </div>
        
        <div className=" col-span-9 sm:col-span-6  text-white"> <Main name={user.yourname} username={user.username} profile={user.profile}/> </div>
        <div className="col-span-3 ">
          <Right /> 
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-black sm:hidden">
  {/* nav */}
  <div className="flex justify-between">
    <Link to={"/home"}>
      <IconWithText Icon={MdHomeFilled} text="Home" className="flex items-center" />
    </Link>
    <IconWithText Icon={IoSearch} text="Explore" className="flex items-center" />
    <IconWithText Icon={RiNotification2Line} text="Notification" className="flex items-center" />
    <Link to="/user">
      <IconWithText Icon={CiUser} text="Profile" className="flex items-center" />
    </Link>
    <IconWithText Icon={CgMoreO} text="More" className="flex items-center" />
  </div>
</div>
        </div>
    </div>
  
  );
};

export default Home;
