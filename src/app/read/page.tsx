"use client";
import React, { useState } from "react";
import Criteria from "../components/Criteria";
import criteriaData from "../components/criteriaData";

const ReadInstructions = () => {
  const [hidden, setHidden] = useState(
    new Array(criteriaData.length).fill(true)
  );

  const toggleHidden = (index) => {
    const newHidden = [...hidden];
    newHidden[index] = !newHidden[index];
    setHidden(newHidden);
  };

  return (
    <div className="bg-gradient-to-r from-gray-200 via-gray-400 to-pink-400 h-full">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-900 p-5 rounded-br-full h-[120px] shadow-md w-full">
        <h2 className="text-xs font-bold">APEXTRADE VENTURES INCORPORATION</h2>
        <h2 className="text-2xl font-bold text-white stroke-cyan-900">
          FACTORS TO CONSIDER IN EVALUATING THE PERFORMANCE OF THE RATEE
        </h2>
      </div>
      <div className="w-[90%] mx-auto">
        {criteriaData.map((data, index) => (
          <Criteria
            key={index}
            title={data.title}
            description={data.description}
            isOpen={!hidden[index]}
            toggle={() => toggleHidden(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ReadInstructions;
