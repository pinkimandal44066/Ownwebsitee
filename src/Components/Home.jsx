import React from 'react'

import Heading from './Heading';
import Homeone from './Homeone';
import Hometwo from './Hometwo';
import Homethree from './Homethree';
import Homefour from './Homefour';
import Preloader from './Preloader';

const Home = () => {
  return (
    <>
   <Preloader />
    {/* <Navbar /> */}
 
    <Heading />
    <Homeone />
    <Hometwo />
    <Homefour />
    <Homethree />
    {/* <Contact /> */}
    
    </>
  )
}

export default Home
