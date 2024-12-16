import React, { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "Why is digital marketing important for my business?",
      answer:
        "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    },
    {
      question:
        "How can digital marketing help improve my website's visibility?",
      answer:
        "Digital marketing improves visibility through SEO, content marketing, and paid advertising strategies that target specific audiences.",
    },
    {
      question:
        "How long does it take to see results from digital marketing efforts?",
      answer:
        "Results can vary, but typically you may see initial improvements within 3-6 months of consistent marketing efforts.",
    },
    {
      question:
        "How do you measure the success of digital marketing campaigns?",
      answer:
        "Success is measured using KPIs such as website traffic, conversion rates, lead generation, and ROI, tracked through analytics tools.",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className=" mx-auto px-20 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Zoom Tech FAQs
            </h1>
            <p className="text-gray-500 mb-6">
              As a leading digital marketing agency, we are dedicated to
              providing comprehensive educational resources and answering
              frequently asked questions to help our clients.
            </p>
            <div className="flex items-center">
              <button className="px-4 py-2 border rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
                More Questions
              </button>
              <a href="#" className="ml-4 text-gray-800 hover:underline">
                Contact Us
              </a>
            </div>
          </div>

          <div className=" border-t border-b ">
            {faqData.map((faq, index) => (
              <div key={index} className="p-6 border-t border-b ">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <span className="text-2xl">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </div>
                {openFAQ === index && (
                  <p className="mt-4 text-gray-500">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
