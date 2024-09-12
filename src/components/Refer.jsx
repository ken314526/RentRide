import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Refer() {
  return (
    <section className="bg-purple-700 m-5 rounded-lg py-12 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">
          Refer your friends and be a part of RentRide
        </h2>
        <p className="my-4">
          Download the App for Exclusive Deals and Ease of Booking
        </p>
        <div className="mt-6 flex justify-center text-3xl space-x-4">
          <button className="px-4 py-2 rounded">
            <FaGooglePlay />
          </button>
          <button className="px-4 py-2 rounded">
            <FaApple />
          </button>
        </div>
      </div>
    </section>
  );
}
