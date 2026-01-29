import { useEffect, useState } from "react";

const Projects = () => {
  const [AllProjects, setAllProjects] = useState([]);
  const [openFeatureId, setOpenFeatureId] = useState(null);

  useEffect(() => {
    fetch("../../../public/projects.json")
      .then((res) => res.json())
      .then((data) => setAllProjects(data));
  }, []);

  const toggleFeatures = (id) => {
    setOpenFeatureId(openFeatureId === id ? null : id);
  };

  return (
    <section className="py-12 px-6 ">
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
