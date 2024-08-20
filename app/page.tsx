"use client";
import Navbar from "./NavBar/NavBar";
import About from "./About US/AboutUs";
import Footer from "./Footer/Footer";
import HeroSection from "./Hero-Section/Hero_Section";
import Card from "./Card/Index";

export default function Home() {
  return (
     <>
          <Navbar/>
          <HeroSection/>
          <Card/>
          <About/>
          <Footer/>
     </>
  );
}
