import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLink } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animate only once
    });
  }, []);

  const projects = [
    {
      title: "Beauty Parlor",
      description:
        "Women can easily book beauty services, track their bookings and payments, and share their feedback through reviews. Admins can manage user roles, monitor customer orders, add new services, delete users, and ensure data security.",
      features: [
        "Admin: Manage users, add services, view orders, and delete users.",
        "User: Book appointments, secure payments, track payment history and leave reviews."
      ],
      link: "https://beauty-parlour-ten.vercel.app/",
      github_link: "https://github.com/Nadimmo/Beauty-Parlar-Client-side-",
      image: "https://i.ibb.co.com/f4f70bj/Beauty-Parlor.png",
    },
    {
      title: "Blogging Platform",
      description:
        "Share your unique ideas, stories, and perspectives with the world. Connect with like-minded individuals and make an impact through your words.",
      features: [
        "Admin: vManage users & authors (add, edit, delete, assign roles), Manage all blogs (edit, delete),Manage feedback (edit, delete)",
        "User: Write, edit, delete blogs,  Like, share, and save blogs,Create and edit profile,Send feedback"
      ],
      link: "https://blogging-platform-5850d.web.app/",
      github_link: "https://github.com/Nadimmo/Beauty-Parlar-Client-side-",
      image: "https://i.ibb.co.com/B5sRkJnS/Blogs-Platform.png",
    },
    {
      title: "Survey Pro",
      description:
        "A survey pro website with user, surveyor, and admin dashboards, focusing on survey participation, management, and analytics.",
      features: [
        "User: Participate in surveys, view submitted survey reports.",
        "Surveyor: Add surveyors, manage survey details, update surveys.",
        "Admin: User management, assign roles, track payment history.",
      ],
      link: "https://assignment-12-6f33b.web.app/",
      github_link: "https://github.com/Nadimmo/M9-Assignment-12-ClientSide",
      image: "https://i.ibb.co.com/cFVrVMK/First.png",
    },
    {
      title: "Cyclist Club",
      description:
        "A Cyclist Club website for managing events, user roles, and sharing club updates.",
      features: [
        "Admin: Manage users, assign roles, and post news or updates.",
        "Moderator: Organize events, upload images, and share updates.",
        "User: View events, team info, blogs, and submit contact details.",
      ],
      link: "https://cylist-club.web.app/",
      github_link: "https://github.com/Nadimmo/Cyclist-Club-Client-Side",
      image: "https://i.ibb.co.com/yyqK9S2/cycle.png",
    },
    {
      title: "Doctor House",
      description:
        "A Doctor House website for managing appointments, reviews, contact messages, and doctor administration.",
      features: [
        "User: Book appointments, view history, make secure payments, and add reviews.",
        "Admin: Manage doctors, Manage users, Add Doctors and view user requests ",
      ],
      link: "https://doctorhouse-259ce.web.app/",
      github_link: "https://github.com/Nadimmo/M9-DoctoHouse-Project-Final",
      image: "https://i.ibb.co.com/5KzYf4t/doctor.png",
    },
    {
      title: "Travel Guru",
      description: "Travel Guru is a smart travel platform that offers seamless package booking, integrated payment processing, and an admin panel equipped to manage cancellations, deletions, and a host of additional features.",
      features: [
        "User:  Effortlessly book travel packages, leave reviews, make secure payments, and track your booking history.",
        "Admin: Manage users, update travel packages, oversee bookings, and handle user inquiries seamlessly",
      ],
      link: "https://travel-guru-a638f.web.app/",
      github_link: "https://github.com/Nadimmo/M9-Travel-Guru",
      image: "https://i.ibb.co.com/rRGGRDRz/travel.png",
    },
  ];

  return (
    <section
      id="project"
      className="py-20 px-6 text-gray-800 bg-gradient-to-b from-blue-50 to-blue-100"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
          My Projects
        </h1>
        <p className="text-lg text-gray-600">
          Explore a selection of my latest work with enhanced UX and design.
        </p>
      </div>

      {/* Projects Container */}
      <div className="max-w-7xl mx-auto grid gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:shadow-2xl hover:scale-105"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {/* Project Image */}
            <div className="relative md:w-1/2 h-72 overflow-hidden group">
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                >
                  <FaLink size={28} />
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 flex flex-col justify-center md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <p className="mb-4 text-gray-600 leading-relaxed">
                {project.description}
              </p>
              <ul className="list-disc list-inside mb-6 text-gray-600">
                Features Overview
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="flex items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-2 text-sm lg:text-lg font-medium text-white bg-[#6366F1] rounded-full shadow hover:bg-[#463fca] transition-colors"
                >
                  Live Preview
                </a>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-5 inline-block px-3 py-2 text-sm lg:text-lg font-medium text-white bg-[#14B8A6] rounded-full shadow hover:bg-[#0F766E] transition-colors"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
