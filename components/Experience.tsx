import React, { useState } from 'react'
import SectionTitle from './SectionTitle';
import UXDesign from './works/UXDesign';
import UE from './works/UE';
import Zuitt from './works/Zuitt';

const Experience = () => {
    const [trainCoursera, setTrainCoursera] = useState(true);
    const [trainZuitt, setTrainZuitt] = useState(false);
    const [studyUE, setStudyUE] = useState(false);

    const handleCoursera = () => {
        setTrainCoursera(true);
        setTrainZuitt(false);
        setStudyUE(false);
    };

    const handleZuitt = () => {
        setTrainCoursera(false);
        setTrainZuitt(true);
        setStudyUE(false);
    };

    const handleUE = () => {
        setTrainCoursera(false);
        setTrainZuitt(false);
        setStudyUE(true);
    };

  return (
    <section
    id='experience'
    className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'
    >
    <SectionTitle title="Education & Certificates" titleNo="02" />
    <div className='w-full mt-10 flex flex-col md:flex-row gap-4'>
        <ul className='md:w-38 flex flex-col'>
            <li 
            onClick={handleCoursera}
            className={`${
                trainCoursera
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#343a40] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
                Coursera: UX Design
            </li>
            <li
            onClick={handleZuitt} 
            className={`${
                trainZuitt
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#343a40] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
                Zuitt Bootcamp
            </li>
            <li 
            onClick={handleUE}
            className={`${
                studyUE
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#343a40] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
                University of the East
            </li>
        </ul>
        {trainCoursera && <UXDesign />}
        {trainZuitt && <Zuitt />}
        {studyUE && <UE />}
    </div>
    </section>
  );
};

export default Experience;