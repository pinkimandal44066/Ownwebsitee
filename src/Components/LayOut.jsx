import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import ScrollToTop from "./ScrollToTop";
import Footer from './Footer';
// import ScrollToTop from "./ScrollToTop";
// import Navbar from "./Navbar";
// import Footer from './Footer';

const LayOut = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading === true ? (
        <div className=" w-full h-full absolute  flex justify-center items-center">
          <div className="loader  "></div>
        </div>
      ) : (
        <>
         <Navbar />
         <ScrollToTop />

          {/* <Navbar /> */}
          {/* <ScrollToTop /> */}
          <Outlet />
          <Footer />
          {/* <Footer /> */}
         
        </>
      )}
    </div>
  );
};

export default LayOut;
