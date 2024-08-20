"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import car2 from '../assets/car2.png';

export default function HeroSection() {
  return (
    <section className="relative bg-yellow-500 min-h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Side: Text Content */}
        <div className="max-w-lg space-y-5">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            THE YELLOW BEAST
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-300"
          >
            In publishing and graphic design, Lorem Ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="bg-yellow-400 text-black py-2 px-6 rounded-md font-semibold hover:bg-yellow-500"
          >
            PRE ORDER
          </motion.button>
        </div>

        {/* Right Side: Car Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 md:mt-0"
        >
          <Image
            src={car2} // Replace with the path to your car image
            alt="Yellow Beast Car"
            width={800}
            height={800}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
