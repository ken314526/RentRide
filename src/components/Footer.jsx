import {
  FaApple,
  FaGooglePlay,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const about = [
  {
    text: "Deals",
    href: "/deals",
  },
  {
    text: "Fleet",
    href: "/fleet",
  },
  {
    text: "About Us",
    href: "/about",
  },
  {
    text: "Contact Us",
    href: "/contact",
  },
  {
    text: "Career",
    href: "/career",
  },
];

const features = [
  {
    text: "Blogs",
    href: "/blogs",
  },
  {
    text: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    text: "Terms of Service",
    href: "/terms",
  },
  {
    text: "Cancellation Policy",
    href: "/cancellation-policy",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto  text-lg text-center md:text-left">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4 text-purple-600">RentRide</h1>

          <div className="flex grid-cols-1 md:grid-cols-4 justify-between gap-10">
            <div>
              <div>
                <p className="mb-2 font-bold">Contact</p>
                <p>
                  Email:{" "}
                  <a href="mailto:hello@rentride.app" className="text-black">
                    hello@rentride.app
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+919987933348" className="text-black">
                    +91 0123456789
                  </a>
                </p>
              </div>

              <div className="mt-4">
                <p className="mb-4 font-bold">Follow us</p>
                <div className="flex justify-start space-x-4">
                  <Link
                    to="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-black hover:text-gray-700" />
                  </Link>
                  <Link
                    to="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-black hover:text-gray-700" />
                  </Link>
                  <Link
                    to="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="text-black hover:text-gray-700" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex grid-cols-2 sm:grid-cols-2 w md:grid-cols-4 gap-6 justify-between">
              <div className="flex flex-col items-center">
                <h3 className="font-bold mb-4">About</h3>
                <ul className="space-y-2">
                  {about.map((value, index) => (
                    <li key={index}>
                      <Link href={value.href} className="hover:text-gray-700">
                        {value.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="font-bold mb-4">Features</h3>
                <ul className="space-y-2">
                  {features.map((value, index) => (
                    <li key={index}>
                      <Link href={value.href} className="hover:text-gray-700">
                        {value.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="font-bold mb-4">Install App</h3>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaApple className="text-black text-3xl hover:text-gray-700" />
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGooglePlay className="text-black text-3xl hover:text-gray-700" />
                </a>
              </div>
              <h3 className="font-bold mb-4">Secured Payment Gateway</h3>
              <p className="text-sm">We ensure secure payments.</p>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-4 text-center">
            <p className="text-sm">
              Copyright © 2023 Zep Tepi Technologies Pvt Ltd. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
