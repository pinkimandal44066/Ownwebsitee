// import React from 'react';
// import { motion } from 'framer-motion';

// const AboutPage = () => {
//   return (
//     <div className="font-sans bg-gray-100 text-gray-900">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-teal-500 to-cyan-500 h-screen flex items-center justify-center text-center text-white">
//         <div className="absolute inset-0 opacity-50">
//           <motion.img
//             src="/path/to/hero-image.jpg"
//             alt="Hero Background"
//             className="object-cover w-full h-full"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 2 }}
//           />
//         </div>
//         <div className="relative z-10 px-4 py-8">
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="text-5xl md:text-6xl font-bold leading-tight mb-4"
//           >
//             Welcome to [Your Company]
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 1 }}
//             className="text-lg md:text-xl mb-6"
//           >
//             Pioneering IT Solutions with Passion and Precision
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             className="bg-white text-teal-700 font-bold py-3 px-6 rounded-lg shadow-lg"
//           >
//             Learn More
//           </motion.button>
//         </div>
//       </section>

//       {/* Company History */}
//       <section className="py-20 bg-white">
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl font-bold text-center mb-12 text-teal-600"
//         >
//           Our Evolution
//         </motion.h2>
//         <div className="max-w-5xl mx-auto px-4">
//           {[
//             { year: '2010', event: 'Foundation', description: 'Started with a vision to innovate and excel.' },
//             { year: '2015', event: 'Major Milestone', description: 'Completed our first landmark project successfully.' },
//             { year: '2020', event: 'Global Presence', description: 'Expanded our services to international markets.' }
//           ].map((milestone, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.3 }}
//               className="bg-gray-50 p-6 mb-8 rounded-lg shadow-lg relative"
//             >
//               <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 w-6 h-6 bg-teal-600 rounded-full"></div>
//               <h3 className="text-2xl font-semibold text-teal-800">{milestone.year}</h3>
//               <h4 className="text-xl font-semibold mt-2">{milestone.event}</h4>
//               <p className="mt-2 text-gray-700">{milestone.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-gray-200">
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl font-bold text-center mb-12 text-teal-600"
//         >
//           Meet Our Innovators
//         </motion.h2>
//         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             { name: 'Jane Doe', role: 'CEO', img: '/path/to/image1.jpg', bio: 'Guiding our team with a clear vision and strategy.' },
//             { name: 'John Smith', role: 'CTO', img: '/path/to/image2.jpg', bio: 'Leading technological advancements and innovation.' }
//           ].map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white p-6 rounded-lg shadow-lg text-center relative group"
//             >
//               <img src={member.img} alt={member.name} className="w-36 h-36 rounded-full mx-auto mb-4 object-cover group-hover:opacity-80 transition-opacity duration-300" />
//               <h3 className="text-xl font-semibold text-teal-800">{member.name}</h3>
//               <p className="text-gray-600">{member.role}</p>
//               <div className="mt-4 text-gray-700 group-hover:opacity-100 transition-opacity duration-300">{member.bio}</div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Mission & Values */}
//       <section className="py-20 bg-white">
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl font-bold text-center mb-12 text-teal-600"
//         >
//           Our Mission & Values
//         </motion.h2>
//         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             { icon: '/path/to/icon1.svg', text: 'Innovation', description: 'Constantly evolving to stay ahead of the curve.' },
//             { icon: '/path/to/icon2.svg', text: 'Integrity', description: 'Building trust through honesty and transparency.' }
//           ].map((value, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.3 }}
//               className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
//             >
//               <img src={value.icon} alt={value.text} className="w-20 h-20 mx-auto mb-4" />
//               <h4 className="text-lg font-medium text-teal-800">{value.text}</h4>
//               <p className="mt-2 text-gray-700">{value.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Information */}
//       <section className="py-20 bg-gray-300">
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-center mb-4 text-teal-600"
//         >
//           Get in Touch
//         </motion.h2>
//         <p className="text-lg text-center mb-4">We’re here to help. Reach out to us:</p>
//         <a href="mailto:contact@yourcompany.com" className="text-teal-500 text-lg font-semibold underline block text-center">
//           contact@yourcompany.com
//         </a>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;





















// import React from "react";

// import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
// import { IoIosWifi } from "react-icons/io";
// import { IoFastFoodSharp } from "react-icons/io5";
// import TravelImg from '../../public/Images/travelbox.png';
// const Banner = () => {
//   return (
//     <>
//       <div className="min-h-[550px] bg-white">
//         <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
//           <div className="container">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              
//               <div data-aos="flip-up  ">
//                 <img
//                   src={TravelImg}
//                   alt="biryani img"
//                   className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
//                 />
//               </div>
//               {/* text content section */}
//               <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
//                 <h1
//                   data-aos="fade-up"
//                   className="text-3xl sm:text-4xl font-bold"
//                 >
//                   Explore all corners of The world with us
//                 </h1>
//                 <p
//                   data-aos="fade-up"
//                   className="text-sm text-red-900 tracking-wide leading-8"
//                 >
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Eaque reiciendis inventore iste ratione ex alias quis magni at
//                   optio ratione ex alias quis magni at optio
//                   <br />
//                 </p>
//                 <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
//                   <div className="space-y-6">
//                     <div className="flex items-center gap-4">
//                       <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
//                       <p>Flight</p>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
//                       <p>Hotel</p>
//                     </div>
//                   </div>
//                   <div className="space-y-6">
//                     <div className="flex items-center gap-4">
//                       <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
//                       <p>Wi-fi</p>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
//                       <p>Foods</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Banner;
















import React from "react";
import Scrolling from '../Components/Scrolling';
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import TravelImg from '/Images/travelbox.webp'; 
import Aboutanimation from "./Aboutanimation";
import Ourteam from "./Ourteam";
const About = () => {
  return (
    <>
      <div className="min-h-[550px] bg-white">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              
              <div data-aos="flip-up"> 
                <img
                  src={TravelImg}
                  alt="travel image"
                  className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>
       
              <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16 px-5">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                About Us
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-black tracking-wide leading-8"
                >
                   At [Company Name], we specialize in providing cutting-edge technology solutions
                   tailored to meet the unique needs of our clients. With a team of experienced
                   professionals, we ensure that our clients achieve success in the digital space.
                  <br />
                </p>
                <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                      <p>Abcd</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                      <p>Efgh</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                      <p>Ijkl</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                      <p>Mnop</p>
                    </div>
                  </div>
                </div>
              </div>



            
            </div>
          </div>

          
        </div>





    <Aboutanimation />
      </div>







<Ourteam />

      
    </>
  );
};

export default   Scrolling(About);
