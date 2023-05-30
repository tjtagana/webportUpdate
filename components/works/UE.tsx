import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";

const UE = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont" 
        >
            Multimedia Arts <span className="text-textGreen tracking-wide">@University of the East</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">2013 - 2017
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <IoMdArrowDropright />
                </span>
                Animation Fundamentals: Learn digital animation principles and techniques, including character design and motion, using 2D and 3D animation software.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <IoMdArrowDropright />
                </span>
                Multimedia Development: Acquire skills in creating interactive multimedia content for entertainment, such as games, simulations, and virtual reality experiences.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <IoMdArrowDropright />
                </span>
                Digital Animation Specialization: Focus on advanced topics like rigging, character animation, special effects, and compositing using industry-standard animation software.
            </li>
        </ul>
    </motion.div>
  )
}

export default UE;