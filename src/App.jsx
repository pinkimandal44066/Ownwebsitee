









// // import React, { useState } from 'react';
// // import './App.css'; // Ensure this imports Tailwind styles

// // function App() {
// //   const [isNavOpen, setIsNavOpen] = useState(false);

// //   const toggleNav = () => {
// //     setIsNavOpen(!isNavOpen);
// //   };

// //   return (
// //     <div className="relative" style={{ height: '80vh', color: 'white' }}>
// //       {/* Background Image */}
// //       <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid)' }}>
// //         {/* Overlay for better text visibility */}
// //         <div className="absolute inset-0 bg-black opacity-50"></div>
// //       </div>

// //       <header className="relative flex items-center justify-between p-4">
// //         {/* Logo */}
// //         <div className="text-2xl font-bold">
// //           <img src="https://img.freepik.com/premium-photo/gold-symbol-with-black-gold-symbol-it_931553-271038.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid" 
// //           alt="Logo" className="w-24 rounded-full mt-3" />
// //         </div>

// //         {/* Hamburger Menu */}
// //         <button onClick={toggleNav} className="text-4xl">
// //           &#9776;
// //         </button>

// //         {/* Side Menu for Small Screens */}
// //         <nav className={`fixed top-0 right-0 w-2/3 md:w-1/3 bg-gray-900 h-full transform
// //            transition-transform duration-300 ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} `}>
// //           <button onClick={toggleNav} className="absolute top-4 right-4 text-5xl mt-6">
// //             &times;
// //           </button>
// //           <ul className="flex flex-col items-center mt-16">
// //             <li className="py-4"><a href="#home">Home</a></li>
// //             <li className="py-4"><a href="#services">Services</a></li>
// //             <li className="py-4"><a href="#about">About</a></li>
// //             <li className="py-4"><a href="#contact">Contact</a></li>
// //           </ul>
// //         </nav>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;




// import React from 'react';
// import Navbar from './Components/Navbar';
// import Heading from './Components/Heading';
// import Homefour from './Components/Homefour';
// import Homeone from './Components/Homeone';
// import Hometwo from './Components/Hometwo';
// import Homethree from './Components/Homethree';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';
// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Heading />
   
//       <Homeone />
//       <Hometwo />
//       <Homefour />
//       <Homethree />
     
//       <Contact />
//       <Footer />
     
//     </div>
//   )
// }

// export default App

















import React from "react";
// import Aboutus from "./Components/Pages/Aboutus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Servicepage from "./Components/Servicepage";
// import Home from "./Components/Homefolder/Home";
import LayOut from "./Components/LayOut";
import Home from "./Components/Home";
import About from './Components/About';
import Service from "./Components/Service";
import Contact from './Components/Contact';
// import Service from "./Components/Service";
// import Contactus from "./Components/Contactus";
// import Careers from './Components/Careers';
// import Webdevelopment from "./Components/Webdevelopment";
// import Products from "./Components/Products";
// import RefundPolicy from "./Components/Refundreturnpolicy";
// import PrivacyPolicy from "./Components/Privacypolicy";
// import Faq from "./Components/Faq";
// import Contactcareer from './Components/Contactcareer';
// import { Toaster } from "react-hot-toast";

// import Slider from 'react-slick';
const App = () => {
  // React.useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 700,
  //     easing: "ease-in",
  //     delay: 100,
  //   });
  //   AOS.refresh();
  // }, []);

  return (
    <div>
      <div>
        <Router>
          <Routes>
               <Route path="/" element={<LayOut />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/Servicepage" element={< Servicepage/>} />
              <Route path="/Careers" element={<Careers/>} />
              <Route path="/Webdevelopment" element={< Webdevelopment/>} />
              <Route path="/Products" element={<Products/>} />
              <Route path="/Refundreturnpolicy" element={<RefundPolicy/>} />
              <Route path="/Privacypolicy" element={<PrivacyPolicy/>} />
              <Route path="/Faq" element={<Faq/>} />
              <Route path="/Contactcareer" element={<Contactcareer/>} /> */}
            </Route>
          </Routes>
          {/* <Toaster /> */}
        </Router>
      </div>
    </div>
  );
};

export default App;
