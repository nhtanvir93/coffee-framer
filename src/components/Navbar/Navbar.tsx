import React, { Dispatch, SetStateAction } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AnimatePresence, motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const Navbar = ({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}) => {
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
          >
            {showSidebar ? (
              <IoClose className="text-4xl cursor-pointer" />
            ) : (
              <GiHamburgerMenu className="text-3xl cursor-pointer" />
            )}
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
