import React, { useState, } from 'react';
const ProjectSix = () => {
  const project = {
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
      image: "https://i.imghippo.com/files/BQB9147nBY.png",
    }
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 text-center">
      <div className='lg:flex justify-between'>
          {/* image */}
        <div>
           <img
            src={project.image}
            alt={project.title}
            className="w-full  rounded-md mb-4 "
          />
        
          
        </div>
        {/* details */}
        <div className='lg:ml-4 '>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
          <p className="text-gray-600 text-base mb-4">{project.description}</p>

          {!showDetails && (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
              onClick={toggleDetails}
            >
              Show More
            </button>
          )}

          {showDetails && (
            <div className="mt-6 text-left">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="mb-1">{feature}</li>
                ))}
              </ul>
              <div className="mb-2 lg:flex lg:justify-between">

                <a href={project.link} target='_blank' className="btn btn-info flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                  <span className="ml-2">Live Preview</span>
                </a>
                <a href={project.github_link} target='_blank' className="lg:mt-0 mt-2 btn bg-black text-white border-black hover:bg-gray-800 flex items-center justify-center gap-2">
                  <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                  <span className="ml-2">Github Link</span>
                </a>
                {/* GitHub */}

              </div>

              <button
                className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors duration-300"
                onClick={toggleDetails}
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default ProjectSix;