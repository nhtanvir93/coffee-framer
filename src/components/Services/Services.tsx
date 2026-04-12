import { motion, Variants } from 'framer-motion';

import Coffee1 from '../../assets/coffee/coffee1.png';
import Coffee3 from '../../assets/coffee/coffee3.png';

const serviceData = [
  {
    id: 1,
    title: 'Black Coffee',
    image: Coffee1,
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    title: 'Hot Coffee',
    image: Coffee3,
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    title: 'Cold Coffee',
    image: Coffee1,
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const cardVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 10,
      ease: 'easeInOut',
    },
  },
};

const containerVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      <div className="mx-auto max-w-lg space-y-2 text-center">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty Coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, et eaque? Laboriosam
          cumque asperiores doloremque temporibus, labore incidunt quis dignissimos.
        </motion.p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
      >
        {serviceData.map((service) => (
          <motion.div
            variants={cardVariants}
            key={`service-${service.id}`}
            className="space-y-6 p-4 text-center"
          >
            <img
              className="image-shadow2 mx-auto max-w-[200px] cursor-pointer duration-300 hover:scale-110"
              src={service.image}
              alt=""
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-primary">{service.title}</h2>
              <p className="text-darkGray">{service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
