import Link from 'next/link';
import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='contact' className="border-t border-amber-500 text-black dark:text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact Us
          </h3>
          <p className="text-sm">Baku, Azerbaijan</p>
          <p className="text-sm">City, State, ZIP</p>
          <p className="text-sm">
            Email: fuad.beybutov099@gmail.com
          </p>
          <p className="text-sm">Phone: +99450-499-35-11</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Follow Us
          </h3>
          <div className="flex space-x-3">
            <Link
              href="https://www.linkedin.com/in/fuad-beybutov-05934728b/"
              className="w-6 h-6 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferer"
            >
              <FaLinkedin className="w-6 h-6 hover:text-blue-500" />
            </Link>
            <Link
              href="https://wa.me/+994504993511"
              className="w-6 h-6 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferer"
            >
              <FaWhatsapp className="w-6 h-6 hover:text-blue-500" />
            </Link>
            <Link
              href="https://t.me/fuadbeybutov21"
              className="w-6 h-6 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferer"
            >
              <FaTelegram className="w-6 h-6 hover:text-blue-500" />
            </Link>
            <Link
              href="https://github.com/Fuad2199"
              className="w-6 h-6 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferer"
            >
              <FaGithub className="w-6 h-6 hover:text-blue-500" />
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-8 border-t border-gray-500 pt-4 text-center'>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} fuadbeybutov. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
