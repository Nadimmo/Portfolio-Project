import React from 'react'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <motion.section
            className="dark:bg-[#2c2523] dark:text-white "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between ">
                {/* Text Section */}
                <motion.div
                    className="lg:mt-0 mt-5 flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="lg:text-4xl font-bold leading-none">
                        Hi, I'm
                        <span className="dark:text-violet-600"> Nadim Mostofa</span>
                    </h1>
                    <h1 className="lg:text-2xl font-bold leading-none">
                        I'm
                        <span className="dark:text-violet-600"> <TypeAnimation
                            sequence={[
                                '', // Blank initial state
                                500, // Waits for 0.5s before starting
                                'MERN Stack Developer',
                                1000,
                                'Front-End Developer',
                                2000,
                                'React.js Developer',
                                3000,
                                'Web Developer',
                                () => {
                                    // console.log('Sequence completed');
                                },
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                        /></span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        A passionate and dedicated junior web developer with hands-on experience in the MERN stack.
                        I specialize in React.js, utilizing my expertise to create innovative and engaging websites.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a
                            rel="noopener noreferrer"
                            href="#project"
                            className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50 hover:shadow-lg transition-all"
                        >
                            View My Work
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="#contact"
                            className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-white transition-all"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Image Section with Hover and Animation */}
                <motion.div
                    className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                >
                    <img
                        src="https://i.ibb.co.com/kxmnLsb/profile.jpg"
                        alt="Profile"
                        className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-full border-4 border-violet-600 shadow-lg"
                    />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Banner