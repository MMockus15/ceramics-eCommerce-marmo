import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8 absolute bottom-0 w-full">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">About us</h5>
            <p className="mb-4">
              We're a group of passionate ceramic artists who want to share our love for pottery with the world. Our mission is to create beautiful and functional ceramics that bring joy to your everyday life.
            </p>
          </div>

          <div className="w-full md:w-1/3 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Contact us</h5>
            <p className="mb-4">
              123 Main Street<br />
              Anytown, USA 12345<br />
              hello@funkyceramics.com<br />
              555-555-5555
            </p>
          </div>

          <div className="w-full md:w-1/3 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Follow us</h5>
            <div className="flex justify-center md:justify-start">
              <a href="https://www.facebook.com/marla.mockus" className="text-white hover:text-gray-500 mx-3">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a> 
              <a href="https://www.instagram.com/_marmo/" className="text-white hover:text-gray-500 mx-3">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://twitter.com/MarlaMockus" className="text-white hover:text-gray-500 mx-3">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 border-t border-gray-500">
          <p className="text-center py-4">
            &copy; 2023 Funky Ceramics. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

