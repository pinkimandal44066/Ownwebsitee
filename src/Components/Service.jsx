import React, { useState, useEffect } from "react";
import Scrolling from "../Components/Scrolling";
import AOS from "aos";
import "aos/dist/aos.css";
import Scrollslider from "./Scrollslider";
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
    {
      title: "Web Development",
      description: "Scalable and responsive websites.",
      icon: "🌐",
      details: "More details about Web Development...",
    },
    {
      title: "Mobile Apps",
      description: "Custom mobile applications.",
      icon: "📱",
      details: "More details about Mobile Apps...",
    },
    {
      title: "Cloud Solutions",
      description: "Secure cloud infrastructure.",
      icon: "☁️",
      details: "More details about Cloud Solutions...",
    },
    {
      title: "IT Consulting",
      description: "Expert IT consulting.",
      icon: "💼",
      details: "More details about IT Consulting...",
    },
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
      <div
        className={` ${
          darkMode ? "bg-black text-purple-600" : "bg-white text-black"
        }`}
      >
        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-40 right-4 p-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Services
            </h2>
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
            <h2 className="text-4xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              <div
                className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg mb-8 lg:mb-0 transform -translate-y-4 opacity-0"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg">
                  "Amazing service! Highly recommend for any IT solutions."
                </p>
                <p className="mt-4 font-bold">John Doe</p>
                <p>CEO, Example Corp</p>
              </div>
              <div
                className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg transform -translate-y-4 opacity-0"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text-lg">
                  "Their expertise in web development is unmatched. Great team!"
                </p>
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
              <h2 className="text-3xl font-bold mb-4">
                {selectedService.title}
              </h2>
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

export default  Scrolling(Service);
