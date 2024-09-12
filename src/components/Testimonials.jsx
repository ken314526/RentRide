import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Customer",
    rating: 5,
    review:
      "Very convenient to use. I use this app for all my renting requirements. Best offers and best deals! Highly recommended.",
  },
  {
    name: "Another Customer",
    rating: 5,
    review:
      "Reasonable charges and smooth app. I liked the immediate response.",
  },
  {
    name: "Other Customer",
    rating: 5,
    review:
      "Amazing app and best platform for rental car requirements. Thank you.",
  },
];

export default function Testimonials() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-carousel p-8">
      <h2 className="text-center text-3xl font-bold mb-8">
        Our Customers Love Us
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <TestimonialCard
              name={testimonial.name}
              image={testimonial.image}
              review={testimonial.review}
              rating={testimonial.rating}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
