import { useState } from "react";

const cars = [
  {
    name: "Baleno",
    price: "₹75/hr",
    image: "/Imgs/img1.png",
  },
  {
    name: "BMW",
    price: "₹299/hr",
    image: "/Imgs/img2.png",
  },
  {
    name: "Brezza",
    price: "₹109/hr",
    image: "/Imgs/img3.png",
  },
  {
    name: "Celerio",
    price: "₹62/hr",
    image: "/Imgs/img4.png",
  },
  {
    name: "Ciaz",
    price: "₹79/hr",
    image: "/Imgs/img5.png",
  },
  {
    name: "Dzire",
    price: "₹69/hr",
    image: "/Imgs/img6.png",
  },
  {
    name: "Ertiga",
    price: "₹124/hr",
    image: "/Imgs/img7.png",
  },
  {
    name: "Honda City",
    price: "₹79/hr",
    image: "/Imgs/img8.png",
  },
  {
    name: "Hyundai Venue",
    price: "₹119/hr",
    image: "/Imgs/img9.png",
  },
  {
    name: "Innova Crysta",
    price: "₹199/hr",
    image: "/Imgs/img10.png",
  },
  {
    name: "KUV",
    price: "₹69/hr",
    image: "/Imgs/img11.png",
  },
  {
    name: "Kwid",
    price: "₹62/hr",
    image: "/Imgs/img12.png",
  },
  {
    name: "Thar",
    price: "₹219/hr",
    image: "/Imgs/img13.png",
  },
  {
    name: "Nissan Magnite",
    price: "₹109/hr",
    image: "/Imgs/img14.png",
  },
  {
    name: "Spresso",
    price: "₹62/hr",
    image: "/Imgs/img15.png",
  },
  {
    name: "Swift",
    price: "₹74/hr",
    image: "/Imgs/img16.png",
  },
  {
    name: "TATA Nexon",
    price: "₹99/hr",
    image: "/Imgs/img17.png",
  },
  {
    name: "Triber",
    price: "₹124/hr",
    image: "/Imgs/img18.png",
  },
  {
    name: "XUV 500",
    price: "₹199/hr",
    image: "/Imgs/img19.png",
  },
];

export default function ChooseCars() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cars.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cars.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="controls-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {cars.map((value, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <img
              src={`${value.image}`}
              className="block w-fit h-fit"
              alt={value.name}
            />
            <div className="absolute text-xl font-bold bottom-0 left-0 p-2">
              <p>{value.price}</p>
              <p>{value.name}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
