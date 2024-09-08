import React, { useState } from "react";
import homepage from "../../public/Images/homepage.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <div className="relative" style={{ height: "80vh", color: "white" }}>
        

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${homepage})` }}
        >
       
          <div
            className="absolute inset-0 bg-purple-700 
  opacity-0"
          ></div>
        </div>

        <header className="relative flex items-center justify-between p-4">
   <NavLink to='/' >
          <div className="text-2xl font-bold">
          
            <img
              src="https://img.freepik.com/premium-photo/gold-symbol-with-black-gold-symbol-it_931553-271038.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
              alt="Logo"
              className="w-24 rounded-full "
            />
          </div>
          </NavLink>
        
          <button onClick={toggleNav} className="text-4xl -mt-10">
            &#9776;
          </button>

         

          {/* BGCOLOURrgba(0, 0, 0, 0.8) BD ME ADD KRNA H  */}
          <nav
            className={`fixed top-0 right-0 w-2/3 md:w-1/3 bg-purple-700 opacity-50 h-full transform
      
           transition-transform duration-300 ${
             isNavOpen ? "translate-x-0" : "translate-x-full"
           } `}
          >
            <button
              onClick={toggleNav}
              className="absolute top-4 right-4 text-5xl mt-6"
            >
              &times;
            </button>
            <ul className="flex flex-col items-center mt-16 font-bold text-xl">
            <NavLink to='/' >
              <li className="py-4">
                <a href="#home">Home</a>
              </li>
              </NavLink>

              <NavLink to='/service'>
              <li className="py-4">
                <a href="#services">Services</a>
              </li>

              </NavLink>

              <NavLink to='/about'>
              <li className="py-4">
                <a href="#about">About</a>
              </li>

              </NavLink>
              <li className="py-4">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;







// import React, { useState } from "react";
// import homepage from "../../public/Images/homepage.png";
// import { NavLink } from "react-router-dom";
// const Navbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };
//   return (
//     <>
//       <div className="relative" style={{ height: "80vh", color: "white" }}>
        

//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${homepage})` }}
//         >
       
//           <div
//             className="absolute inset-0 bg-purple-700 
//   opacity-0"
//           ></div>
//         </div>

//         <header className="relative flex items-center justify-between p-4">
//    <NavLink to='/' >
//           <div className="text-2xl font-bold">
          
//             <img
//               src="https://img.freepik.com/premium-photo/gold-symbol-with-black-gold-symbol-it_931553-271038.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
//               alt="Logo"
//               className="w-24 rounded-full "
//             />
//           </div>
//           </NavLink>
        
//           <button onClick={toggleNav} className="text-4xl -mt-10">
//             &#9776;
//           </button>

         

//           {/* BGCOLOURrgba(0, 0, 0, 0.8) BD ME ADD KRNA H  */}
//           <nav
//             className={`fixed top-0 right-0 w-2/3 md:w-1/3 bg-purple-700 opacity-50 h-full transform
      
//            transition-transform duration-300 ${
//              isNavOpen ? "translate-x-0" : "translate-x-full"
//            } `}
//           >
//             <button
//               onClick={toggleNav}
//               className="absolute top-4 right-4 text-5xl mt-6"
//             >
//               &times;
//             </button>
//             <ul className="flex flex-col items-center mt-16 font-bold text-xl">
//             <NavLink to='/' >
//               <li className="py-4">
//               <NavLink to="#home">Home</NavLink>
//                 {/* <a href="#home">Home</a> */}
//               </li>
//               </NavLink>

//               <NavLink to='/service'>
//               <li className="py-4">
//               <NavLink to="#services">Services</NavLink>
//                 {/* <a href="#services">Services</a> */}
//               </li>

//               </NavLink>

//               <NavLink to='/about'>
//               <li className="py-4">
//               <NavLink to="#about">About</NavLink>
//                 {/* <a href="#about">About</a> */}
//               </li>

//               </NavLink>
//               <li className="py-4">
//               <NavLink to="#contact">Contact</NavLink>
//                 {/* <a href="#contact">Contact</a> */}
//               </li>
//             </ul>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// };

// export default Navbar;
































// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// import animationData from '../Components/Animation.json'; // Path to your Lottie animation JSON file
// import starAnimationData from '../Components/Animation.json'; // Path to your twinkling star animation JSON file
// import homepage from '../../public/Images/homepage.png'; // Path to your homepage background image

// const Navbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 4000); // Display star animation for 4 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <motion.div
//           initial={{ y: "100vh" }}
//           animate={{ y: 0 }}
//           transition={{ duration: 1, type: "spring", stiffness: 100 }}
//           className="flex items-center justify-center h-screen bg-gray-800"
//         >
//           <Lottie animationData={starAnimationData} className="w-64 h-64" />
//         </motion.div>
//       ) : (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="relative"
//           style={{ height: "80vh", color: "white" }}
//         >
//           <motion.div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${homepage})` }}
//             initial={{ x: "-100vw" }}
//             animate={{ x: 0 }}
//             transition={{ type: "spring", stiffness: 120 }}
//           >
//             <div className="absolute inset-0 bg-purple-700 opacity-0"></div>
//           </motion.div>

//           <motion.header
//             className="relative flex items-center justify-between p-4"
//             initial={{ y: "-100vh" }}
//             animate={{ y: 0 }}
//             transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
//           >
//             <div className="text-2xl font-bold">
//               <img
//                 src="https://img.freepik.com/premium-photo/gold-symbol-with-black-gold-symbol-it_931553-271038.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
//                 alt="Logo"
//                 className="w-24 rounded-full"
//               />
//             </div>

//             <button onClick={toggleNav} className="text-4xl -mt-10">
//               &#9776;
//             </button>

//             <motion.nav
//               className={`fixed top-0 right-0 w-2/3 md:w-1/3 bg-purple-700 opacity-50 h-full transform transition-transform duration-300 ${
//                 isNavOpen ? "translate-x-0" : "translate-x-full"
//               }`}
//             >
//               <button
//                 onClick={toggleNav}
//                 className="absolute top-4 right-4 text-5xl mt-6"
//               >
//                 &times;
//               </button>
//               <ul className="flex flex-col items-center mt-16 font-bold text-xl">
//                 <li className="py-4">
//                   <a href="#home">Home</a>
//                 </li>
//                 <li className="py-4">
//                   <a href="#services">Services</a>
//                 </li>
//                 <li className="py-4">
//                   <a href="#about">About</a>
//                 </li>
//                 <li className="py-4">
//                   <a href="#contact">Contact</a>
//                 </li>
//               </ul>
//             </motion.nav>
//           </motion.header>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default Navbar;
