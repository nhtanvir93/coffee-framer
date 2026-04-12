import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="absolute left-0 top-0 z-20 w-full pt-10 text-white">
      <div className="container">
        <div className="flex items-center justify-between">
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
            className="text-2xl font-semibold uppercase"
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
              <IoClose className="cursor-pointer text-4xl" />
            ) : (
              <GiHamburgerMenu className="cursor-pointer text-3xl" />
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
            className="absolute right-0 top-0 z-10 h-screen w-[140px] bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm"
          >
            <div className="flex h-full w-full flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="h-[70px] w-[1px] bg-white"></div>
                <div className="cursor-pointer rounded-full border border-white p-2">
                  <FaFacebookF className="text-2xl text-white" />
                </div>
                <div className="cursor-pointer rounded-full border border-white p-2">
                  <FaTwitter className="text-2xl text-white" />
                </div>
                <div className="cursor-pointer rounded-full border border-white p-2">
                  <FaInstagram className="text-2xl text-white" />
                </div>
                <div className="h-[70px] w-[1px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
