



import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




const teamData = [
    {
      id: 1,
      name: "ABCDF",
      designation: "Frontend Developer",
      img: "https://picsum.photos/200/200",
    },
    {
      id: 2,
      name: "EFGHI",
      designation: "UI/UX Designer",
      img: "https://picsum.photos/201/201",
    },
    {
      id: 3,
      name: "JHLM ",
      designation: "Backend Developer",
      img: "https://picsum.photos/202/202",
    },
    {
      id: 4,
      name: "NOPQ",
      designation: "Project Manager",
      img: "https://picsum.photos/203/203",
    },

    
  ];
const OurTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,     
    });
  }, []);

  return (

    <>
    <div data-aos="fade-up" className="text-center mb-20 max-w-[400px] mx-auto">
      <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        Our Team
      </p>
      <h1 className="text-3xl font-bold">Meet Our Expert Team</h1>
      <p className="text-xs text-gray-400">
        Our dedicated team of professionals is committed to delivering cutting-edge solutions
        that drive your business forward. With expertise in various fields, we work together to achieve
        excellence and innovation.
      </p>
    </div>




    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
          {teamData.map(({ id, name, designation, img }) => (
            <div
              key={id}
              data-aos="fade-up"
            //   data-aos-delay={id * 100}
              data-aos-delay={id * 1000} // Staggered animation delay
              className="flex flex-col items-center text-center"
            >
              <div className="relative group">
                {/* Image */}
                <img
                  src={img}
                  alt={name}
                  className="rounded-full w-40 h-40 object-cover transition-transform transform group-hover:scale-105 duration-300"
                />
                {/* Hover effect */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full">
                  <p className="text-white font-bold text-lg">{name}</p>
                </div>
              </div>
              {/* Name and Designation */}
              <h2 className="mt-4 text-xl font-bold">{name}</h2>
              <p className="text-gray-500 text-sm">{designation}</p>
            </div>
          ))}
        </div>
    
    

    </>
  );
};

export default OurTeam;



