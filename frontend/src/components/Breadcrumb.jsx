import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav
      className="flex py-2 px-3 text-black rounded-md overflow-x-auto"
      aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {/* Home link */}
        <li>
          <Link
            to="/"
            className="inline-flex items-center text-xs md:text-sm font-medium text-gray-700 hover:text-gray-900">
            Home
          </Link>
        </li>

        {/* Dynamic breadcrumb links */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="inline-flex items-center">
              {!isLast ? (
                <>
                  <svg
                    className="w-4 h-4 mx-1 md:w-5 md:h-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a 1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link
                    to={to}
                    className="inline-flex items-center whitespace-nowrap text-xs md:text-sm font-medium text-gray-700 hover:text-gray-900">
                    {decodeURIComponent(value)}
                  </Link>
                </>
              ) : (
                <>
                  <span>
                    <svg
                      className="w-4 h-4 mx-1 md:w-5 md:h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a 1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-xs md:text-sm font-medium whitespace-nowrap text-gray-500">
                    {decodeURIComponent(value)}
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
