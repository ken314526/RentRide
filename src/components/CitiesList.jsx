const cities = [
  [
    "Car Rental In Bangalore",
    "Car Rental In Hyderabad",
    "Car Rental In Mumbai",
  ],
  [
    "Car Rental In Kolkata",
    "Car Rental In Ahmedabad",
    "Car Rental In Bhubaneswar",
  ],
  [
    "Car Rental In Kolkata",
    "Car Rental In Ahmedabad",
    "Car Rental In Bhubaneswar",
  ],
  [
    "Car Rental In Kolkata",
    "Car Rental In Ahmedabad",
    "Car Rental In Bhubaneswar",
  ],
];

export default function CitiesList() {
  return (
    <section className="py-8">
      <div className="bg-gradient-to-r m-2 rounded-lg from-purple-400 to-purple-600 py-8">
        <h2 className="text-white text-center text-3xl font-bold mb-6">
          Available In Cities
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-8 text-white">
            {cities.map((col, index) => (
              <div key={index}>
                {col.map((city, i) => (
                  <p key={i} className="mb-2">
                    {city}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
