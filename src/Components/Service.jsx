// import React from 'react';

// const services = [
//   {
//     title: 'Web Development',
//     description: 'We build responsive and dynamic websites to elevate your business.',
//     icon: '🌐',
//   },
//   {
//     title: 'Mobile App Development',
//     description: 'Custom mobile app solutions tailored to meet your business needs.',
//     icon: '📱',
//   },
//   {
//     title: 'Cloud Solutions',
//     description: 'Scalable and secure cloud infrastructure services for modern enterprises.',
//     icon: '☁️',
//   },
//   {
//     title: 'IT Consultancy',
//     description: 'Expert IT consultancy to streamline and enhance your IT operations.',
//     icon: '💼',
//   },
// ];

// const Services = () => {
//   return (
//     <section className="bg-gray-100 py-16" id="services">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-12">
//           Our Services
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="relative p-8 bg-white shadow-lg rounded-lg transition transform hover:-translate-y-2 hover:shadow-2xl"
//             >
//               <div className="text-5xl mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;













// import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Animate on Scroll CSS

// const App = () => {
//   // Dark Mode Toggle
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS animations
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   // Services Data
//   const services = [
//     { title: "Web Development", description: "Scalable and responsive websites.", icon: "🌐" },
//     { title: "Mobile Apps", description: "Custom mobile applications.", icon: "📱" },
//     { title: "Cloud Solutions", description: "Secure cloud infrastructure.", icon: "☁️" },
//     { title: "IT Consulting", description: "Expert IT consulting.", icon: "💼" },
//   ];

//   return (
//     <div className={`min-h-screen ${darkMode ? "bg-black  text-purple-600" : "bg-white text-black"}`}>
      
//       {/* Dark Mode Toggle Button */}
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="fixed top-40 right-4 p-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg"
//       >
//         {darkMode ? "🌞" : "🌙"}
//       </button>

//       {/* Hero Section */}
     
//       {/* <section className="relative w-full h-screen flex items-center justify-center bg-gray-800 overflow-hidden">
  
//   <div className="absolute inset-0">
//     <img src="/path/to/your/image.jpg" alt="Hero Background" className="w-full h-full object-cover filter brightness-60" />
//   </div>


//   <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>

//   <div className="relative z-10 text-center px-8 py-16 bg-white bg-opacity-80 rounded-2xl shadow-2xl max-w-2xl transform-gpu transition-transform duration-500 hover:scale-105">
//     <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6 transform-gpu transition-transform duration-500 hover:text-blue-500">
//       Elevate Your Business with Innovative Solutions
//     </h1>
//     <p className="text-lg text-gray-600 mb-8">
//       Cutting-edge technology solutions tailored to your needs for ultimate growth and success.
//     </p>
//     <div className="flex flex-col sm:flex-row justify-center gap-6">
//       <a href="#services" className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300 transform-gpu hover:scale-105">
//         Explore Services
//       </a>
//       <a href="#contact" className="bg-green-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-700 transition-colors duration-300 transform-gpu hover:scale-105">
//         Get in Touch
//       </a>
//     </div>
//   </div>

//   <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 animate-float">
//     <svg width="150" height="150" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
//       <circle cx="50" cy="50" r="40" fill="currentColor"/>
//     </svg>
//   </div>
//   <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/4 translate-y-1/4 animate-float">
//     <svg width="150" height="150" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="text-pink-400">
//       <circle cx="50" cy="50" r="40" fill="currentColor"/>
//     </svg>
//   </div>
// </section>

// <style jsx>{`
//   @keyframes float {
//     0% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(-20px);
//     }
//     100% {
//       transform: translateY(0);
//     }
//   }

//   .animate-float {
//     animation: float 6s infinite ease-in-out;
//   }
// `}</style> */}


// {/* <style jsx>{`
//   @keyframes pulseShape {
//     0% {
//       transform: scale(1);
//       opacity: 0.7;
//     }
//     50% {
//       transform: scale(1.1);
//       opacity: 1;
//     }
//     100% {
//       transform: scale(1);
//       opacity: 0.7;
//     }
//   }

//   .animate-pulseShape {
//     animation: pulseShape 5s infinite;
//   }
// `}</style> */}



