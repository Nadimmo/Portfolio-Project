import React from 'react';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-8 mt-10 text-gray-800 bg-gradient-to-b from-violet-50 to-blue-50"
    >
      <Fade cascade direction="up">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-violet-600 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Hi! I'm <span className="text-violet-600 font-bold">Nadim Mostofa</span>,
            a passionate web developer. Here’s a glimpse into my educational journey, academic
            achievements, and technical expertise.
          </p>

          {/* About Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Education Card */}
            <Fade direction="up" triggerOnce>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-bold text-violet-600 mb-3">
                  Education
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I completed my <strong>SSC</strong> at{' '}
                  <span className="text-violet-500">Rangpur Technical School & College</span> (2019-2020),
                  specializing in <strong>Civil Drafting with CAD</strong> with a GPA of{' '}
                  <strong>4.75</strong>. Currently, I'm pursuing a <strong>Diploma in Engineering</strong> in{' '}
                  <strong>Computer Science and Technology</strong> at{' '}
                  <span className="text-violet-500">Kurigram Polytechnic Institute</span>, set to graduate in{' '}
                  <strong>2025</strong>.
                </p>
              </div>
            </Fade>

            {/* Academics Card */}
            <Fade direction="up" delay={100} triggerOnce>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-bold text-violet-600 mb-3">
                  Academics
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I have consistently excelled in academics, demonstrating a strong passion for technology
                  and programming. I successfully completed my <strong>6th semester</strong> exams and am
                  currently advancing through the <strong>7th semester</strong>, where I focus on hands-on
                  projects and practical knowledge.
                </p>
              </div>
            </Fade>

            {/* Expertise Card */}
            <Fade direction="up" delay={200} triggerOnce>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-bold text-violet-600 mb-3">
                  Expertise
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a <strong>MERN Stack Developer</strong>, I specialize in building responsive and
                  user-friendly web applications using <strong>React.js</strong> as my primary frontend
                  framework. My backend expertise includes <strong>Node.js</strong>,{' '}
                  <strong>Express.js</strong>, and <strong>MongoDB</strong>, which enables me to develop
                  robust and scalable full-stack solutions.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
