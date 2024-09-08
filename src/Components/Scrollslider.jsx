// import React from "react";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const testimonialData = [
//   {
//     id: 1,
//     name: "Samuel",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/101/101",
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/102/102",
//   },
//   {
//     id: 3,
//     name: "Smith",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/103/103",
//   },
// ];

// const Testimonial = () => {
//   var settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     responsive: [
//       {
//         breakpoint: 10000,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="py-10">
//       <div className="container">
//         {/* Header section */}
//         <div className="text-center mb-20 max-w-[400px] mx-auto">
//           <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
//             Testimonial
//           </p>
//           <h1 className="text-3xl font-bold">Testimonial</h1>
//           <p className="text-xs text-gray-400">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
//             nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
//             quam! Nulla?
//           </p>
//         </div>

//         {/* Testimonial section */}
//         <div className="grid grid-cols-1 max-w-[800px] mx-auto gap-6">
//           <Slider {...settings}>
//             {testimonialData.map(({ id, name, text, img }) => {
//               return (
//                 <div key={id} className="my-6">
//                   <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
//                     <img
//                       src={img}
//                       alt={name}
//                       className="rounded-full block mx-auto"
//                     />
//                     <h1 className="text-xl font-bold">{name}</h1>
//                     <p className="text-gray-500 text-sm">{text}</p>
//                     <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
//                       ,,
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;





// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';




// const testimonialData = [
//   {
//     id: 1,
//     name: "Samuel",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/101/101",
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/102/102",
//   },
//   {
//     id: 3,
//     name: "Smith",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/103/103",
//   },
// ];
// const Services = () => {



//   var settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     responsive: [
//       {
//         breakpoint: 10000,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,  // Animation duration
//       once: false,     // Animation will happen every time the element comes into view
//     });
//   }, []);

//   return (

//     <>
//     <div data-aos="zoom-in" className="text-center mb-20 max-w-[400px] mx-auto">
//       <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
//         Our Services
//       </p>
//       <h1 className="text-3xl font-bold">Empowering Your Business with Cutting-Edge IT Solutions</h1>
//       <p className="text-xs text-gray-400">
//         We offer a range of innovative services, from web development and cloud integration
//         to cybersecurity and IT consulting. Our expert team is dedicated to helping your business
//         achieve technological excellence and stay ahead in the digital landscape.
//       </p>
//     </div>


// <div className="grid grid-cols-1 max-w-[800px] mx-auto gap-6 mb-10">
// <Slider {...settings}>
//   {testimonialData.map(({ id, name, text, img }) => {
//     return (
//       <div key={id} className="my-6">
//         <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
//           <img
//             src={img}
//             alt={name}
//             className="rounded-full block mx-auto"
//           />
//           <h1 className="text-xl font-bold">{name}</h1>
//           <p className="text-gray-500 text-sm">{text}</p>
//           <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
//             ,,
//           </p>
//         </div>
//       </div>
//     );
//   })}
// </Slider>
// </div>

// </>
//   );
// };

// export default Services;












import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Scrollslider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: false,     // Animation will happen every time the element comes into view
    });
  }, []);

  return (
    <>
      <div data-aos="zoom-in" className="text-center mb-20 max-w-[400px] mx-auto">
        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Our Services
        </p>
        <h1 className="text-3xl font-bold">
          Empowering Your Business with Cutting-Edge IT Solutions
        </h1>
        <p className="text-xs text-gray-400">
          We offer a range of innovative services, from web development and cloud integration
          to cybersecurity and IT consulting. Our expert team is dedicated to helping your business
          achieve technological excellence and stay ahead in the digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 max-w-[800px] mx-auto gap-6 mb-10">
        <Slider {...settings}>
          {testimonialData.map(({ id, name, text, img }) => (
            <div key={id} className="my-6">
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
              >
                <img
                  src={img}
                  alt={name}
                  className="rounded-full block mx-auto"
                />
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="text-gray-500 text-sm">{text}</p>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                  ,,
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default  Scrollslider;
