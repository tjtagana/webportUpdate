import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";

const UXDesign = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont" 
        >
            On Training <span className="text-textGreen tracking-wide">@Coursera</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">May 2023 - Present
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <IoMdArrowDropright />
                </span>
                Principles of User-Centered Design: Understand how to create products that meet user needs and expectations through research and iterative design processes.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <IoMdArrowDropright />
                </span>
                Information Architecture and Interaction Design: Learn how to organize and structure content effectively, and create intuitive user interfaces through wireframing and prototyping.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <IoMdArrowDropright />
                </span>
                User Research and Usability Testing: Gain knowledge of user research methods and usability testing techniques to gather insights and improve your designs.
            </li>
        </ul>
    </motion.div>
  )
}

export default UXDesign