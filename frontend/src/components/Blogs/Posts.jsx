import React from "react";
import { useNavigate } from "react-router-dom";

const Posts = ({ posts }) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white cursor-pointer rounded-xl shadow-md overflow-hidden border border-gray-200 p-3 flex flex-col"
            onClick={() =>
              navigate(`/blogs/${post.title}`, { state: { post } })
            }>
            {/* Post Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-52 object-cover rounded-lg"
            />

            {/* Content Wrapper */}
            <div className="flex-grow flex flex-col justify-between">
              <div className="py-4">
                {/* Category Label */}
                <span className="text-xs font-semibold text-yellow-600 uppercase">
                  {post.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mt-1 leading-tight">
                  {post.title}
                </h2>
              </div>

              {/* Author & Date */}
              <div className="flex items-center mt-3 text-gray-500 text-sm">
                {/* Author Avatar */}
                <img
                  src={post.authorImge}
                  alt={post.author}
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="font-medium text-gray-700">{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
