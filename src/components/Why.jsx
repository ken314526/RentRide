import { FaCarAlt, FaCity, FaHandshake } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";

export default function Why() {
  const stats = [
    { icon: <PiUsersThreeFill />, label: "Satisfied Users", value: "100,000+" },
    { icon: <FaCarAlt />, label: "Cars", value: "30,000+" },
    { icon: <FaHandshake />, label: "Service Providers", value: "18" },
    { icon: <FaCity />, label: "Cities", value: "59" },
  ];

  return (
    <section>
      <div className="container mx-auto max-w-screen-xl text-center">
        <h2 className="text-3xl font-bold mb-8">Why RentRide?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 flex flex-col items-center justify-center space-y-4 w-full h-48 shadow-md"
            >
              <div className="text-7xl text-white p-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg">
                {item.icon}
              </div>
              <p className="text-xl font-bold">{item.value}</p>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
