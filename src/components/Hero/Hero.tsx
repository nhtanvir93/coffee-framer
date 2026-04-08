import CoffeeMainImg from '../../assets/black.png';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={[styles.bgImage, 'min-h-[750px] w-full'].join(' ')}>
      <div className="container">
        {/* Navbar Section */}
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
          {/* Text content section */}
          <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
            <h1 className="text-7xl font-bold leading-tight ml-14">
              Blvck Tumbler
            </h1>
            <div className="relative">
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
            </div>
          </div>
          {/* Hero image section */}
          <div className="relative">
            <img
              src={CoffeeMainImg}
              alt=""
              className="relative z-40 h-[400px] md:h-[700px] img-shadow"
            />
            {/* Orange ring */}
            <div className="h-[180px] w-[180px] absolute top-24 -right-16 border-[20px] border-primary rounded-full z-10"></div>
            {/* Shadow Brand Name */}
            <div className="absolute top-10 left-[350px]">
              <h2 className="text-[100px] text-darkGray/40 leading-none font-bold scale-150 z-[1]">
                Blvck Tumbler
              </h2>
            </div>
          </div>
          {/* Third div section */}
          <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
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
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
