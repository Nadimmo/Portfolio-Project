import React from 'react';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 dark:bg-[#2c2523] dark:text-white">
      <Fade cascade direction="up" triggerOnce>
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-extrabold text-violet-500 mb-4">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed">
            Hi! I'm <span className="text-violet-500 font-semibold">Nadim Mostofa</span>, a passionate MERN Stack Developer with a strong foundation in education and technical skills. Here's a glimpse into my journey so far.
          </p>

          {/* Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Reusable Card Component */}
            {[
              {
                title: "🎓 Education",
                content:
                  "Completed SSC at Rangpur Technical School & College (2019–2020), majoring in Civil Drafting with CAD, GPA: 4.75. Currently pursuing Diploma in Engineering in Computer Science & Technology at Kurigram Polytechnic Institute, graduating in 2025.",
              },
              {
                title: "📚 Academics",
                content:
                  "Throughout my diploma, I’ve maintained academic excellence. I’ve completed my 6th semester and am now advancing in the 7th semester, focusing on real-world projects and practical knowledge.",
              },
              {
                title: "💻 Expertise",
                content:
                  "As a MERN Stack Developer, I specialize in building fast, modern web apps using React.js (frontend), and Node.js, Express.js, MongoDB (backend). I create responsive, scalable full-stack solutions tailored to real-world use cases.",
              },
            ].map((card, i) => (
              <Fade direction="up" delay={i * 100} triggerOnce key={i}>
                <div className="bg-[#2e2b29] border border-violet-700 rounded-2xl shadow-md hover:shadow-violet-800 transition duration-300 p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-semibold text-violet-400 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed flex-1">
                    {card.content}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
