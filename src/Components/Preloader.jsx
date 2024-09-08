// import React, { useState, useEffect } from 'react';
// import './Preloader.css'; // CSS file for styling

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false); // Stop preloader after 10 seconds
//       document.querySelector('.preloader').classList.add('preloader-exit');
//     }, 10000); // 10 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <div className="preloader">
//           <div className="shapes">
//             <div className="shape shape-1"></div>
//             <div className="shape shape-2"></div>
//             <div className="shape shape-3"></div>
//           </div>
//           <p className="loading-text">Loading, please wait...</p>
//         </div>
//       ) : (
//         <div className="home-page">
//           <h1>Welcome to My Website</h1>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;











import React, { useState, useEffect } from 'react';
import './Preloader.css'; // CSS file for styling

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.preloader').classList.add('preloader-exit');
      setTimeout(() => setLoading(false), 1000); // Wait for exit animation to finish
    }, 3000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="preloader">
          <div className="shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <p className="loading-text">Loading, please wait...</p>
        </div>
      ) : (
        <div className="home-page">
          {/* <h1>Welcome to My Website</h1> */}
        </div>
      )}
    </div>
  );
};

export default App;






// import React, { useState, useEffect } from 'react';
// import './Preloader.css'; // CSS file for styling

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false); // Stop preloader after 10 seconds
//       document.querySelector('.preloader').classList.add('preloader-exit');
//     }, 10000); // 10 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <div className="preloader">
//           <div className="shapes">
//             <div className="shape shape-1"></div>
//             <div className="shape shape-2"></div>
//             <div className="shape shape-3"></div>
//           </div>
//           {/* <p className="loading-text">Loading, please wait...</p> */}
//         </div>
//       ) : (
//         <div className="home-page">
//           {/* <h1>Welcome to My Website</h1> */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
