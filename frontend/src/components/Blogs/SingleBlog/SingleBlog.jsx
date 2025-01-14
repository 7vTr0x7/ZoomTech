import React from "react";
import Navbar from "../../Navbar";
import Breadcrumb from "../../Breadcrumb";
import ContactForm from "../../ContactUs/ContactForm";
import Posts from "../Posts";
import Footer from "../../Footer";
import BlogDetails from "./BlogDetails";

const SingleBlog = () => {
  const posts = [
    {
      id: 1,
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",

      author: "Jason Francisco",
      authorImge: "https://placehold.co/50",

      date: "August 20, 2022",
      minutesToRead: 5,
      content: [
        {
          title: "Introduction",
          paragraph:
            "Technology has revolutionized the workplace in many ways.",
        },
        {
          title: "Automation",
          paragraph:
            "Automation is taking over repetitive tasks in industries.",
        },
      ],
      image: "https://placehold.co/300x200",
    },
    {
      id: 2,
      category: "Travel",
      title: "Discovering the Hidden Gems of Europe",

      author: "Sophia Martinez",
      authorImge: "https://placehold.co/50",
      date: "September 10, 2022",
      minutesToRead: 7,
      content: [
        {
          title: "Introduction",
          paragraph: "Explore the less-known destinations across Europe.",
        },
        {
          title: "Best Cities",
          paragraph: "Uncover unique cities that deserve your attention.",
        },
      ],
      image: "https://placehold.co/300x200",
    },
    {
      id: 3,
      category: "Health",
      title: "10 Tips for Maintaining a Balanced Lifestyle",

      author: "Emily Johnson",
      authorImge: "https://placehold.co/50",
      date: "July 15, 2023",
      minutesToRead: 4,
      content: [
        {
          title: "Healthy Eating",
          paragraph: "Incorporate whole foods into your daily diet.",
        },
        {
          title: "Exercise",
          paragraph: "Regular physical activity promotes overall wellness.",
        },
      ],
      image: "https://placehold.co/300x200",
    },
  ];
  return (
    <>
      <Navbar />

      <div className="mt-20">
        <div className="py-10 mx-4 md:mx-36">
          <Breadcrumb />
        </div>
        <div className="md:mb-0 mb-10  mx-4 md:mx-36">
          <BlogDetails />
        </div>
        <div className="mb-10  mx-4 md:mx-36">
          <p className="text-xl font-semibold">Related Posts</p>
          <Posts posts={posts} />
        </div>
        <div className="mb-10  mx-4 md:mx-20">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleBlog;
