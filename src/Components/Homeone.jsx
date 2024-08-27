// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';


// import image1 from '../../public/Images/imgg.jpg';
// import image2 from '../../public/Images/imgg.jpg';
// import image3 from '../../public/Images/imgg.jpg';

// const images = [
//   { src: image1, text: 'At [Your Company Name], we deliver cutting-edge IT solutions that drive innovation and efficiency, making us your trusted partner in digital transformation.' },
//   { src: image2, text: 'At [Your Company Name], we provide innovative IT solutions that empower businesses to excel in the digital landscape.' },
//   { src: image3, text: 'Integrity, innovation, and customer satisfaction guide us in every project we undertake.' },
// ];

// const HeroSection = () => {
//   useEffect(() => {
//     const timeline = gsap.timeline();
    
//     timeline
//       .from('.image-container', {
//         duration: 0.8,
//         // opacity: 0,
//         scale: 0.5,
//         stagger: 0.2,
//         ease: 'power3.out',
//       })
//       .to('.image-container', {
//         duration: 0.5,
//         scale: 1,
//         ease: 'bounce.out',
//         stagger: 0.2,
//       })
//       .to('.image-container img', {
//         duration: 0.5,
//         opacity: 1,
//         scale: 1,
//         ease: 'power2.out',
//         stagger: 0.2,
//       }, '-=0.5'); 
//   }, []);

//   const handleImageClick = (index) => {
//     alert(`Image ${index + 1} clicked!`); 
//   };

//   return (
//     <section className="hero bg-white py-10">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold text-center mb-8">Transforming Ideas into Software</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {images.map((image, index) => (
//             <div key={index} className="image-container flex flex-col items-center">
//               <img
//                 src={image.src}
//                 alt={`Image ${index + 1}`}
//                 className="w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-xl duration-300 opacity-0" // शुरुआत में ओपेसिटी 0
//                 onClick={() => handleImageClick(index)} 
//               />
//               <p className="mt-4 text-center text-lg font-semibold">{image.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


















import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import image1 from '../../public/Images/imgg.jpg';
import image2 from '../../public/Images/imgg.jpg';
import image3 from '../../public/Images/imgg.jpg';

const images = [
  { src: image1, text: 'At [Your Company Name], we deliver cutting-edge IT solutions that drive innovation and efficiency, making us your trusted partner in digital transformation.' },
  { src: image2, text: 'At [Your Company Name], we provide innovative IT solutions that empower businesses to excel in the digital landscape.' },
  { src: image3, text: 'Integrity, innovation, and customer satisfaction guide us in every project we undertake.' },
];

const HeroSection = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    
    timeline
      .from('.image-container', {
        duration: 0.8,
        scale: 0.5,
        stagger: 0.2,
        ease: 'power3.out',
      })
      .to('.image-container', {
        duration: 0.5,
        scale: 1,
        ease: 'bounce.out',
        stagger: 0.2,
      })
      .to('.image-container img', {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        ease: 'power2.out',
        stagger: 0.2,
      }, '-=0.5'); 
  }, []);

  const handleImageClick = (index) => {
    alert(`Image ${index + 1} clicked!`); 
  };

  return (
    <section className="hero bg-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Transforming Ideas into Software</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="image-container flex flex-col items-center">
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-xl duration-300 opacity-0"
                onClick={() => handleImageClick(index)} 
              />
              <p className="mt-4 text-center text-lg font-semibold">{image.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
