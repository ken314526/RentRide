import { FaStar } from "react-icons/fa";
import Avatar from "./Avatar";

export default function TestimonialCard({ name, review, image, rating }) {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-purple-700 rounded-lg p-6 text-white h-full flex flex-col justify-between items-stretch min-h-[300px]">
      <div className="flex items-center mb-4">
        <Avatar name={name} image={image} />
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="flex-grow">{review}</p>
    </div>
  );
}
