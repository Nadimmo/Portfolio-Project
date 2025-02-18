import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';

const About = () => {
  return (
      <section id="about" className="py-16 px-8 mt-10 text-black bg-gradient-to-b from-violet-50 to-blue-50">
         {/* about section */}
     <Fade bottom cascade>
       <div className="max-w-7xl mx-auto text-center">
         {/* Section Title */}
         <h2 className="text-4xl font-bold text-violet-600 mb-6">
           About Me
         </h2>
         <p className="text-xl text-gray-700 mb-10 leading-relaxed">
           Hi! I'm <span className="text-violet-600 font-bold">Nadim Mostofa</span>, a passionate web developer. Here's a glimpse of my educational journey, expertise, and academic highlights.
         </p>

         <Tabs>
           {/* Tab List */}
           <TabList className="flex justify-center space-x-4 md:space-x-6 mb-8">
             <Tab
               className="cursor-pointer py-2 px-6 rounded-md text-gray-600 font-medium bg-white shadow-md hover:text-white hover:bg-violet-600 transition-all"
               selectedClassName="bg-violet-600 text-white"
             >
               Education
             </Tab>
             <Tab
               className="cursor-pointer py-2 px-6 rounded-md text-gray-600 font-medium bg-white shadow-md hover:text-white hover:bg-violet-600 transition-all"
               selectedClassName="bg-violet-600 text-white"
             >
               Academics
             </Tab>
             <Tab
               className="cursor-pointer py-2 px-6 rounded-md text-gray-600 font-medium bg-white shadow-md hover:text-white hover:bg-violet-600 transition-all"
               selectedClassName="bg-violet-600 text-white"
             >
               Expertise
             </Tab>
           </TabList>

           {/* Education Tab */}
           <TabPanel>
             <Fade bottom>
               <div className="text-center">
                 <h3 className="text-3xl font-bold text-violet-600 mb-4">
                   My Education
                 </h3>
                 <p className="text-lg text-gray-700 leading-relaxed">
                   I completed my <strong>SSC</strong> at{" "}
                   <span className="text-violet-500">
                     Rangpur Technical School & College
                   </span>{" "}
                   (2019-2020), specializing in{" "}
                   <strong>Civil Drafting with CAD</strong> with a GPA of{" "}
                   <strong>4.75</strong>. <br /> Currently, I'm pursuing a{" "}
                   <strong>Diploma in Engineering</strong> at{" "}
                   <span className="text-violet-500">
                     Kurigram Polytechnic Institute
                   </span>{" "}
                   in <strong>Computer Science and Technology</strong>, set to
                   graduate in <strong>2025</strong>.
                 </p>
               </div>
             </Fade>
           </TabPanel>

           {/* Academics Tab */}
           <TabPanel>
             <Fade bottom>
               <div className="text-center">
                 <h3 className="text-3xl font-bold text-violet-600 mb-4">
                   Academic Achievements
                 </h3>
                 <p className="text-lg text-gray-700 leading-relaxed">
                   I've consistently excelled in academics, showcasing a strong
                   passion for technology, programming, and web development. I
                   have successfully completed my <strong>6th semester</strong>{" "}
                   exams and am currently advancing through the{" "}
                   <strong>7th semester</strong>, focusing on hands-on projects
                   and practical knowledge.
                 </p>
               </div>
             </Fade>
           </TabPanel>

           {/* Expertise Tab */}
           <TabPanel>
             <Fade bottom>
               <div className="text-center">
                 <h3 className="text-3xl font-bold text-violet-600 mb-4">
                   My Expertise
                 </h3>
                 <p className="text-lg text-gray-700 leading-relaxed">
                   As a <strong>MERN Stack Developer</strong>, I specialize in{" "}
                   <strong>React.js</strong>, creating responsive and user-friendly
                   web applications. My expertise extends to{" "}
                   <strong>Node.js</strong>, <strong>Express.js</strong>, and{" "}
                   <strong>MongoDB</strong>, enabling me to develop robust
                   full-stack solutions. I am deeply passionate about building
                   engaging and scalable applications, with{" "}
                   <strong>React.js</strong> being my preferred frontend
                   framework.
                 </p>
               </div>
             </Fade>
           </TabPanel>
         </Tabs>
       </div>
     </Fade>
   </section>
  )
}

export default About
