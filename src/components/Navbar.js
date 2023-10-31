import React from 'react'
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';

 function Navbar() {
  return (
    <>
      <div className='navbar__containter'>
        <nav className="flex flex-row  m-5 w-100  text-white  ">
          <div className='flex flex-grow space-x-24'>
          <div className='bg-custom-background gap-5'></div>
          <button>Home</button>
          <button>Automotive Life</button>
          <button>Design</button>
          <button>Innovation</button>
          <button>Performance</button>
          <button>Modèles</button>
          </div>
          
          <button className='ml-auto'><FontAwesomeIcon icon={faBars} /></button>
        </nav>
      </div>
    </>
  )
}

export default Navbar;

/* <img src='../images/bmw-car-logo-luxury-vehicle-bmw-lovo.jpg' alt='BMW Logo'/> */