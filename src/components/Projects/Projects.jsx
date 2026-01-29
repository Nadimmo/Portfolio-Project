import { useEffect, useState } from "react";

const AllProjects = [
 
  {
    "id": 1,
    "title": "Job Portal",
    "description": "Job Portal Web Application built with the MERN Stack, designed to help users find and apply for jobs based on location and category. It also allows users to save jobs, view company information, read blogs, and submit feedback. Admins can manage job posts, users, blogs, and more.",
    "features": [
      "Admin Features: Post new jobs, add/manage companies, publish/manage blogs, manage users/roles, handle applications/messages, edit/update content.",
      "User Features:  Job search by location/category, view/save details, apply/track via profile, manage saved jobs, browse latest jobs/blog, see company info/job counts/roles, submit feedback."
    ],
    "link": "https://job-portal-5d53a.web.app/",
    "github_link": "https://github.com/Nadimmo/Job-Portal-Client-side-",
    "image": "https://i.imghippo.com/files/DCK9621o.png"
  },
  {
    "id": 2,
    "title": "Travel Guru",
    "description": "Travel Guru is a smart travel platform that offers seamless package booking, integrated payment processing, and an admin panel equipped to manage cancellations, deletions, and a host of additional features.",
    "features": [
      "Admin Features: Manage users, update travel packages, oversee bookings, and handle user inquiries seamlessly",
      "User Features:  Effortlessly book travel packages, leave reviews, make secure payments, and track your booking history."
    ],
    "link": "https://travel-guru-a638f.web.app/",
    "github_link": "https://github.com/Nadimmo/M9-Travel-Guru",
    "image": "https://i.ibb.co.com/rRGGRDRz/travel.png"
  },
  {
    "id": 3,
    "title": "Blogging Platform",
    "description": "Share your unique ideas, stories, and perspectives with the world. Connect with like-minded individuals and make an impact through your words.",
    "features": [
      "Admin Features: Manage users & authors (add, edit, delete, assign roles), Manage all blogs (edit, delete),Manage feedback (edit, delete)",
      "User Features: Write, edit, delete blogs,  Like, share, and save blogs,Create and edit profile,Send feedback"
    ],
    "link": "https://blogging-platform-5850d.web.app/",
    "github_link": "https://github.com/Nadimmo/Beauty-Parlar-Client-side-",
    "image": "https://i.imghippo.com/files/Fcwh4556SU.png"
  },
  {
    "id": 4,
    "title": "Survey Pro",
    "description": "A survey pro website with user, surveyor, and admin dashboards, focusing on survey participation, management, and analytics.",
    "features": [
      "Admin Features: User management, assign roles, track payment history.",
      "User Features: Participate in surveys, view submitted survey reports.",
      "Surveyor Features: Add surveyors, manage survey details, update surveys."
    ],
    "link": "https://assignment-12-6f33b.web.app/",
    "github_link": "https://github.com/Nadimmo/M9-Assignment-12-ClientSide",
    "image": "https://i.imghippo.com/files/HFPf6682TSw.png"
  },
   {
    "id": 5,
    "title": "Cyclist Club",
    "description": "A Cyclist Club website for managing events, user roles, and sharing club updates.",
    "features": [
      "Admin Features: Manage users, assign roles, and post news or updates.",
      "Moderator: Organize events, upload images, and share updates.",
      "User Features: View events, team info, blogs, and submit contact details."
    ],
    "link": "https://cylist-club.web.app/",
    "github_link": "https://github.com/Nadimmo/Cyclist-Club-Client-Side",
    "image": "https://i.imghippo.com/files/wC3459KfU.png"
  },
  {
    "id": 6,
    "title": "Beauty Parlor",
    "description": "Online platform for women to easily book beauty services, track appointments and payments, and leave reviews. Admins manage users, services, and orders",
    "features": [
      "Admin Features: Manage users, add services, view orders, and delete users.",
      "User Features: Book appointments, secure payments, track payment history and leave reviews."
    ],
    "link": "https://beauty-parlour-ten.vercel.app/",
    "github_link": "https://github.com/Nadimmo/Beauty-Parlar-Client-side-",
    "image": "https://i.imghippo.com/files/BQB9147nBY.png"
  }
]



const Projects = () => {
  const [openFeatureId, setOpenFeatureId] = useState(null);

  
  const toggleFeatures = (id) => {
    setOpenFeatureId(openFeatureId === id ? null : id);
  };

  return (
    <section id="projects" className="py-12 px-6 ">
      <h2 className="text-3xl font-bold text-center mb-10 ">
        🚀 My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {AllProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition hover:scale-105"
          >
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition hover:scale-105 flex flex-col"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                  {project.description}
                </p>

                {/* Features Toggle */}
                <button
                  onClick={() => toggleFeatures(project.id)}
                  className="mt-3 text-sm font-medium text-purple-600 hover:underline w-fit"
                >
                  {openFeatureId === project.id
                    ? "Hide Features ▲"
                    : "Show Features ▼"}
                </button>

                {/* Features List */}
                {openFeatureId === project.id && (
                  <ul className="mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
                    {project.features?.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}

                {/* Spacer pushes buttons to bottom */}
                <div className="mt-auto" />

                {/* Buttons */}
                <div className="flex gap-4 pt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    GitHub
                  </a>
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
