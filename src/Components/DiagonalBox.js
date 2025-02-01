import React from 'react';

const DiagonalBox = ({ width, height }) => {
  return (
    <div className="relative w-64 h-64 bg-blue-500 overflow-hidden">
      {/* Slanted Line - Using a rotated pseudo-element */}
      <div className="absolute inset-0 bg-blue-500 rotate-45 transform origin-top-right h-full w-full"></div>
      <div className="absolute inset-0 bg-red-200"></div> {/* Background color to hide part of the rotated box */}
      <p className="absolute text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Slanted Box
      </p>
    </div>
  );
};

export default DiagonalBox;
