import React from "react";

export const Works = () => {
  return (
    <div className="xl:p-20 p-8 ">
      <div className="mb-8">
        <h1 className="text-[40px] font-bold">
          We create world-class digital products
        </h1>
        <p className="text-xl text-gray-500">
          By information about design the world to the best instructors, heatc
          helping By information
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <img src="work1.png" className="w-full rounded-3xl mb-4 h-[600px] " />
          <p className="text-gray-500">App Design - June 20, 2022</p>
          <h3 className="text-2xl font-bold">App Redesign</h3>
          <p className="text-gray-500 ">
            By information about design the world to the best instructors, heatc
            helping By information about design the world to the best
            instructors, heatc helping
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="work2.png"
              className="w-full rounded-3xl h-56 object-cover mb-4"
            />
            <p className="text-gray-500">App Design - June 20, 2022</p>
            <h3 className="text-2xl font-bold">
              Redesign channel website landng page
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work3.png"
              className="w-full rounded-3xl h-56 object-cover"
            />
            <p className="text-gray-500">App Design - June 20, 2022</p>
            <h3 className="text-2xl font-bold">
              Redesign channel website landng page
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work4.png"
              className="w-full rounded-3xl h-56 object-cover"
            />
            <p className="text-gray-500">App Design - June 20, 2022</p>
            <h3 className="text-2xl font-bold">
              Redesign channel website landng page
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work5.png"
              className="w-full rounded-3xl h-56 object-cover"
            />
            <p className="text-gray-500">App Design - June 20, 2022</p>
            <h3 className="text-2xl font-bold">
              Redesign channel website landng page
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
