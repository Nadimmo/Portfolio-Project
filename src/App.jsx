import "./App.css";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <main>
      {/* navbar section */}
      <section className="transition-all">
        <div
          className={`navbar ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
            } transition-all shadow-md`}
        >
          {/* Left Side - Logo/Image */}
          <div className="navbar-start">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="https://i.ibb.co.com/kxmnLsb/profile.jpg"
                alt="Logo"
                className="h-12 w-12 rounded-full border-2 border-purple-500 shadow-md"
              />

            </a>
          </div>

          {/* Center - Navigation Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-4 space-x-6 font-semibold">
              <li>
                <a href="/" className="hover:text-purple-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-purple-400">
                  About
                </a>
              </li>
              <li>
                <a href="/skills" className="hover:text-purple-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="/project" className="hover:text-purple-400">
                  Project
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-purple-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side - Dark/Light Mode Toggle */}
          <div className="navbar-end">
            <button
              onClick={toggleDarkMode}
              className="btn btn-outline border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all"
            >
              {darkMode ? (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m8.66-7.66l-.7.7M4.34 4.34l-.7.7m16 12-.7.7m-14.34 0-.7-.7m6.68-15.66a9 9 0 110 18 9 9 0 010-18z"
                    />
                  </svg>{" "}
                  Light Mode
                </span>
              ) : (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m8.66-7.66l-.7.7M4.34 4.34l-.7.7m16 12-.7.7m-14.34 0-.7-.7m6.68-15.66a9 9 0 110 18 9 9 0 010-18z"
                    />
                  </svg>{" "}
                  Dark Mode
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* banner section */}
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
              <span className="dark:text-violet-600">senectus</span>erat pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Suspendisse</a>
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="https://i.ibb.co.com/kxmnLsb/profile.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
        </div>
      </section>


      {/* about section */}
      <section>
        about
      </section>
    </main>
  );
}

export default App;
