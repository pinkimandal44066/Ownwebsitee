import React from "react"; // Keep this import

function App() {
  // Remove the useEffect block
  // useEffect(() => {
  //   Particles.init({
  //     selector: "#particles-js",
  //     maxParticles: 80,
  //     color: "#ffffff",
  //     connectParticles: true,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         options: {
  //           maxParticles: 50,
  //         },
  //       },
  //       {
  //         breakpoint: 425,
  //         options: {
  //           maxParticles: 30,
  //         },
  //       },
  //     ],
  //   });
  // }, []);

  return (
    <div className="relative h-screen">
      {/* Remove the div with id="particles-js" */}
      {/* <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0"></div> */}
      <header className="relative z-10 text-center text-white py-24">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg mt-4">
          We provide top-notch software solutions tailored to your business needs.
        </p>
      </header>
      <section className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
          <p>
            Custom web applications and websites with modern designs and robust
            functionality.
          </p>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Mobile App Development</h2>
          <p>
            Feature-rich mobile applications for both Android and iOS platforms.
          </p>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Cloud Solutions</h2>
          <p>
            Secure and scalable cloud infrastructure for your business operations.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
