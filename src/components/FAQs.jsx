import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="text-start m-6 mx-8 text-white my-2 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="bg-purple-600 p-4 flex justify-between items-center">
        <h4>{question}</h4>
        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <p className="bg-purple-600 p-4 mt-[0.05rem]">{answer}</p>}
    </div>
  );
};

const faqs = [
  {
    question: "What is RentRide?",
    answer: "RentRide is a car rental service.",
  },
  {
    question: "Why customers should choose RentRide?",
    answer: "RentRide offers affordable car rentals.",
  },
];

export default function FAQs() {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      <div className="mt-8">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
}
