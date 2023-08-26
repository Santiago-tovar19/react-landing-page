import React from "react";
import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";

export const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">How we can help you</h1>
        <p className="text-[20px] text-gray-500 ">
          Follow our newsletter. We will regulary update our latest project and
          availability.
        </p>
        <form action="" className="w-full">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-8 pr-36 rounded-xl outline-none"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="absolute text-lg font-semibold py-2 px-6 bg-primary text-white rounded-xl right-2 top-1/2 -translate-y-1/2"
            >
              Suscribe
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2 bg-secundary text-primary rounded-xl box-content" />
          <h3 className="text-[20px] font-bold ">Ui/UX Desing</h3>
          <p className="text-gray-500">
            Sometimes features require a short description
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 bg-secundary text-primary rounded-xl box-content" />
          <h3 className="text-[20px] font-bold ">Logo Branding</h3>
          <p className="text-gray-500">
            Sometimes features require a short description
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 bg-secundary text-primary rounded-xl box-content" />
          <h3 className="text-[20px] font-bold ">App Design</h3>
          <p className="text-gray-500">
            Sometimes features require a short description
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2 bg-secundary text-primary rounded-xl box-content" />
          <h3 className="text-[20px] font-bold ">Webiste Design</h3>
          <p className="text-gray-500">
            Sometimes features require a short description
          </p>
        </div>
      </div>
    </div>
  );
};