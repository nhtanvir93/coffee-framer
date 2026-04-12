import { motion } from 'framer-motion';

import worldMap from '../../assets/world-map.png';

const WhereToBuy = () => {
  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-3">
        <div className="space-y-8">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: 'spring',
              stiffness: 100,
              damping: 10,
            }}
            className="font-serif text-4xl font-bold text-darkGray"
          >
            Buy our products from anywhere
          </motion.h2>
          <div className="flex flex-col justify-center gap-4">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                type: 'spring',
                stiffness: 100,
                damping: 10,
              }}
              className="flex items-center gap-4"
            >
              <input type="text" className="input-style w-full lg:w-[150px]" placeholder="Name" />
              <input type="email" placeholder="Email" className="input-style w-full" />
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
                type: 'spring',
                stiffness: 100,
                damping: 10,
              }}
              className="flex items-center gap-4"
            >
              <input type="text" className="input-style w-full" placeholder="Country" />
              <input
                type="text"
                placeholder="Zipcode"
                className="input-style w-full lg:w-[150px]"
              />
            </motion.div>
            <motion.button
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
                type: 'spring',
                stiffness: 100,
                damping: 10,
              }}
              className="primary-btn"
              type="button"
            >
              Order Now
            </motion.button>
          </div>
        </div>
        <div className="col-span-2">
          <motion.img
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 1,
              type: 'spring',
              stiffness: 100,
              damping: 10,
            }}
            src={worldMap}
            alt=""
            className="mx-auto w-full sm:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
