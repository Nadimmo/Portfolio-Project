import React from 'react'
import { faHtml5, faCss3Alt, faJs, faNodeJs, faGitAlt, faGithub, faAws, faDocker, faBootstrap, faLinkedin, faFacebook, faMonero } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faEnvelope, faLaptopCode, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { BiLogoMongodb } from "react-icons/bi";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RiTailwindCssFill, RiVercelFill, RiFirebaseFill } from 'react-icons/ri';
import { SiExpress, SiNetlify } from 'react-icons/si';







const Skills = () => {
  return (
    <section id="skills" className="p-12 ">
      <div className="group text-center mb-12">
        <motion.h1
          className="text-4xl font-extrabold  relative inline-block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Skills Description */}
        <div data-aos="zoom-in"
          className="text-center lg:text-left">
          <p className="text-xl  mb-8">
            I bring expertise in a variety of technologies and tools, ensuring the delivery of scalable and efficient web applications.
          </p>
          <ul className="text-lg  space-y-4">
            <li><strong>Front-End:</strong> HTML5, CSS3, JavaScript (ES6), React.js, Tailwind CSS, Bootstrap, TanStack Query, Axios , Daisy UI, Mamba UI</li>
            <li><strong>Authentication:</strong> Firebase and JSON Web Token (JWT)</li>
            <li><strong>Back-End:</strong> Node.js, Express.js</li>
            <li><strong>Databases:</strong> MongoDB</li>
            <li><strong>APIs:</strong> REST APIs</li>
            <li><strong>Version Control:</strong> Git & GitHub</li>
            <li><strong>Deployment:</strong> Vercel, Netlify, Firebase</li>
          </ul>
        </div>

        {/* Right Side - Skills Icons */}
        <div data-aos="zoom-in-left"
          className="text-center"

        >
          <h3 className="text-3xl font-semibold  mb-6">Technologies</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
            {/* Icon Items */}
            {[
              { name: "HTML5", icon: faHtml5, isFontAwesome: true },
              { name: "CSS3", icon: faCss3Alt, isFontAwesome: true },
              { name: "Tailwind CSS", icon: RiTailwindCssFill, isFontAwesome: false },
              { name: "Bootstrap", icon: faBootstrap, isFontAwesome: true },
              { name: "JavaScript", icon: faJs, isFontAwesome: true },
              { name: "React.js", icon: faReact, isFontAwesome: true },
              { name: "Node.js", icon: faNodeJs, isFontAwesome: true },
              { name: "Express", icon: SiExpress, isFontAwesome: false },
              { name: "MongoDB", icon: faDatabase, isFontAwesome: true },
              { name: "Git", icon: faGitAlt, isFontAwesome: true },
              { name: "GitHub", icon: faGithub, isFontAwesome: true },
              { name: "Firebase", icon: RiFirebaseFill, isFontAwesome: false },
              { name: "Vercel", icon: RiVercelFill, isFontAwesome: false },
              { name: "Netlify", icon: SiNetlify, isFontAwesome: false },

            ].map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4  hover:text-violet-600">
                  {tech.isFontAwesome ? <FontAwesomeIcon icon={tech.icon} /> : <>{React.createElement(tech.icon)}</>}

                </div>
                <p className="text-lg ">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills