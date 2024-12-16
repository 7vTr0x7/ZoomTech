import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      _id: "1",
      name: "Alice Johnson",
      designation: "Software Engineer",
      company: "TechCorp",
      review:
        "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
      imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      _id: "2",
      name: "Bob Smith",
      designation: "Product Manager",
      company: "InnovateX",
      review: "A challenging but rewarding experience.",
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      _id: "3",
      name: "Catherine Lee",
      designation: "UX Designer",
      company: "Designify",
      review: "Creativity is encouraged, and feedback is constructive.",
      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      _id: "4",
      name: "Daniel Brown",
      designation: "Data Scientist",
      company: "AnalyticsPro",
      review: "Excellent opportunities for growth and learning.",
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      _id: "5",
      name: "Evelyn Garcia",
      designation: "Marketing Specialist",
      company: "BrandWise",
      review: "Fantastic workplace with a clear vision and values.",
      imageUrl: "https://randomuser.me/api/portraits/women/5.jpg",
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
    <div className="my-8 px-6 py-8 md:px-20">
      {reviews?.length > 0 &&
        [reviews[currentPage - 1]].map((review) => (
          <div key={review._id}>
            <p className="text-lg md:text-2xl font-semibold text-center">{`“${review.review}”`}</p>
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center gap-4 mb-6 md:mb-0">
                <img
                  alt={review.name}
                  src={review.imageUrl}
                  className="h-14 w-14 md:h-12 md:w-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-base">{review.name}</p>
                  <p className="text-[#878C91] text-sm">
                    {review.designation} at {review.company}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center text-lg select-none">
                <button
                  className="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
                  onClick={() => handlePrevPage(currentPage)}
                  aria-label="Previous Review">
                  <FiArrowLeft />
                </button>
                <div className="text-sm font-semibold">
                  <span className="underline">
                    {currentPage < 10 && `0${currentPage}`}
                  </span>
                  <span>/</span>
                  <span className="underline">
                    {reviews.length < 10 && `0${reviews.length}`}
                  </span>
                </div>
                <button
                  className="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
                  onClick={() => handleNextPage(currentPage)}
                  aria-label="Next Review">
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Reviews;
