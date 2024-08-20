
"use client";

import MainCard from "./Card";
import car1 from '../assets/car5.png';
import car2 from '../assets/white-car.png';
import car3 from '../assets/car.png';
import car4 from '../assets/car1.png';

const cards = [
  {
    title: "Supper Car",
    content: "Make in Cambodia.",
    imgSrc: '../assets/car1.png'
  },
  {
    title: "Auto Car",
    content: "Make in china",
    imgSrc: {car2}
  },
  {
    title: "Card 3",
    content: "This is the third card.",
    imgSrc: {car3}
  },
  {
    title: "Card 4",
    content: "This is the fourth card.",
    imgSrc: {car4}
  }
];

export default function Card() {
  return (
    <div className="p-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {cards.map((card, index) => (
          <MainCard
            key={index}
            title={card.title}
            content={card.content}
            imgSrc={card.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
