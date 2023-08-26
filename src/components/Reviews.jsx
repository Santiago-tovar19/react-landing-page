import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Let’s hear What they says
      </h1>

      <div className="flex  justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-5xl text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
          lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum
          turpis amet id posuere torto quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className=" flex flex-col gap-8">
        <div className="flex  gap-8 md:gap-12 items-center justify-center">
          <img
            src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
            className="xl:w-14 h-8 w-8 xl:h-14  rounded-full object-cover ring-2 ring-gray-300 bg-white "
            alt=""
          />
          <img
            src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
            className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover ring-2 ring-gray-300 bg-white "
            alt=""
          />
          <img
            src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
            className="md:w-20 md:h-20 w-12 h-12 rounded-full object-cover   ring-4 ring-primary bg-white p-1"
            alt=""
          />
          <img
            src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
            className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover ring-2 ring-gray-300 bg-white "
            alt=""
          />
          <img
            src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
            className="xl:w-14 h-8 w-8 xl:h-14  rounded-full object-cover ring-2 ring-gray-300 bg-white "
            alt=""
          />
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">Ricky Aprilla</h3>
          <h5 className="text-center text-[18px] text-gray-500">
            Founder of Varibo
          </h5>
        </div>
      </div>
    </div>
  );
};