//       {/* Services Section */}
//       <section id="services" className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform hover:-translate-y-2 hover:shadow-2xl"
//                 data-aos="fade-up"
//               >
//                 <div className="text-6xl mb-4">{service.icon}</div>
//                 <h3 className="text-2xl font-bold">{service.title}</h3>
//                 <p>{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <section id="testimonials" className="py-20">
//   <div className="max-w-7xl mx-auto px-4">
//     <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
//     <div className="flex flex-col lg:flex-row lg:space-x-8">
//       <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg mb-8 lg:mb-0" data-aos="fade-up">
//         <p className="text-lg">"Amazing service! Highly recommend for any IT solutions."</p>
//         <p className="mt-4 font-bold">John Doe</p>
//         <p>CEO, Example Corp</p>
//       </div>
//       <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg" data-aos="fade-up">
//         <p className="text-lg">"Their expertise in web development is unmatched. Great team!"</p>
//         <p className="mt-4 font-bold">Jane Smith</p>
//         <p>Founder, Startup Inc.</p>
//       </div>
//     </div>
//   </div>
// </section>


        
//       </section>
//     </div>
//   );
// };

// export default App;




















// import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Animate on Scroll CSS

// const App = () => {
//   // Dark Mode Toggle
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS animations
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   // Services Data
//   const services = [
//     { title: "Web Development", description: "Scalable and responsive websites.", icon: "🌐" },
//     { title: "Mobile Apps", description: "Custom mobile applications.", icon: "📱" },
//     { title: "Cloud Solutions", description: "Secure cloud infrastructure.", icon: "☁️" },
//     { title: "IT Consulting", description: "Expert IT consulting.", icon: "💼" },
//   ];

//   return (
//     <div className={`min-h-screen ${darkMode ? "bg-black text-purple-600" : "bg-white text-black"}`}>
      
//       {/* Dark Mode Toggle Button */}
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="fixed top-40 right-4 p-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg"
//       >
//         {darkMode ? "🌞" : "🌙"}
//       </button>

//       {/* Hero Section */}
//       {/* Your hero section code remains unchanged */}

//       {/* Services Section */}
//       <section id="services" className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform -translate-y-4 opacity-0"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 200} // Stagger animation by 200ms per item
//                 data-aos-anchor-placement="bottom-bottom"
//               >
//                 <div className="text-6xl mb-4">{service.icon}</div>
//                 <h3 className="text-2xl font-bold">{service.title}</h3>
//                 <p>{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
//           <div className="flex flex-col lg:flex-row lg:space-x-8">
//             <div
//               className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg mb-8 lg:mb-0 transform -translate-y-4 opacity-0"
//               data-aos="fade-up"
//               data-aos-delay="200" // Delay for the first testimonial
//               data-aos-anchor-placement="bottom-bottom"
//             >
//               <p className="text-lg">"Amazing service! Highly recommend for any IT solutions."</p>
//               <p className="mt-4 font-bold">John Doe</p>
//               <p>CEO, Example Corp</p>
//             </div>
//             <div
//               className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg transform -translate-y-4 opacity-0"
//               data-aos="fade-up"
//               data-aos-delay="400" // Delay for the second testimonial
//               data-aos-anchor-placement="bottom-bottom"
//             >
//               <p className="text-lg">"Their expertise in web development is unmatched. Great team!"</p>
//               <p className="mt-4 font-bold">Jane Smith</p>
//               <p>Founder, Startup Inc.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;




















import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Animate on Scroll CSS
import Scrollslider from './Scrollslider';
const Service = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const services = [
    { title: "Web Development", description: "Scalable and responsive websites.", icon: "🌐", details: "More details about Web Development..." },
    { title: "Mobile Apps", description: "Custom mobile applications.", icon: "📱", details: "More details about Mobile Apps..." },
    { title: "Cloud Solutions", description: "Secure cloud infrastructure.", icon: "☁️", details: "More details about Cloud Solutions..." },
    { title: "IT Consulting", description: "Expert IT consulting.", icon: "💼", details: "More details about IT Consulting..." },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <>
    <div className={`min-h-screen ${darkMode ? "bg-black text-purple-600" : "bg-white text-black"}`}>
      
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-40 right-4 p-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>

      {/* Hero Section */}
      {/* Your hero section code remains unchanged */}

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform -translate-y-4 opacity-0"
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-anchor-placement="bottom-bottom"
                onClick={() => openModal(service)}
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div
              className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg mb-8 lg:mb-0 transform -translate-y-4 opacity-0"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor-placement="bottom-bottom"
            >
              <p className="text-lg">"Amazing service! Highly recommend for any IT solutions."</p>
              <p className="mt-4 font-bold">John Doe</p>
              <p>CEO, Example Corp</p>
            </div>
            <div
              className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg transform -translate-y-4 opacity-0"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor-placement="bottom-bottom"
            >
              <p className="text-lg">"Their expertise in web development is unmatched. Great team!"</p>
              <p className="mt-4 font-bold">Jane Smith</p>
              <p>Founder, Startup Inc.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Modal for Service Details */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg mx-4">
            <h2 className="text-3xl font-bold mb-4">{selectedService.title}</h2>
            <p>{selectedService.details}</p>
            <button
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>

    <Scrollslider />
    </>
  );
};

export default Service;
