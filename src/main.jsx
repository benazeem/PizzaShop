import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Footer from './Components/Footer.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import { Testimonial } from './Components/index.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "review",
        element: <Testimonial />
      },
      {
        path: "order-now",
        element: <Footer />  
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <>
   <RouterProvider router={router} />
  </>
  // </React.StrictMode>,
)
