import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer footer-center dark:bg-[#2c2523] dark:text-white text-base-content rounded p-10">
    <nav className="grid grid-flow-col gap-4">
      <a href='/#about' className="link link-hover">About us</a>
      <a href='/#skills' className="link link-hover">Skills</a>
      <a href='/#project' className="link link-hover">Project</a>
      <a href='/#contact' className="link link-hover">Contact</a>
    </nav>
    <nav>
      <div className="grid grid-flow-col gap-4">
        <a href='https://www.facebook.com/profile.php?id=100033618980505' target='_blank' className='text-2xl hover:cursor-pointer hover:text-violet-500'>
          <FaFacebook />
        </a>
        <a href='https://www.linkedin.com/in/md-nadim-mostofa-931a48247' target='_blank' className='text-2xl hover:cursor-pointer hover:text-violet-500'>
          <FaLinkedin />
        </a>
        <a href='https://github.com/Nadimmo?tab=overview&from=2024-12-01&to=2024-12-18' target='_blank' className='text-2xl hover:cursor-pointer hover:text-violet-500'>
          <FaGithub />
        </a>
        <a href='' target='_blank' className='text-2xl hover:cursor-pointer hover:text-violet-500'>
          <FaInstagram />
        </a>
      </div>
    </nav>
    <aside>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by Nadim Mostofa</p>
    </aside>
  </footer>
  )
}

export default Footer