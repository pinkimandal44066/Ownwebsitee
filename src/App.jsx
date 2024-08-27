









// import React, { useState } from 'react';
// import './App.css'; // Ensure this imports Tailwind styles

// function App() {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <div className="relative" style={{ height: '80vh', color: 'white' }}>
//       {/* Background Image */}
//       <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid)' }}>
//         {/* Overlay for better text visibility */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//       </div>

//       <header className="relative flex items-center justify-between p-4">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <img src="https://img.freepik.com/premium-photo/gold-symbol-with-black-gold-symbol-it_931553-271038.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid" 
//           alt="Logo" className="w-24 rounded-full mt-3" />
//         </div>

//         {/* Hamburger Menu */}
//         <button onClick={toggleNav} className="text-4xl">
//           &#9776;
//         </button>

//         {/* Side Menu for Small Screens */}
//         <nav className={`fixed top-0 right-0 w-2/3 md:w-1/3 bg-gray-900 h-full transform
//            transition-transform duration-300 ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} `}>
//           <button onClick={toggleNav} className="absolute top-4 right-4 text-5xl mt-6">
//             &times;
//           </button>
//           <ul className="flex flex-col items-center mt-16">
//             <li className="py-4"><a href="#home">Home</a></li>
//             <li className="py-4"><a href="#services">Services</a></li>
//             <li className="py-4"><a href="#about">About</a></li>
//             <li className="py-4"><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default App;




import React from 'react'
import Navbar from './Components/Navbar'
import Heading from './Components/Heading';
import Homeone from './Components/Homeone'
import Hometwo from './Components/Hometwo'
import Homethree from './Components/Homethree';
const App = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <Homeone />
      <Hometwo />
      {/* <Homethree /> */}
     
    </div>
  )
}

export default App
