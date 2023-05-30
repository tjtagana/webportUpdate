import React from 'react';
import { GoMail } from 'react-icons/go';

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'>
      <a href='mailto:taganatimothyjames@gmail.com'>
        <p className='flex items-center text-md rotate-90 w-[320px] tracking-wide text-gray-400 hover:text-textGreen hover:-translate-y-2 transition-all duration-300'>
          <GoMail className='mr-2 text-lg' /> Send me an email
        </p>
      </a>
      <span className='w-[2px] h-[170px] bg-gray-500 bg-opacity-20 inline-flex'></span>
    </div>
  );
};

export default RightSide;
