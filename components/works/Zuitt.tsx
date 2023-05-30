import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";

const Zuitt = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont" 
        >
            Full-Stack Web Dev <span className="text-textGreen tracking-wide"> @Zuitt Bootcamp</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">Jan 2023 - April 2023
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <IoMdArrowDropright />
                </span>
                Front-end Development: Build interactive and responsive user interfaces using HTML, CSS, and JavaScript, including frameworks like React or Angular.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <IoMdArrowDropright />
                </span>
                Back-end Development: Develop robust and scalable web applications using server-side programming languages like Node.js or Python, and handle databases, APIs, and server management.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <IoMdArrowDropright />
                </span>
                Full-Stack Development: Integrate front-end and back-end technologies to create end-to-end web solutions, handle user authentication, and implement features like user management, payment processing, or real-time communication.
            </li>
        </ul>
    </motion.div>
  )
}

export default Zuitt;