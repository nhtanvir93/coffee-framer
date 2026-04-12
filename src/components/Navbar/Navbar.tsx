import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <h1 className="uppercase font-semibold text-2xl">
            <span className="text-lightOrange">Coders</span> Cafe
          </h1>
          {/* Hamburger section */}
          <div>
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
