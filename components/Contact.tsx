import React from 'react'

const Contact = () => {
  return (
    <section
    id='contact'
    className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'
    >
        <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
            04. Contact
        </p>
        <h2 className='font-titleFont text-5xl font-semibold'>Get In Touch</h2>
        <p className='max-w-[750px] text-center text-textDark tracking-wide'>
        Are you seeking a web developer with a background in multimedia arts and a strong focus on UX design? Look no further! I offer a unique combination of creativity, technical expertise, and user-centered design thinking. Let&apos;s collaborate to create visually captivating and user-friendly websites that leave a lasting impression. Contact me today to shape the future of web development and UX design together.
        </p>
        <a href="mailto:timothyjamestagana@gmail.com">
            <button
            className='w-[190px] h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300'
            >
                Let&apos;s work together
            </button>
        </a>
    </section>
  );
};

export default Contact;