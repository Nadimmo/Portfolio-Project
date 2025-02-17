import React from "react";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Beauty Parlor",
      description:
        "Women can easily book beauty services, track their bookings and payments, and share their feedback through reviews. Admins can manage user roles, monitor customer orders, add new services, delete users, and ensure data security.",
      features: [
        "Admin Features: Manage orders, add services, control user roles.",
        "User Features: Book appointments, track payments, leave reviews.",
      ],
      link: "https://beauty-parlour-ten.vercel.app/",
      image: "https://i.ibb.co.com/f4f70bj/Beauty-Parlor.png",
      animate: { initialX: 100 },
    },


  ];

  const project2 = [
    {
      title: "Survey Pro",
      description:
        "A survey pro website with user, surveyor, and admin dashboards, focusing on survey participation, management, and analytics.",
      features: [
        "User Dashboard: Participate in surveys, view reports.",
        "Surveyor Dashboard: Add/manage surveys, update details.",
        "Admin Dashboard: Manage users, assign roles, track payments.",
      ],
      link: "https://assignment-12-6f33b.web.app/",
      image: "https://i.ibb.co.com/cFVrVMK/First.png",
      animate: { initialX: 100 },
    },
  ]

  const project3 = [
    {
      title: "Cyclist Club",
      description:
        "A Cyclist Club website for managing events, user roles, and sharing club updates.",
      features: [
        "Admin Dashboard: Manage users, assign roles, post updates.",
        "Moderator Dashboard: Organize events, upload images.",
        "User Dashboard: View events, blogs, team info, and submit contact details.",
      ],
      link: "https://cylist-club.web.app/",
      image: "https://i.ibb.co.com/yyqK9S2/cycle.png",
      animate: { initialX: 100 },
    },
  ]

  const project4 = [

    {
      title: "Doctor House",
      description:
        "A Doctor House website for managing appointments, reviews, contact messages, and doctor administration.",
      features: [
        "User Dashboard: Book appointments, view history, add reviews.",
        "Admin Dashboard: Manage doctors, view users, handle requests.",
        "Home Page: Display reviews and enable contact submissions.",
      ],
      link: "https://doctorhouse-259ce.web.app/",
      image: "https://i.ibb.co.com/5KzYf4t/doctor.png",
      animate: { initialX: 100 },
    },
  ]


  return (
    <section
      id="project"
      className="py-16 px-8 text-black bg-gradient-to-b from-blue-50 to-blue-100"
    >
      {/* Projects Header */}
      <div className="text-center mb-16">
        <h1
          className="text-4xl font-bold text-gray-800  hover:cursor-pointer"
        >
          My Projects
        </h1>
      </div>

      {/* Projects List 1 */}
      <div className="max-w-7xl mx-auto  m-5">
        {projects.map((project, index) => (
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            key={index}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 lg:mt-0 mt-4"

          >
            {/* Project Image */}
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden group lg:mt-0 mt-4">
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-full object-cover group-hover:opacity-40 transition-opacity duration-300 p-2"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <FaLink size={24} />
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 text-center md:text-left md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600">{project.description}</p>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* Projects List 2 */}
      <div className="max-w-7xl mx-auto  m-5">
        {project2.map((project, index) => (
          <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2500"
            key={index}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 lg:mt-0 mt-4"

          >
            {/* Project Image */}
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden group lg:mt-0 mt-4">
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-full object-cover group-hover:opacity-40 transition-opacity duration-300 p-2"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <FaLink size={24} />
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 text-center md:text-left md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600">{project.description}</p>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* Projects List 3 */}
      <div className="max-w-7xl mx-auto  m-5">
        {project3.map((project, index) => (
          <div
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
            key={index}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 lg:mt-0 mt-4"

          >
            {/* Project Image */}
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden group lg:mt-0 mt-4">
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-full object-cover group-hover:opacity-40 transition-opacity duration-300 p-2"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <FaLink size={24} />
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 text-center md:text-left md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600">{project.description}</p>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* Projects List 4 */}
      <div className="max-w-7xl mx-auto  m-5">
        {project4.map((project, index) => (
          <div
          data-aos="flip-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3500"
            key={index}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 lg:mt-0 mt-4"

          >
            {/* Project Image */}
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden group lg:mt-0 mt-4">
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-full object-cover group-hover:opacity-40 transition-opacity duration-300 p-2"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <FaLink size={24} />
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 text-center md:text-left md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600">{project.description}</p>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
};

export default Projects;
