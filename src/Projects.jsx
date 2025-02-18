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
        "Admin: Manage orders and services.",
        "User: Book appointments and leave reviews.",
      ],
      link: "https://beauty-parlour-ten.vercel.app/",
      image: "https://i.ibb.co.com/f4f70bj/Beauty-Parlor.png",
    },
    {
      title: "Survey Pro",
      description:
        "A survey pro website with user, surveyor, and admin dashboards, focusing on survey participation, management, and analytics.",
      features: [
        "User: Participate in surveys and view reports.",
        "Surveyor: Add/manage surveys.",
        "Admin: Manage users and roles.",
      ],
      link: "https://assignment-12-6f33b.web.app/",
      image: "https://i.ibb.co.com/cFVrVMK/First.png",
    },
    {
      title: "Cyclist Club",
      description:
        "A Cyclist Club website for managing events, user roles, and sharing club updates.",
      features: [
        "Admin: Manage users and post updates.",
        "Moderator: Organize events and upload images.",
        "User: View events, blogs, and team info.",
      ],
      link: "https://cylist-club.web.app/",
      image: "https://i.ibb.co.com/yyqK9S2/cycle.png",
    },
    {
      title: "Doctor House",
      description:
        "A Doctor House website for managing appointments, reviews, contact messages, and doctor administration.",
      features: [
        "User: Book appointments and leave reviews.",
        "Admin: Manage doctors and view user requests.",
        "Home Page: Display reviews and contact submissions.",
      ],
      link: "https://doctorhouse-259ce.web.app/",
      image: "https://i.ibb.co.com/5KzYf4t/doctor.png",
    },
    {
      title: "Travel Guru",
      description:
        "A Doctor House website for managing appointments, reviews, contact messages, and doctor administration.",
      features: [
        "User: Book appointments and leave reviews.",
        "Admin: Manage doctors and view user requests.",
        "Home Page: Display reviews and contact submissions.",
      ],
      link: "https://doctorhouse-259ce.web.app/",
      image: "https://i.ibb.co.com/5KzYf4t/doctor.png",
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
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-2 text-lg font-medium text-white bg-blue-600 rounded-full shadow hover:bg-blue-700 transition-colors"
                >
                  Live Preview
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-5 inline-block px-3 py-2 text-lg font-medium text-white bg-blue-600 rounded-full shadow hover:bg-blue-700 transition-colors"
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
