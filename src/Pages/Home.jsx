import React from "react";
import Left from "./Left";
import Right from "./Right";
import Main from "./Main";
import User from "./user";

const Home = () => {
  return (
    <div className="bg-black">
    <div className="    container mx-auto bg-black  ">
      <div className="    w-full grid grid-cols-12 ">
        <div className="col-span-3  ">
          <Left />
        </div>
        <div className=" col-span-9 sm:col-span-6  text-white"> <Main/> </div>
        <div className="col-span-3 ">
          <Right /> 
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
