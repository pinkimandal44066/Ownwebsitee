
// import React,{useState} from 'react';

// import './Hometwo.css';

// const ImageHoverComponent = () => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);
  
//     const images = [
//       {
//         defaultImg: "https://www.designveloper.com/wp-content/uploads/2024/05/solution-1-saas-development.png",
//         hoverImg: "https://www.designveloper.com/wp-content/uploads/2024/05/solution-2-web-development.png"
//       },
//       {
//         defaultImg: "https://img.freepik.com/free-psd/realistic-monitor-presentation_1310-21.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
//         hoverImg: "https://img.freepik.com/free-psd/computer-screen-blue-background-mock-up_1307-323.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
//       },
//       {
//         defaultImg: "https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
//         hoverImg: "https://img.freepik.com/free-psd/laptop-lateral-view-mock-up_1307-387.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
//       }







      
//     ];
  
//     return (
//       <div className="image-container">
//         {images.map((image, index) => (
//           <div
//             className="image-wrapper"
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             key={index}
//           >
//             <img
//               src={hoveredIndex === index ? image.hoverImg : image.defaultImg}
//               alt={`Image ${index + 1}`}
//               className="image"
//             />
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default ImageHoverComponent;

















import React, { useState } from 'react';

const ImageHoverComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    {
      defaultImg: "https://www.designveloper.com/wp-content/uploads/2024/05/solution-1-saas-development.png",
      hoverImg: "https://www.designveloper.com/wp-content/uploads/2024/05/solution-2-web-development.png"
    },
    {
      defaultImg: "https://img.freepik.com/free-psd/realistic-monitor-presentation_1310-21.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
      hoverImg: "https://img.freepik.com/free-psd/computer-screen-blue-background-mock-up_1307-323.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
    },
    {
      defaultImg: "https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
      hoverImg: "https://img.freepik.com/free-psd/laptop-lateral-view-mock-up_1307-387.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 ">
      {images.map((image, index) => (
        <div
          className="relative w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          key={index}
        >
          <img
            src={hoveredIndex === index ? image.hoverImg : image.defaultImg}
            alt={`Image ${index + 1}`}
            className="w-full h-48 md:h-64 lg:h-72 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageHoverComponent;
