import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactUs/ContactForm";
import blogImage from "../../assets/blogImage.png";
import Breadcrumb from "../../components/Breadcrumb";
import Posts from "../../components/Blogs/Posts";

const Blogs = () => {
   const posts = [
     {
       id: 1,
       category: "Technology",
       title:
         "The Impact of Technology on the Modern Workplace: How Innovation is Reshaping Industries and Job Markets",
       author: "Jason Francisco",
       authorImge: "https://placehold.co/50",
       date: "August 20, 2022",
       minutesToRead: 8,
       content: [
         {
           title: "Introduction: The Digital Revolution",
           paragraph:
             "Technology has revolutionized the workplace, improving efficiency, connectivity, and productivity like never before. From artificial intelligence to cloud computing, businesses are leveraging cutting-edge tools to streamline operations and drive growth.",
         },
         {
           title: "Automation and AI: Transforming Workflows",
           paragraph:
             "Automation and AI-powered solutions are taking over repetitive tasks, allowing employees to focus on more strategic and creative aspects of their work. Industries such as manufacturing, finance, and healthcare are witnessing unprecedented transformations.",
         },
         {
           title: "Remote Work and Collaboration Tools",
           paragraph:
             "The rise of remote work has been accelerated by technology, with video conferencing, project management tools, and cloud storage enabling seamless collaboration across global teams.",
         },
       ],
       image: "https://placehold.co/300x200",
     },
     {
       id: 2,
       category: "Travel",
       title:
         "Discovering the Hidden Gems of Europe: Unveiling Breathtaking Destinations Beyond the Tourist Hotspots",
       author: "Sophia Martinez",
       authorImge: "https://placehold.co/50",
       date: "September 10, 2022",
       minutesToRead: 10,
       content: [
         {
           title: "Introduction: A Journey Off the Beaten Path",
           paragraph:
             "While Paris, Rome, and London are must-visit destinations, Europe is home to countless hidden gems waiting to be explored. From quaint villages to stunning coastal towns, there’s much more to discover.",
         },
         {
           title: "Charming Villages and Underrated Cities",
           paragraph:
             "Explore lesser-known cities like Colmar in France, Český Krumlov in the Czech Republic, and Hallstatt in Austria—destinations that captivate visitors with their charm and history.",
         },
         {
           title: "Nature and Adventure: Exploring Europe’s Landscapes",
           paragraph:
             "Beyond its cities, Europe offers breathtaking landscapes like the fjords of Norway, the Scottish Highlands, and the picturesque Amalfi Coast.",
         },
       ],
       image: "https://placehold.co/300x200",
     },
     {
       id: 3,
       category: "Health",
       title:
         "10 Essential Tips for Maintaining a Balanced and Healthy Lifestyle in Today’s Fast-Paced World",
       author: "Emily Johnson",
       authorImge: "https://placehold.co/50",
       date: "July 15, 2023",
       minutesToRead: 6,
       content: [
         {
           title: "Healthy Eating: Fueling Your Body Right",
           paragraph:
             "Incorporating whole foods, lean proteins, and essential nutrients into your daily diet can significantly enhance your overall well-being and energy levels.",
         },
         {
           title: "Exercise and Fitness: The Key to Longevity",
           paragraph:
             "Regular physical activity promotes cardiovascular health, strengthens muscles, and boosts mental clarity, making it a crucial part of a balanced lifestyle.",
         },
         {
           title: "Mental Well-Being: Managing Stress and Anxiety",
           paragraph:
             "Practicing mindfulness, meditation, and engaging in relaxing activities can help reduce stress and maintain mental peace.",
         },
       ],
       image: "https://placehold.co/300x200",
     },
     {
       id: 4,
       category: "Finance",
       title:
         "How to Save Money and Build Wealth: A Beginner's Guide to Smart Financial Planning",
       author: "Michael Clark",
       authorImge: "https://placehold.co/50",
       date: "June 5, 2023",
       minutesToRead: 7,
       content: [
         {
           title: "Budgeting 101: Understanding Your Finances",
           paragraph:
             "Tracking income and expenses is the foundation of good financial health. Creating a budget helps manage spending and ensures financial stability.",
         },
         {
           title: "Saving Strategies: Growing Your Wealth Over Time",
           paragraph:
             "Learning effective saving techniques, such as the 50/30/20 rule, can help you allocate funds wisely and build long-term wealth.",
         },
         {
           title: "Investing for the Future",
           paragraph:
             "Beyond saving, investing in stocks, real estate, and retirement plans can help secure financial freedom.",
         },
       ],
       image: "https://placehold.co/300x200",
     },
     {
       id: 5,
       category: "Lifestyle",
       title:
         "Mastering the Art of Minimalism: How Simplifying Your Life Can Bring Happiness and Fulfillment",
       author: "Sarah Walker",
       authorImge: "https://placehold.co/50",
       date: "October 12, 2023",
       minutesToRead: 5,
       content: [
         {
           title: "The Philosophy of Minimalism",
           paragraph:
             "Minimalism is not just about decluttering; it’s about focusing on what truly adds value to your life and letting go of excess.",
         },
         {
           title: "Decluttering Your Space and Mind",
           paragraph:
             "A clutter-free environment leads to a clearer mind, reduced stress, and improved productivity.",
         },
       ],
       image: "https://placehold.co/300x200",
     },
     {
       id: 6,
       category: "Business",
       title:
         "Entrepreneurship in the Digital Age: How Startups are Disrupting Traditional Industries",
       author: "David Lee",
       authorImge: "https://placehold.co/50",
       date: "November 8, 2023",
       minutesToRead: 9,
       content: [
         {
           title: "The Rise of Startups",
           paragraph:
             "Technology and innovation have paved the way for small businesses to compete with established corporations in the digital age.",
         },
         {
           title: "Digital Marketing and E-Commerce",
           paragraph:
             "Social media and online platforms provide unprecedented opportunities for businesses to reach global audiences.",
         },
       ],
       image: "https://placehold.co/300x200",
     },
     {
       id: 7,
       category: "Education",
       title:
         "The Future of Education: How Online Learning is Reshaping Traditional Classrooms",
       author: "Olivia Carter",
       authorImge: "https://placehold.co/50",
       date: "May 14, 2023",
       minutesToRead: 6,
       content: [
         {
           title: "E-Learning: A Growing Trend",
           paragraph:
             "With the rise of online courses and digital classrooms, students can now access quality education from anywhere in the world.",
         },
       ],
       image: "https://placehold.co/300x200",
     },
     {
       id: 8,
       category: "Science",
       title:
         "Exploring the Mysteries of Space: The Latest Breakthroughs in Astronomy and Cosmology",
       author: "James Reynolds",
       authorImge: "https://placehold.co/50",
       date: "April 22, 2023",
       minutesToRead: 8,
       content: [
         {
           title: "The Expanding Universe",
           paragraph:
             "Astronomers continue to uncover new insights about the cosmos, from black holes to distant galaxies.",
         },
       ],
       image: "https://placehold.co/300x200",
     },
     {
       id: 9,
       category: "Self-Improvement",
       title:
         "Building Good Habits: How Small Changes Can Lead to Massive Personal Growth",
       author: "Rachel Adams",
       authorImge: "https://placehold.co/50",
       date: "March 30, 2023",
       minutesToRead: 7,
       content: [
         {
           title: "The Science of Habit Formation",
           paragraph:
             "Understanding how habits are formed can help you develop positive routines and eliminate unproductive behaviors.",
         },
       ],
       image: "https://placehold.co/300x200",
     },
   ];

  return (
    <>
      <Navbar />

      <div className="mt-20">
        <div className="py-10 mx-4 md:mx-20">
          <Breadcrumb />
        </div>
        <div className="md:mb-0 mb-10  mx-4 md:mx-20">
          <img alt="project" src={blogImage} />
          <div className="bg-white md:relative md:bottom-44  shadow-xl p-8  md:mx-12  rounded-xl md:w-5/12 w-full">
            <p className="bg-[#F5B22B] text-white rounded-lg inline-block text-sm px-2 py-1">
              Technology
            </p>
            <p className="my-2 text-2xl font-bold">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
            <div className="flex items-center gap-5 mt-5 text-[#97989F] text-xs">
              <img
                alt="image"
                src={"https://placehold.co/50"}
                className="h-9 w-9 rounded-full"
              />
              <p>Non</p>
              <p>August 19, 2002</p>
            </div>
          </div>
        </div>
        <div className="mb-10  mx-4 md:mx-20">
          <p className="text-xl font-semibold">Latest Posts</p>
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

export default Blogs;
