import Slider from "react-slick";

const benefits = [
  {
    title: "Flexibility",
    description: "Rent for few hours or months",
    img: "📅",
  },
  {
    title: "Great Prices",
    description: "Compare all options for best prices",
    img: "💰",
  },
  {
    title: "Cost Effective",
    description: "Flexible packages as per need",
    img: "📊",
  },
  {
    title: "Convenience",
    description: "Self Pick-Up or Home delivered",
    img: "📊",
  },
];

export default function Benefits() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
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
    <section className="py-12">
      <div className="container mx-auto text-center relative">
        <h2 className="text-3xl font-bold mb-8">Benefits</h2>

        <div className="relative overflow-hidden">
          <Slider {...settings}>
            {benefits.map((benefit, index) => (
              <div key={index} className={`w-full  p-4 flex-shrink-0`}>
                <div className="relative group p-8 h-48 flex flex-col items-center justify-center bg-white shadow-md rounded-lg transition duration-500">
                  <div className="text-6xl mb-4 transition-opacity duration-300">
                    {benefit.img}
                  </div>

                  <h3 className="text-xl font-bold transition-all duration-500">
                    {benefit.title}
                  </h3>
                  <p className="text-lg transition-all duration-500">
                    {benefit.description}
                  </p>

                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg text-white z-10">
                    <h3 className="text-2xl font-bold group-hover:scale-110 transition-transform duration-500">
                      {benefit.title}
                    </h3>
                    <p className="text-lg group-hover:scale-110 transition-transform duration-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
