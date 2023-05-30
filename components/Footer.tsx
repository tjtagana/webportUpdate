import { TbBrandGithub } from "react-icons/tb";
import {
    SlSocialSkype,
    SlSocialBehance,
    SlSocialLinkedin
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
        <a href="https://github.com/tjtagana" target="_blank" title="Go to Github">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <TbBrandGithub />
                </span>
            </a>

            <a href="https://join.skype.com/invite/lJ2DHUJa7dEB" target="_blank" title='Go to Skype'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialSkype />
                </span>
            </a>

            <a href="https://www.behance.net/timothytagaa" target="_blank" title='Go to Behance'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialBehance />
                </span>
            </a>

            <a href="https://www.linkedin.com/in/tjtagana" target="_blank" title='Go to LinkedIn'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialLinkedin />
                </span>
            </a>
    </div>
  );
};

export default Footer;