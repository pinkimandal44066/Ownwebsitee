// import React, { useState } from 'react';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Add form submission logic here
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-blue-900 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl font-bold">Get in Touch</h1>
//           <p className="mt-4 text-lg">We'd love to hear from you. Drop us a message below.</p>
//         </div>
//       </section>

//       {/* Contact Info Section */}
//       <section className="py-12">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold">Phone</h3>
//             <p className="mt-2">+91-XXX-XXX-XXXX</p>
//           </div>
//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold">Email</h3>
//             <p className="mt-2">contact@company.com</p>
//           </div>
//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold">Address</h3>
//             <p className="mt-2">123 IT Street, Dhanbad, India</p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="bg-white py-12">
//         <div className="container mx-auto">
//           <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-center mb-6">Send Us a Message</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Phone</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Message</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
//                   rows="4"
//                   required
//                 ></textarea>
//               </div>
//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Optional Google Map Embed */}
//       <section className="bg-gray-200 py-12">
//         <div className="container mx-auto">
//           <h2 className="text-center text-2xl font-bold mb-4">Our Location</h2>
//           <div className="flex justify-center">
//             {/* Replace src with the embedded map link */}
//             <iframe
//               title="Company Location"
//               src="https://www.google.com/maps/embed?pb=!1m18..."
//               width="600"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactUs;

























import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

  const ContactPage = () => {
    useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);

   


    useEffect(() => {
      AOS.init({
        duration: 1000,  // Animation duration
        once: false,     // Animation will happen every time the element comes into view
      });
    }, []);
  return (
    <>
    <div className="bg-purple-700 min-h-screen flex flex-col justify-center items-center px-4 lg:px-20  ">
      {/* Hero Section */}
      {/* <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
          Get In Touch With Us
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 mt-4">
          We’d love to hear from you! Whether you’re curious about our services, need assistance, or just want to chat, reach out to us.
        </p>
      </div> */}
 <div className=" bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white"> Get In Touch With Us</h1>
          <p className="text-lg text-blue-200 mt-4">
            Let's start a conversation. We’d love to hear from you!
          </p>
        </div>
      </div>

      <div className="relative -mt-12 z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition duration-300"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Address</h3>
          <p className="text-gray-600">123 IT Park, Tech Street, Dhanbad</p>
        </div>

        <div
          className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Phone</h3>
          <p className="text-gray-600">+91 98765 43210</p>
          <p className="text-gray-500 text-sm mt-2">Mon - Fri, 9:00am - 6:00pm</p>
        </div>

        <div
          className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Email</h3>
          <p className="text-gray-600">info@itcompany.com</p>
          <p className="text-gray-600 mt-2">support@itcompany.com</p>
        </div>
      </div>
    </div>

    

    {/* <div className="w-full bg-purple-700 text-white py-16 text-center mt-10">
  <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
  <p className="text-lg mb-8">Let’s build something great together. Contact us to discuss your project.</p>
  
 
</div> */}

<div 
      className="w-full bg-purple-700 text-white py-16 text-center mt-10 zoom-in-out" 
      data-aos="zoom-in" 
      data-aos-duration="1000" 
      data-aos-easing="ease-in-out"
    >
      <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
      <p className="text-lg mb-8">Let’s build something great together. Contact us to discuss your project.</p>
    </div>

{/* <div data-aos="zoom-in" className="text-center mb-20 max-w-[400px] mx-auto bg-purple-700">
       
        <h1 className="text-3xl font-bold">
          Empowering Your Business with Cutting-Edge IT Solutions
        </h1>
        <p className="text-xs text-gray-400">
          We offer a range of innovative services, from web development and cloud integration
          to cybersecurity and IT consulting. Our expert team is dedicated to helping your business
          achieve technological excellence and stay ahead in the digital landscape.
        </p>
      </div> */}

      {/* Map Section */}
      <div className="w-screen  mb-10 px-4">

  <div className="relative h-64 lg:h-96 w-full shadow-lg rounded-lg overflow-hidden">
    <iframe
      className="absolute inset-0 w-full h-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8782945649857!2d-122.4008492846814!3d37.78956897975613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f8f2c67d%3A0x4e6f7cb6b882818d!2sGoogle!5e0!3m2!1sen!2sin!4v1632295986038!5m2!1sen!2sin"
      loading="lazy"
      title="Company Location"
    ></iframe>
  </div>
</div>









    </div>
    </div>
    </>
  );
};

export default ContactPage;
