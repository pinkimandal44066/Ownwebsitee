// import React from 'react';

// const ContactPage = () => {
//   return (
//     <div className="min-h-screen">
//       {/* Heading */}
//       <header className="text-center py-8 bg-gray-200">
//         <h1 className="text-4xl font-bold">Find Us</h1>
//       </header>

//       {/* Google Map */}
//       <div className="flex justify-center">
//         <iframe
//           title="Google Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6!2d78.44!3d13.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526d!2sIT%20Company!5e0!3m2!1sen!2sin!4v1600000000"
//           className="w-full h-96"
//           allowFullScreen
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;















import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-[80vh]">
      {/* Heading */}
      <header className="text-center py-8 bg-purple-700 cursor-pointer">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
      </header>

      {/* Google Map */}
      <div className="flex justify-center">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6!2d78.44!3d13.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526d!2sIT%20Company!5e0!3m2!1sen!2sin!4v1600000000"
          className="w-full h-96"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
