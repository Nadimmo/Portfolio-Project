import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaGithub, FaLink, FaRProject } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "@mui/material";
import { Button } from "react-scroll";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animate only once
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Job Portal",
      description: "Job Portal Web Application built with the MERN Stack, designed to help users find and apply for jobs based on location and category. It also allows users to save jobs, view company information, read blogs, and submit feedback. Admins can manage job posts, users, blogs, and more.",
      features: [
        "Admin Features: Post new jobs, add/manage companies, publish/manage blogs, manage users/roles, handle applications/messages, edit/update content.",
        "User Features:  Job search by location/category, view/save details, apply/track via profile, manage saved jobs, browse latest jobs/blog, see company info/job counts/roles, submit feedback.",
      ],
      link: "https://job-portal-5d53a.web.app/",
      github_link: "https://github.com/Nadimmo/Job-Portal-Client-side-",
      image: "https://i.imghippo.com/files/DCK9621o.png",
    },
    {
      id: 2,
      title: "Travel Guru",
      description: "Travel Guru is a smart travel platform that offers seamless package booking, integrated payment processing, and an admin panel equipped to manage cancellations, deletions, and a host of additional features.",
      features: [
        "Admin Features: Manage users, update travel packages, oversee bookings, and handle user inquiries seamlessly",
        "User Features:  Effortlessly book travel packages, leave reviews, make secure payments, and track your booking history.",
      ],
      link: "https://travel-guru-a638f.web.app/",
      github_link: "https://github.com/Nadimmo/M9-Travel-Guru",
      image: "https://i.ibb.co.com/rRGGRDRz/travel.png",
    },
    
    {
      id: 3,
      title: "Blogging Platform",
      description:
        "Share your unique ideas, stories, and perspectives with the world. Connect with like-minded individuals and make an impact through your words.",
      features: [
        "Admin Features: Manage users & authors (add, edit, delete, assign roles), Manage all blogs (edit, delete),Manage feedback (edit, delete)",
        "User Features: Write, edit, delete blogs,  Like, share, and save blogs,Create and edit profile,Send feedback"
      ],
      link: "https://blogging-platform-5850d.web.app/",
      github_link: "https://github.com/Nadimmo/Beauty-Parlar-Client-side-",
      image: "https://i.ibb.co.com/B5sRkJnS/Blogs-Platform.png",
    },
    {
      id: 4,
      title: "Survey Pro",
      description:
        "A survey pro website with user, surveyor, and admin dashboards, focusing on survey participation, management, and analytics.",
      features: [
        "Admin Features: User management, assign roles, track payment history.",
        "User Features: Participate in surveys, view submitted survey reports.",
        "Surveyor Features: Add surveyors, manage survey details, update surveys.",
      ],
      link: "https://assignment-12-6f33b.web.app/",
      github_link: "https://github.com/Nadimmo/M9-Assignment-12-ClientSide",
      image: "https://i.ibb.co.com/cFVrVMK/First.png",
    },
    {
      id: 5,
      title: "Cyclist Club",
      description:
        "A Cyclist Club website for managing events, user roles, and sharing club updates.",
      features: [
        "Admin Features: Manage users, assign roles, and post news or updates.",
        "Moderator: Organize events, upload images, and share updates.",
        "User Features: View events, team info, blogs, and submit contact details.",
      ],
      link: "https://cylist-club.web.app/",
      github_link: "https://github.com/Nadimmo/Cyclist-Club-Client-Side",
      image: "https://i.ibb.co.com/yyqK9S2/cycle.png",
    },
   {
      id: 6,
      title: "Beauty Parlor",
      description:
        "Online platform for women to easily book beauty services, track appointments and payments, and leave reviews. Admins manage users, services, and orders",
      features: [
        "Admin Features: Manage users, add services, view orders, and delete users.",
        "User Features: Book appointments, secure payments, track payment history and leave reviews."
      ],
      link: "https://beauty-parlour-ten.vercel.app/",
      github_link: "https://github.com/Nadimmo/Beauty-Parlar-Client-side-",
      image: "https://i.ibb.co.com/f4f70bj/Beauty-Parlor.png",
    },
  ];

  const [showOverview, setShowOverview] = useState({})
  const handleShow = (projectId) => {
    setShowOverview(prevStat => ({
      ...prevStat,
      [projectId]: !prevStat[projectId]
    }))
  }


  return (
    <section id="project" className="p-8 lg:p-12 dark:bg-[#332d2b] dark:text-gray-300">
      <div className="my-8"> {/* Increased margin for better spacing */}
        <h1 className="text-4xl font-bold text-center text-white dark:text-white mb-4">My Projects</h1> 
        <p className="text-lg text-gray-300 text-center">
          Explore a selection of my latest work with enhanced UX and design.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:grid-cols-1"> {/* Added medium screen responsiveness and increased gap */}
        {projects.map(project => (
          <div key={project.id} className="border border-violet-600 shadow-md hover:shadow-violet-700 transition duration-300 rounded-xl overflow-hidden">
            <div className="relative h-64 flex items-center justify-center border-b border-gray-700 dark:border-gray-600 rounded-t-xl"> {/* Improved border color */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              ) : (
                <div className="text-gray-500 dark:text-gray-500">Project Image</div>
              )}
              <div className="absolute inset-0 bg-black opacity-20 rounded-t-xl"></div> {/* Subtle image overlay */}
            </div>

            <div className="p-6"> {/* Increased padding */}
              <h2 className="text-xl font-semibold text-white dark:text-white mb-2">{project.title}</h2> {/* Improved text color and margin */}
              <p className="text-gray-400 dark:text-gray-400 mb-4">{project.description}</p> {/* Improved text color and margin */}

              {/* Toggleable Overview */}
              <div className="mb-4">
                <button
                  variant="outline"
                  className="w-full py-2 border border-gray-600 dark:border-gray-500 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition duration-200"
                  onClick={() => handleShow(project.id)}
                >
                  {showOverview[project.id] ? 'Hide Details' : 'Show Details'}
                </button>

                <div className={`prose prose-sm max-w-none text-gray-400 dark:text-gray-400 mt-2 overflow-hidden transition-all duration-300 ${showOverview[project.id] ? 'max-h-screen p-2' : 'max-h-0 p-0'}`}>
                  {/* overview */}
                  <ul>
                    {project.features && project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  {/* button  */}
                  <div className="lg:flex sm:flex-row md:flex justify-between gap-3 mt-4"> {/* Adjusted gap */}
                    <button asChild variant="default" className="lg:flex-1 bg-[#8DD8FF] text-black border border-gray-600 dark:border-gray-500 rounded-lg py-2 hover:bg-[#69c7ff] transition duration-200 w-full">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full">
                        <span className="mr-2"> <FaLink /></span> Live View
                      </a>
                    </button>
                    <button asChild variant="outline" className="lg:flex-1 border border-gray-600 dark:border-gray-500 rounded-lg py-2 hover:bg-white hover:text-black transition duration-200 w-full lg:mt-0 mt-2">
                      <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full">
                        <span className="mr-2"> <FaGithub /></span> GitHub
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
