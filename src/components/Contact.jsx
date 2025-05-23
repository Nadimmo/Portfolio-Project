import axios from 'axios';
import React, { useRef } from 'react'
import Swal from 'sweetalert2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faNodeJs, faGitAlt, faGithub, faAws, faDocker, faBootstrap, faLinkedin, faFacebook, faMonero } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faEnvelope, faLaptopCode, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { BiLogoMongodb } from "react-icons/bi";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {

    const formRef = useRef(); // Reference to the form
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxlsBv-ardvGBSn1mtfZxVCPKBkkWsJB0rPadtS_ZOPLIjh5aJvthXbDQvdpn_6LBmH5g/exec"; // Replace with your script URL

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form behavior

        const form = formRef.current; // Get the form DOM element
        const formData = new FormData(form); // Create FormData object

        try {
            // Send form data to Google Sheets using Axios
            await axios.post(scriptURL, formData);

            // Success alert
            Swal.fire({
                title: "Success!",
                text: "Your message has been sent successfully.",
                icon: "success",
                confirmButtonColor: "#3085d6",
            });

            form.reset(); // Clear form fields
        } catch (error) {
            console.error("Error!", error.message);

            // Error alert
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again.",
                icon: "error",
                confirmButtonColor: "#d33",
            });
        }
    };


    return (
        <section id="contact" className="py-16 px-8 dark:bg-[#332d2b] dark:text-white">
            <ScrollAnimation animateIn="fadeIn">
                <div className="flex items-center justify-center px-6 py-12">
                    <div className="rounded-lg p-8 w-full max-w-5xl transition-transform duration-300 hover:scale-105 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Side - Contact Form */}
                        <div>
                            <h1 className="text-3xl font-bold ">Contact Us</h1>
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="space-y-6 mt-6"
                                name="submit-to-google-sheet"
                            >
                                {/* First Name */}
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium ">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        placeholder="Enter your first name"
                                        className="mt-1 block w-full rounded-lg border text-white border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-3 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium ">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className="mt-1 block w-full rounded-lg border text-white border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-3 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium ">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        placeholder="Enter your message"
                                        className="mt-1 block w-full rounded-lg border text-white
                                         border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-3 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                        {/* Right Side - Contact Info */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Get in Touch</h2>
                            <p className="text-white ">
                                I’m here to help! Reach out to me for any queries, collaborations, or project discussions.
                            </p>

                            <div className="space-y-4">
                                {/* Phone */}
                                <div className="flex items-center space-x-4">
                                    <FontAwesomeIcon icon={faPhone} className=" text-2xl" />
                                    <span className="text-white ">+880 1756790052</span>
                                </div>

                                {/* Email */}
                                <div className="flex items-center space-x-4">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                                    <span className="text-white w-1/2">nadimmostafa334@email.com</span>
                                </div>

                                {/* Address */}
                                <div className="flex items-center space-x-4">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className=" text-2xl" />
                                    <span className="text-white">Rangpur City, Bangladesh</span>
                                </div>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex space-x-6 mt-6">
                                <a
                                    href="https://github.com/Nadimmo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-500 text-2xl transition"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/md-nadim-mostofa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 text-2xl transition"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=100033618980505"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 text-2xl transition"
                                >
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </div>

                            {/* Download Resume Button */}
                            <a
                                href="/src/Professional Resume.pdf"
                                download='/src/Professional Resume.pdf'
                                rel="noopener noreferrer"
                                className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
                            >
                                Download Resume
                            </a>
                        </div>


                    </div>
                </div>
            </ScrollAnimation>
        </section>
    )
}

export default Contact