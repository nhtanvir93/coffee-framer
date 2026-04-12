import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AnimatePresence, motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <motion.h1
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: 'spring',
              delay: 0.2,
              stiffness: 100,
              damping: 10,
            }}
            className="uppercase font-semibold text-2xl"
          >
            <span className="text-lightOrange">Coders</span> Cafe
          </motion.h1>
          {/* Hamburger section */}
          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: 'spring',
              delay: 0.2,
              stiffness: 100,
              damping: 10,
            }}
            onClick={() => setShowSidebar((prev) => !prev)}
            className="z-20"
          >
            {showSidebar ? (
              <IoClose className="text-4xl cursor-pointer" />
            ) : (
              <GiHamburgerMenu className="text-3xl cursor-pointer" />
            )}
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
            }}
            className="absolute top-0 right-0 w-[140px] h-screen bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10"
          >
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="w-[1px] h-[70px] bg-white"></div>
                <div className="p-2 rounded-full border border-white cursor-pointer">
                  <FaFacebookF className="text-2xl text-white" />
                </div>
                <div className="p-2 rounded-full border border-white cursor-pointer">
                  <FaTwitter className="text-2xl text-white" />
                </div>
                <div className="p-2 rounded-full border border-white cursor-pointer">
                  <FaInstagram className="text-2xl text-white" />
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
