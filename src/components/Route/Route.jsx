import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../Main/Main';
import About from '../About/About';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';


const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
            path:'/project',
            element: <Project></Project>
        },
        {
            path:'/skills',
            element: <Skills></Skills>
        },
        {
            path:'/contact',
            element: <Contact></Contact>
        },
       
    ]
  },
]);

export default Route