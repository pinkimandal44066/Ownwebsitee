import React from "react";
// import './Footer.css';
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-purple-700 text-white py-8 wave-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* <!-- Company Info --> */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Company Name</h3>
              <p className="mb-2">1234eeeeeee ssssssssssss</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@company.com"
                  className="text-blue-400 hover:underline"
                >
                  abc@company.com
                </a>
              </p>
            </div>

            {/* <!-- Quick Links --> */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul>
              <NavLink to='/' >
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                </NavLink>

                <NavLink to='/about'>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                </NavLink>
                <NavLink to='/service'>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                </NavLink>

                <NavLink to='/contact'>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                </NavLink>
              </ul>
            </div>

            {/* <!-- Follow Us --> */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0  ">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4 text-white">
                <a href="#" className=" hover:text-white ">
                  <i className="fab fa-facebook-f">facebook</i>
                </a>
                <a href="#" className=" hover:text-white">
                  <i className="fab fa-twitter">twitter</i>
                </a>
                <a href="#" className=" hover:text-white">
                  {/* <i className="fab fa-linkedin-in"> linkedin-in</i> */}
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  {/* <i className="fab fa-instagram">instagram</i> */}
                </a>
              </div>
            </div>

            {/* <!-- Newsletter Signup --> */}
            <div className="w-full md:w-1/4">
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <form>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full p-2 mb-2 rounded-lg text-gray-800"
                />
                <button
                  type="submit"
                  className="w-full bg-black  hover:bg-white  text-white  hover:text-black   py-2 rounded-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;