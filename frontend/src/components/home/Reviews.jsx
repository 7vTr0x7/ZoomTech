import React, { useState } from "react";

import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      _id: "1",
      name: "Alice Johnson",
      designation: "Software Engineer",
      company: "TechCorp",
      review:
        "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
      imageUrl: "https://randomuser.me/api/portraits/women/1.jpg", // Replace with Alice's real image URL
    },
    {
      _id: "2",
      name: "Bob Smith",
      designation: "Product Manager",
      company: "InnovateX",
      review: "A challenging but rewarding experience.",
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with Bob's real image URL
    },
    {
      _id: "3",
      name: "Catherine Lee",
      designation: "UX Designer",
      company: "Designify",
      review: "Creativity is encouraged, and feedback is constructive.",
      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg", // Replace with Catherine's real image URL
    },
    {
      _id: "4",
      name: "Daniel Brown",
      designation: "Data Scientist",
      company: "AnalyticsPro",
      review: "Excellent opportunities for growth and learning.",
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg", // Replace with Daniel's real image URL
    },
    {
      _id: "5",
      name: "Evelyn Garcia",
      designation: "Marketing Specialist",
      company: "BrandWise",
      review: "Fantastic workplace with a clear vision and values.",
      imageUrl: "https://randomuser.me/api/portraits/women/5.jpg", // Replace with Evelyn's real image URL
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = (page) => {
    if (page < reviews.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handlePrevPage = (page) => {
    if (reviews.length > 1 && page > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="my-12 py-10 px-20">
      {reviews?.length > 0 &&
        [reviews[currentPage - 1]].map((review) => (
          <div key={review._id}>
            <p className="text-2xl font-semibold">{`“${review.review}”`}</p>
            <div className="mt-12 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img
                  alt={review.name}
                  src={review.imageUrl}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-[#878C91] text-sm">
                    {review.designation} at {review.company}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center text-xl select-none">
                <div
                  className="px-5 py-2 border border-black rounded-3xl hover:bg-black hover:text-white"
                  onClick={() => handlePrevPage(currentPage)}>
                  <FiArrowLeft />
                </div>
                <div>
                  <span className="underline font-semibold text-sm">
                    {currentPage < 10 && `0${currentPage}`}
                  </span>
                  <span>/</span>
                  <span className="underline font-semibold text-sm">
                    {reviews.length < 10 && `0${reviews.length}`}
                  </span>
                </div>
                <div
                  className="px-5 py-2 border border-black rounded-3xl hover:bg-black hover:text-white"
                  onClick={() => handleNextPage(currentPage)}>
                  <FiArrowRight />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Reviews;
