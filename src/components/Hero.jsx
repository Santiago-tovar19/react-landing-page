import React from "react";
import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
  RiCheckboxBlankFill,
} from "react-icons/ri";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8 gap-8 md:gap-0">
      <div className=" md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold  xl:leading-[7.4rem] ">
            Web Desing Impactful Digital{" "}
            <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block ">
              Products
              <RiCheckboxBlankCircleFill className="absolute text-base -left-5 -top-5 text-white p-2 box-content rounded-full bg-primary" />
              <RiCheckboxBlankCircleFill className="absolute text-base -right-5 -top-5 text-white p-2 box-content rounded-full bg-primary" />
              <RiCheckboxBlankCircleFill className="absolute text-base -left-5 -bottom-5 text-white p-2 box-content rounded-full bg-primary" />
              <RiCheckboxBlankCircleFill className="absolute text-base -right-5 -bottom-5 text-white p-2 box-content rounded-full bg-primary" />
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem] ">
            Help find solutions with intitutive and in accordance with client
            business goals. we provide a high-quality services.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className=" w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
              Contact Us
            </button>
            <button className="w-full xl:w-auto flex items-center gap-4 py-2 px-8 rounded-xl text-xl text-left">
              <RiPlayFill className="bg-secondary text-primary p-4 box-content rounded-full" />{" "}
              Watch our <br /> introduction video
            </button>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 flex items-center justify-center relative p-8">
        <div>
          <img
            src="hero.png"
            className="w-[250px] h-[250px] md:w-[450] md:h-[450] object-cover xl:-mt-28"
          />

          <div className="relative bg-white shadow-lg p-4 rounded-lg flex justify-center max-w-[250px] mx-auto flex-col gap-2 -mt-12">
            <div className="flex items-center">
              <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-300 bg-white "
                alt=""
              />
              <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-300 bg-white -ml-4"
                alt=""
              />
              <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-300 bg-white -ml-4"
                alt=""
              />
              <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-300 bg-white -ml-4"
                alt=""
              />
              <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-300 bg-white -ml-4"
                alt=""
              />
            </div>

            <h2 className="text-xl font-bold tracking-[1px] text-gray-800">
              120 + Employees
            </h2>
            <div className="flex items-center gap-2 text-lg">
              <RiStarFill className="text-primary" /> 5.0(3.1k Reviews)
            </div>
            <div className="absolute -right-12 -bottom-12 -z-10">
              <div className="relative">
                <RiCheckboxBlankCircleFill className=" text-primary text-8xl " />
                <RiCheckboxBlankFill className=" absolute -left-7 -top-7 text-white text-8xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white rounded-full border-primary border-[10px] -z-10 "></div>
        <img
          src="figma.png"
          alt=""
          className="md:w-20 md:h-20 w-10 h-10 object-cover rounded-full border-l-8 border-gray-600 absolute top-[9%] right-[20%] xl:right-[10%]"
        />
        <img
          src="adobe.png"
          alt=""
          className="md:w-20 md:h-20 w-10 h-10 object-cover rounded-full border-l-8 border-gray-600 absolute top-[10%] xl:top-[2%] left-[18%] xl:left-[10%]"
        />
        <img
          src="sketch.png"
          alt=""
          className="md:w-20 md:h-20 w-10 h-10 object-cover rounded-full  absolute bottom-[5%] left-[15%] xl:left-[10%] bg-white"
        />
      </div>
    </section>
  );
};
