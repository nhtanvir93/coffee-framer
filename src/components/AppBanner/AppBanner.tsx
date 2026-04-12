import { motion } from 'framer-motion';

import appStoreImg from './../../assets/website/app_store.png';
import playStoreImg from './../../assets/website/play_store.png';
import styles from './AppBanner.module.css';

const AppBanner = () => {
  return (
    <div className="container my-14">
      <div
        className={[
          styles.bannerBackground,
          'rounded-xl sm:flex sm:min-h-[400px] sm:items-center sm:justify-end',
        ].join(' ')}
      >
        <div>
          <div className="mx-auto max-w-xl space-y-6 sm:mx-12">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-center text-2xl font-semibold sm:text-4xl"
            >
              Download the app
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              className="text-center sm:px-20"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tempora, accusantium
              nostrum nam ullam dolor.
            </motion.p>
            <div className="flex items-center justify-center gap-4">
              <motion.a
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <img src={appStoreImg} alt="" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <img src={playStoreImg} alt="" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
