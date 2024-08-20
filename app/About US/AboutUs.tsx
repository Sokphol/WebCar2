
"use client";

import Image from 'next/image';
import car1  from '../assets/car1.png';

export default function About() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            We are passionate about what we do
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our team is dedicated to providing the best service and creating innovative solutions that empower businesses to grow.
          </p>
        </div>

        <div className="mt-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Our Story
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Founded in 2021, our company has grown from a small team of passionate individuals to a thriving organization with a global reach. Our mission is to deliver exceptional products and services that help businesses succeed.
              </p>

              <p className="mt-3 text-lg text-gray-500">
                We believe in the power of collaboration, innovation, and dedication. Our team works tirelessly to create solutions that are not only effective but also impactful.
              </p>
            </div>

            <div className="mt-10 lg:mt-0">
              <Image
                src={car1}
                alt="Our Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
