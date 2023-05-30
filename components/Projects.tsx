import React from 'react'
import SectionTitle from './SectionTitle';
import Image from "next/image";

import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section
    id="projects"
    className='max-w-container mx-auto lgl:px-20 py-24'
    >
    <SectionTitle title="Web Dev & Design" titleNo="03" />
    <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
    {/* Project One */}
    <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col xl:flex-row gap-6'>
            <a
            className='w-full xl:w-1/2 h-auto relative group'
            href="https://bookhaven-reactjs.vercel.app/" target="_blank">
            <div>
                <Image
                className="w-full h-full object-contain items-center justify-between mx-auto"
                src="/assets/images/laptop1.png"
                alt="laptop1"
                width={1100}
                height={100} />
            </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-2 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
                </p>
                <h3 className='text-2xl font-bold'>Book Haven<span className='text-textDark'> - Ecommerce Bookstore</span></h3>
                <p className='bg-[#343a40] text-sm md:text-base p-2 md:p-6 rounded-md'>
                <span className='text-textGreen'>Book Haven</span> revolutionizes online book shopping. With personalized accounts, a diverse catalog, and effortless order management, it's the ultimate destination for book enthusiasts. Discover, purchase, and enjoy a <span className='text-textGreen'>seamless shopping experience</span> at <span className='text-textGreen'>Book Haven.</span>
                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Tailwindcss</li>
                    <li>Postman</li>
                    <li>Vercel</li>
                </ul>
                <div className='text-2xl flex gap-4'>
                    <a
                    className='hover:text-textGreen duration-300'
                    href="https://github.com/tjtagana"
                    target="_blank"
                    >
                        <TbBrandGithub />
                    </a>
                    <a
                    className='hover:text-textGreen duration-300'
                    href="https://bookhaven-reactjs.vercel.app/"
                    target="_blank"
                    >
                        <RxOpenInNewWindow />
                    </a>
                </div>
            </div>
        </div>
    </div>
    {/* Project Two */}
    <div className='w-full flex flex-col items-start justify-center gap-28 mt-10'>
    <div className='flex flex-col xl:flex-row-reverse gap-6'>
        <a
            className='w-full xl:w-1/2 h-auto relative group'
            href="https://drive.google.com/file/d/1CJsQ_pmNnZ2IroNyZIaif7obpXGKC0HE/view?usp=sharing" target="_blank">
            <div>
                <Image
                    className="w-full h-full object-contain"
                    src="/assets/images/phone3.png"
                    alt="laptop1"
                    width={1100}
                    height={100} />
            </div>
        </a>
        <div className='w-full xl:w-1/2 flex flex-col gap-2 lgl:justify-between items-start text-left z-10 xl:-mr-16'>
            <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
            </p>
            <h3 className='text-2xl font-bold'>Busy Bee<span className='text-textDark'> - Mobile App Design</span></h3>
            <p className='bg-[#343a40] text-sm md:text-base p-2 md:p-6 rounded-md'>
                <span className='text-textGreen'>Busy Bee</span> is a sleek and intuitive to-do list application designed to simplify task management and boost productivity. With its user-friendly interface and powerful features, Busy Bee empowers users to efficiently organize, prioritize, and accomplish their<span className='text-textGreen'> tasks with ease.</span>
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-1 md:gap-5 justify-start text-textDark'>
                <li>Figma</li>
            </ul>
            <div className='text-2xl flex gap-4'>
                <a
                    className='hover:text-textGreen duration-300'
                    href="https://drive.google.com/file/d/1CJsQ_pmNnZ2IroNyZIaif7obpXGKC0HE/view?usp=sharing"
                    target="_blank"
                >
                    <RxOpenInNewWindow />
                </a>
                </div>
            </div>
        </div>
    </div>
    {/* Project Three */}
    <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col xl:flex-row gap-6'>
            <a
            className='w-full xl:w-1/2 h-auto relative group'
            href="https://drive.google.com/file/d/1cvXlnYZWOqcgC2dt-xDV9bUP8rqzq6fc/view?usp=sharing" target="_blank">
            <div className='items-center justify-center'>
                <Image
                className="w-full h-full object-contain items-center justify-between mx-auto"
                src="/assets/images/laptop3.png"
                alt="laptop1"
                width={1100}
                height={100} />
            </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-2 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
                </p>
                <h3 className='text-2xl font-bold'>Busy Bee<span className='text-textDark'> - Web Design</span></h3>
            <p className='bg-[#343a40] text-sm md:text-base p-2 md:p-6 rounded-md'>
                <span className='text-textGreen'>Busy Bee</span> is a sleek and intuitive to-do list application designed to simplify task management and boost productivity. With its user-friendly interface and powerful features, Busy Bee empowers users to efficiently organize, prioritize, and accomplish their<span className='text-textGreen'> tasks with ease.</span>
            </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-1 md:gap-5 justify-between text-textDark'>
                    <li>Figma</li>
                </ul>
                <div className='text-2xl flex gap-4'>
                    <a
                    className='hover:text-textGreen duration-300'
                    href="https://drive.google.com/file/d/1cvXlnYZWOqcgC2dt-xDV9bUP8rqzq6fc/view?usp=sharing"
                    target="_blank"
                    >
                        <RxOpenInNewWindow />
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>
  );
};

export default Projects;