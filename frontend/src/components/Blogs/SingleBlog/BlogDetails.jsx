import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FooterShare from "./FooterShare";

const BlogDetails = () => {
  const location = useLocation();
  const { post } = location.state;
  const [activeTitle, setActiveTitle] = useState("");
  const contentRefs = useRef([]);

  const handleScroll = (index) => {
    contentRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveTitle(post.content[index].title);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTitle(entry.target.dataset.title);
          }
        });
      },
      { threshold: 0.6 }
    );

    contentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      contentRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref); // Only unobserve valid elements
      });
    };
  }, []);

  return (
    <div className="p-4">
      {/* Image Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="md:col-span-2 relative">
          <img
            alt={post.title}
            src={post.image}
            className="h-full w-full rounded-lg object-cover"
          />
          <div className="absolute bottom-5 left-5 text-white p-4 rounded-lg">
            <h2 className="text-lg md:text-2xl font-bold">{post.title}</h2>
            <p className="mt-2 text-xs md:text-sm">
              {post.date} • {post.minutesToRead} min read
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="col-span-1">
          <p className="text-lg md:text-xl font-semibold">In this Article</p>
          <div className="my-4 md:my-7 space-y-3 md:space-y-5">
            {post.content.map((item, index) => (
              <p
                key={item.title}
                className={`cursor-pointer text-sm md:text-base ${
                  activeTitle === item.title
                    ? "text-yellow-500 border-l-4 border-yellow-500 pl-2"
                    : ""
                }`}
                onClick={() => handleScroll(index)}>
                {item.title}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 flex flex-col gap-4 border-b-2 pb-6">
          {post.content.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (contentRefs.current[index] = el)}
              data-title={item.title}>
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base">{item.paragraph}</p>
            </div>
          ))}
          <FooterShare />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
