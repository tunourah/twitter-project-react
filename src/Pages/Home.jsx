import React from "react";
import Left from "./Left";
import Right from "./Right";
import Main from "./Main";
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
      <div className="    w-full grid grid-cols-12 ">
        <div className="col-span-3  ">
        <Left name={user.yourname} username={user.username} profile={user.profile} />

        </div>
        <div className=" col-span-9 sm:col-span-6  text-white"> <Main name={user.yourname} username={user.username} profile={user.profile}/> </div>
        <div className="col-span-3 ">
          <Right /> 
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
