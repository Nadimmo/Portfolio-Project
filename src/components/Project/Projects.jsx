import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import all your project components
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
  

// Assuming your Swiper component for featured projects
// You'll need to pass the featured project data to it
import ProjectSwiper from "./ProjectSwiper"; // Create this component for your carousel
import ProjectFour from "./ProjectFour";
import ProjectFive from "./ProjectFive";
import ProjectSix from "./ProjectSix";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animate only once
      // Other AOS settings like easing: 'ease-in-out' could be added
    });
  }, []);

  // You might want to manage your project data in an array
  // This makes it easier to pass data to components and loop through them
  const allProjects = [
    {
      id: "project-one",
      component: <ProjectOne />,
      isFeatured: true, // Mark some as featured for the swiper
    },
    {
      id: "project-two",
      component: <ProjectTwo />,
      isFeatured: true,
    },
    {
      id: "project-three",
      component: <ProjectThree />,
      isFeatured: true,
    },
    {
      id: "project-four",
      component: <ProjectFour />,
      isFeatured: true,
    },
    {
      id: "project-five",
      component: <ProjectFive />,
      isFeatured: true,
    },
    {
      id: "project-six",
      component: <ProjectSix />,
      isFeatured: true,
    },
  ];

  // Filter projects for the swiper (e.g., your top 2-3)
  const featuredProjects = allProjects.filter((project) => project.isFeatured);

  return (
    <section id="project" className="p-8 lg:p-12 ">
      <div className="my-8">
        <h1 className="text-4xl font-bold text-center  mb-4">
          My Projects
        </h1>
        <p className="text-lg  text-center">
          Explore a selection of my latest work with enhanced UX and design.
        </p>
      </div>

      {/* Hero Carousel/Swiper Section */}
      {/* Pass your featured projects data to your ProjectSwiper component */}
      <div className="mb-12"> {/* Add some bottom margin for spacing */}
        <ProjectSwiper projects={featuredProjects} />
      </div>

      
    </section>
  );
};

export default Projects;