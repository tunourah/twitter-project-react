import React from 'react';

const IconWithText = ({ Icon, text }) => {
  return (
 
    <div className='flex hover:inline-flex rounded-full bg-black hover:bg-custom py-2 px-3  gap-6 mb-2 items-center cursor-pointer'>
       
      <div className='text-white text-3xl'>
        {Icon && <Icon />}  
      </div>

      {/* Text */}
      <h1 className="text-white text-xl font-medium">
        {text}  
      </h1>
    </div>
 
  );
};

export default IconWithText;
