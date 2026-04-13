import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTelegram,
} from 'react-icons/fa';

import creditCardsImg from '../../assets/website/credit-cards.webp';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pb-8 pt-12 text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold uppercase">Coders Cafe</h2>
            <p className="max-w-300px text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam adipisci magni est facere
              qui expedita et! Iste impedit, enim magni quod nulla dignissimos magnam similique?
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +88-01968-569447
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt />
                Chattogram, Bangladesh.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Quick Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Follow us</h2>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl duration-300 hover:scale-105" />
              <FaInstagram className="text-3xl duration-300 hover:scale-105" />
              <FaTelegram className="text-3xl duration-300 hover:scale-105" />
              <FaGoogle className="text-3xl duration-300 hover:scale-105" />
            </div>
            <div>
              <h2 className="mb-2 text-xl font-semibold">Payment Methods</h2>
              <img src={creditCardsImg} alt="credit cards" className="w-[80%]" />
            </div>
          </div>
        </div>
        <p className="mt-8 border-t-2 pt-8 text-center text-white">
          Copyright &copy; 2024 Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
