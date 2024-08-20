"use client"; // If using hooks

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Footer Content */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">FOOTER CONTENT</h3>
            <p className="text-gray-400">
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Link 1</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Link 2</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Link 3</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Link 4</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Link 1</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Link 2</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Link 3</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Link 4</a></li>
            </ul>
          </div>

          {/* Sign Up */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-white font-bold text-lg mb-4">Register for free</h3>
            <a href="#" className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
              SIGN UP!
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="https://telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faTelegram} size="2x" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Copyright: YourCompany.com
        </div>
      </div>
    </footer>
  );
}
