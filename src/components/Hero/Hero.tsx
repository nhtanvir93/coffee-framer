import { AnimatePresence, motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';

import CoffeeMainImg from '../../assets/black.png';
import Navbar from '../Navbar/Navbar';

import styles from './Hero.module.css';

const Hero = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <section
      className={[
        styles.bgImage,
        'min-h-[750px] w-full overflow-x-hidden',
      ].join(' ')}
    >
      <div className="container">
        <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] overflow-x-hidden">
          {/* Text content section */}
          <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
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
                delay: 1,
                stiffness: 100,
                damping: 10,
              }}
              className="text-7xl font-bold leading-tight ml-14"
            >
              Blvck Tumbler
            </motion.h1>
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: 'spring',
                delay: 1.2,
                stiffness: 100,
                damping: 10,
              }}
              className="relative"
            >
              <div className="relative z-10 space-y-4">
                <h2 className="text-2xl">Black Lifestyle Lovers,</h2>
                <h2 className="text-sm opacity-40 leading-loose">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis nulla earum quia veritatis aut. Odio nesciunt hic
                  fugit fugiat, vero excepturi dolorum quia incidunt molestiae
                  nobis molestias consequuntur nam fuga.
                </h2>
              </div>
              <div className="absolute -top-6 -left-10 w-[250px] h-[200px] bg-gray-700/25"></div>
            </motion.div>
          </div>
          {/* Hero image section */}
          <div className="relative">
            <motion.img
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: 'spring',
                delay: 0.4,
                stiffness: 100,
                damping: 12,
              }}
              src={CoffeeMainImg}
              alt=""
              className="relative z-40 h-[400px] md:h-[700px] img-shadow"
            />
            {/* Orange ring */}
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: 'spring',
                delay: 0.8,
                stiffness: 100,
                damping: 10,
              }}
              className="h-[180px] w-[180px] absolute top-24 -right-16 border-[20px] border-primary rounded-full z-10"
            ></motion.div>
            {/* Shadow Brand Name */}
            <motion.div
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                type: 'spring',
                delay: 0.8,
                stiffness: 100,
                damping: 10,
              }}
              className="absolute top-10 left-[350px]"
            >
              <h2 className="text-[100px] text-darkGray/40 leading-none font-bold scale-150 z-[1]">
                Blvck Tumbler
              </h2>
            </motion.div>
          </div>
          {/* Third div section */}
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: 'spring',
              delay: 1.2,
              stiffness: 100,
              damping: 10,
            }}
            className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
          >
            <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
              Blvck Tumbler
            </h1>
            <div className="relative">
              <div className="relative z-10 space-y-4">
                <h2 className="text-2xl">Black Thumbler</h2>
                <h2 className="text-sm opacity-40 leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, ipsum quaerat vel minima maxime eius.
                </h2>
              </div>
              <div className="absolute -top-6 -right-10 w-[250px] h-[200px] bg-darkGray/50"></div>
            </div>
          </motion.div>
          {/* Sidebar menu section */}
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
                className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
