import { motion } from 'framer-motion';

import CoffeeMainImg from '../../assets/black.png';
import Navbar from '../Navbar/Navbar';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={[styles.bgImage, 'min-h-[750px] w-full'].join(' ')}>
      <div className="container">
        <Navbar />
        {/* Hero Section */}
        <div className="grid min-h-[850px] grid-cols-1 place-items-center overflow-x-hidden md:grid-cols-2 lg:grid-cols-3">
          {/* Text content section */}
          <div className="mt-[100px] space-y-28 p-4 text-lightOrange md:mt-0">
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
              className="ml-14 text-7xl font-bold leading-tight"
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
                <h2 className="text-sm leading-loose opacity-40">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis nulla earum quia
                  veritatis aut. Odio nesciunt hic fugit fugiat, vero excepturi dolorum quia
                  incidunt molestiae nobis molestias consequuntur nam fuga.
                </h2>
              </div>
              <div className="absolute -left-10 -top-6 h-[200px] w-[250px] bg-gray-700/25"></div>
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
              className="img-shadow relative z-40 h-[400px] md:h-[700px]"
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
              className="absolute -right-16 top-24 z-10 h-[180px] w-[180px] rounded-full border-[20px] border-primary"
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
              className="absolute left-[350px] top-10"
            >
              <h2 className="z-[1] scale-150 text-[100px] font-bold leading-none text-darkGray/40">
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
            className="mt-[100px] space-y-28 p-4 text-lightOrange md:mt-0"
          >
            <h1 className="ml-14 text-7xl font-bold leading-tight opacity-0">Blvck Tumbler</h1>
            <div className="relative">
              <div className="relative z-10 space-y-4">
                <h2 className="text-2xl">Black Thumbler</h2>
                <h2 className="text-sm leading-loose opacity-40">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsum quaerat vel
                  minima maxime eius.
                </h2>
              </div>
              <div className="absolute -right-10 -top-6 h-[200px] w-[250px] bg-darkGray/50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
