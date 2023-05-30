import SectionTitle from "./SectionTitle";
import { IoMdArrowDropright } from "react-icons/io"
import Image from "next/image";

const About = () => {
  return (
    <section
    id="about"
    className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
    <SectionTitle title="About Me" titleNo="01" />
    <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
            <p>
            Experienced Graphic Design Specialist and Multimedia Specialist transitioning as Web Developer and UX Designer. Highly adaptive to various multimedia skills, web emerging technologies and curating design standards across diverse platforms. Creative, goal-driven, and a good team player. Music and sports enthusiast. I approach challenges as a key to success and self-development.
            </p>
            <p>Here are few technologies I have been working with recently:</p>
            <ul className="max-w-[500px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-2">
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <IoMdArrowDropright />
                    </span>
                    Javascript
                </li><li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <IoMdArrowDropright />
                    </span>
                    Next.js
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <IoMdArrowDropright />
                    </span>
                    React
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <IoMdArrowDropright />
                    </span>
                    Node.js
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <IoMdArrowDropright />
                    </span>
                    TypeScript
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <IoMdArrowDropright />
                    </span>
                    Express.js
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <IoMdArrowDropright />
                    </span>
                    MongoDB
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <IoMdArrowDropright />
                    </span>
                    Tailwindcss
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <IoMdArrowDropright />
                    </span>
                    Figma
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <IoMdArrowDropright />
                    </span>
                    React Spring (Currently Learning)
                </li>
            </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
            <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
                <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                    <Image
                    className="rounded-lg h-full object-cover"
                    src="/assets/images/TJ2.JPG"
                    alt="TJ2"
                    width={300}
                    height={50}
                    />
                    <div className="hidden lgl:inline-block absolute w-[300px] h-80 bg-textGreen/10 rounded-md top-0 left-0 group-hover:bg-transparent duration-300">
                    </div>
                </div>
            </div>
            <div className="hidden lgl:inline-flex w-[300px] h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
            </div>
        </div>
    </div>    
    </section>
  );
};

export default About;