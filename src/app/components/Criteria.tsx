import React from "react";

const Criteria = ({ title, description, isOpen, toggle }) => (
  <button className="w-full" onClick={toggle}>
    <h1 className="mt-2 rounded-lg bg-blue-700 text-center p-7 text-white w-[85%] mx-auto">
      {title}
    </h1>
    <h1
      className={`rounded-lg bg-blue-300 p-3 text-blue ${
        isOpen ? "" : "hidden"
      } text-left text-justify`}
    >
      {description}
    </h1>
  </button>
);

export default Criteria;
