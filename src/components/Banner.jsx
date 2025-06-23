import React from 'react'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Banner = () => {
    return (
        <motion.section
            className=""
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
                    <h1 className="text-4xl md:text-4xl font-extrabold mb-4">
                        Hi, I'm <span className="text-violet-600 dark:text-violet-500">Nadim Mostofa</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 ">
                        I'm a
                        <span className="text-violet-600 dark:text-violet-500 ml-2">
                            <TypeAnimation
                                sequence={[
                                    'MERN Stack Developer', 1500,
                                    'Front-End Developer', 1500,
                                    'React.js Developer', 1500,
                                    'Web Developer', 1500,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h2>
                    <p className="text-lg  mb-6">
                        A passionate and dedicated junior web developer with hands-on experience in the MERN stack.
                        I specialize in React.js, crafting innovative and user-friendly websites.
                    </p>
                    {/* Social Media Icons */}
                    <div className="flex justify-center lg:justify-start gap-4 mb-6 text-2xl ">
                        <a href="https://www.facebook.com/profile.php?id=100033618980505" target="_blank" rel="noreferrer" className="hover:text-violet-500 transition">
                            <FaFacebook />
                        </a>
                        <a href="https://www.linkedin.com/in/md-nadim-mostofa-931a48247" target="_blank" rel="noreferrer" className="hover:text-violet-500 transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Nadimmo" target="_blank" rel="noreferrer" className="hover:text-violet-500 transition">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/mdnadim3381" className="hover:text-violet-500 transition">
                            <FaInstagram />
                        </a>
                    </div>

                    {/* Resume Button */}
                    <div className="flex justify-center lg:justify-start">
                        <a
                            href="/Resume/Nadim_Mostofa_Resume.pdf"
                            download
                            className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-2xl shadow-md transition-all"
                        >
                            Download Resume
                        </a>
                    </div>

                </motion.div>

                {/* Image Section with Hover and Animation */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img
                        src="https://i.ibb.co.com/rf18zpWs/IMG-20250513-WA0011-01-01.jpg"
                        alt="Profile"
                        className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128  border-2 border-violet-500 shadow-lg rounded-2xl"
                    />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Banner