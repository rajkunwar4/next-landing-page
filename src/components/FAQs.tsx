"use client";

import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      key={question}
      className="py-7 border-b border-white/30 "
    >
      <div className="flex justify-between items-center ">
        <h3 className=" font-bold flex-1 text-lg  sm:text-xl ">{question}</h3>
        <div onClick={() => setOpen(!open)} className="">
          {open ? <MinusIcon /> : <PlusIcon />}
        </div>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } text-white/60 mt-4 sm:text-xl `}
      >
        {answer}
      </div>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white  py-[72px] sm:py-[96px] bg-gradient-to-b from-[#5D2CA8] to-black ">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter text-center ">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-4xl mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
