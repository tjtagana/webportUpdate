import React from 'react';

import { TbBrandGithub } from "react-icons/tb";
import {
    SlSocialSkype,
    SlSocialBehance,
    SlSocialLinkedin
} from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-start gap-4 text-textLight'>
        <div className='w-[2px] h-[400px] bg-gray-500 bg-opacity-20'></div>
        <div className='flex flex-col gap-4'>
            <a href="https://github.com/tjtagana" target="_blank" title="Go to Github">
                <span className='w-10 h-10 text-xl bg-[#343a40] rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-x-2 transition-all duration-300'>
                    <TbBrandGithub />
                </span>
            </a>

            <a href="https://join.skype.com/invite/lJ2DHUJa7dEB" target="_blank" title='Go to Skype'>
                <span className='w-10 h-10 text-xl bg-[#343a40] rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-x-2 transition-all duration-300'>
                    <SlSocialSkype />
                </span>
            </a>

            <a href="https://www.behance.net/timothytagaa" target="_blank" title='Go to Behance'>
                <span className='w-10 h-10 text-xl bg-[#343a40] rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-x-2 transition-all duration-300'>
                    <SlSocialBehance />
                </span>
            </a>

            <a href="https://www.linkedin.com/in/tjtagana" target="_blank" title='Go to LinkedIn'>
                <span className='w-10 h-10 text-xl bg-[#343a40] rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-x-2 transition-all duration-300'>
                    <SlSocialLinkedin />
                </span>
            </a>
        </div>
        <div className='w-[2px] h-[300px] bg-gray-500 bg-opacity-20'></div>
    </div>
  );
};

export default LeftSide;