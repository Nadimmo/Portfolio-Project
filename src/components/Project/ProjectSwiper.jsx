import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"; // If you're using autoplay

// Import required modules
// Make sure to install these Swiper modules: npm install swiper
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

const ProjectSwiper = ({ projects }) => {
  return (
    <Swiper
      // Install modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30} // Space between slides
      slidesPerView={1} // Number of slides per view
      navigation // Enable navigation arrows
      pagination={{ clickable: true }} // Enable pagination dots
      scrollbar={{ draggable: true }} // Enable scrollbar
      autoplay={{
        delay: 3500, // Autoplay delay in ms
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      loop={true} // Enable continuous loop mode
      className="mySwiper w-full rounded-lg shadow-lg" // Add some styling
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id} className="flex items-center justify-center bg-gray-800 text-white p-6">
          {/* Render the project component inside the SwiperSlide */}
          {/* You might want to pass project data as props to the individual project component */}
          {/* For example: <ProjectCard projectData={project} /> */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">{project.id.replace(/-/g, ' ').toUpperCase()}</h2>
            <p className="text-lg mb-4">A featured project showcase.</p>
            {project.component} {/* This will render ProjectOne, ProjectTwo, etc. */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSwiper;