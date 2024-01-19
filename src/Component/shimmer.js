import React, { useState } from 'react';

const Shimmer = () => {
  return (
    <div className="">
      {Array(10)
        .fill('')
        .map((item, index) => (
          <div key={index} className="shimmerBody"></div>
        ))}
    </div>
  );
};

export default Shimmer;
