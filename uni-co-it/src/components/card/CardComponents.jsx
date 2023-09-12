import Link from "next/link";
import React from "react";
import { GiArmoredBoomerang } from "react-icons/gi";

const CardComponents = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <p className="text-4xl font-bold">
        Our Outsourcing{" "}
        <span>
          S<span className="text-[#0071BC]">e</span>rvices
        </span>
      </p>
      <hr />
      <div className="grid grid-cols-4 gap-8  mt-10">
        <div className=" bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg w-72  border h-auto">
          <figure className="ml-7 pt-10">
            <img src="service-1.png" alt="Shoes" className="rounded-xl " />
          </figure>
          <div className="card-body text-left">
            <div>
              <h2 className="card-title font-extrabold">
                Dedicated Development Team
              </h2>
            </div>
            <h3 className="card-title text-[#0071BC] mt-3 font-bold">
              From $35 p/h
            </h3>
            <p>
              IT-experts who can be integrated seamlessly into your team at a
              reasonable price. Accelerate the pace of project development
              without employment
            </p>
            <div className="card-actions flex justify-start items-center ">
              <span className="text-[#0071Bc]">Read more </span>
              <Link href="/" className="text-[#0071BC]">
                <GiArmoredBoomerang />
              </Link>
            </div>
          </div>
        </div>

      {/* Card-2 */}

        <div className=" bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg w-72  border h-auto">
          <figure className="ml-7 pt-10">
            <img src="service-4.png" alt="Shoes" className="rounded-xl " />
          </figure>
          <div className="card-body text-left">
            <div>
              <h2 className="card-title font-extrabold">
                Custom Software Development
              </h2>
            </div>
            <h3 className="card-title text-[#0071BC] mt-3 font-bold">
              From $35 p/h
            </h3>
            <p>
              IT-experts who can be integrated seamlessly into your team at a
              reasonable price. Accelerate the pace of project development
              without employment
            </p>
            <div className="card-actions flex justify-start items-center ">
              <span className="text-[#0071Bc]">Read more </span>
              <Link href="/" className="text-[#0071BC]">
                <GiArmoredBoomerang />
              </Link>
            </div>
          </div>
        </div>

        {/* Card-3 */}
        <div className=" bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg w-72  border h-auto">
          <figure className="ml-7 pt-10">
            <img src="service-2.png" alt="Shoes" className="rounded-xl " />
          </figure>
          <div className="card-body text-left">
            <div>
              <h2 className="card-title font-extrabold">
                Web Development 
              </h2>
            </div>
            <h3 className="card-title text-[#0071BC] mt-3 font-bold">
              From $35 p/h
            </h3>
            <p>
              IT-experts who can be integrated seamlessly into your team at a
              reasonable price. Accelerate the pace of project development
              without employment
            </p>
            <div className="card-actions flex justify-start mb-auto items-center ">
              <span className="text-[#0071Bc]">Read more </span>
              <Link href="/" className="text-[#0071BC]">
                <GiArmoredBoomerang />
              </Link>
            </div>
          </div>
        </div>
        {/* Card-4 */}
        <div className=" bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg w-72  border h-auto">
          <figure className="ml-7 pt-10">
            <img src="service-3.png" alt="Shoes" className="rounded-xl " />
          </figure>
          <div className="card-body text-left">
            <div>
              <h2 className="card-title font-extrabold">
               Web App Development
              </h2>
            </div>
            <h3 className="card-title text-[#0071BC] mt-3 font-bold">
              From $35 p/h
            </h3>
            <p>
              IT-experts who can be integrated seamlessly into your team at a
              reasonable price. Accelerate the pace of project development
              without employment
            </p>
            <div className="card-actions flex justify-start mb-0 items-center ">
              <span className="text-[#0071Bc]">Read more </span>
              <Link href="/" className="text-[#0071BC]">
                <GiArmoredBoomerang />
              </Link>
            </div>
          </div>
        </div>

      {/* Crad-5 */}
      <div className=" bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg w-72  border h-auto">
          <figure className="ml-7 pt-10">
            <img src="service-5.png" alt="Shoes" className="rounded-xl " />
          </figure>
          <div className="card-body text-left">
            <div>
              <h2 className="card-title font-extrabold">
               Mobile App Development
              </h2>
            </div>
            <h3 className="card-title text-[#0071BC] mt-3 font-bold">
              From $35 p/h
            </h3>
            <p>
              IT-experts who can be integrated seamlessly into your team at a
              reasonable price. Accelerate the pace of project development
              without employment
            </p>
            <div className="card-actions flex justify-start mb-0 items-center ">
              <span className="text-[#0071Bc]">Read more </span>
              <Link href="/" className="text-[#0071BC]">
                <GiArmoredBoomerang />
              </Link>
            </div>
          </div>
        </div>
        {/* Crad-6 */}
        <div className=" bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg w-72  border h-auto">
          <figure className="ml-7 pt-10">
            <img src="service-6.png" alt="Shoes" className="rounded-xl " />
          </figure>
          <div className="card-body text-left">
            <div>
              <h2 className="card-title font-extrabold">
               Quality Assurance
              </h2>
            </div>
            <h3 className="card-title text-[#0071BC] mt-3 font-bold">
              From $35 p/h
            </h3>
            <p>
              IT-experts who can be integrated seamlessly into your team at a
              reasonable price. Accelerate the pace of project development
              without employment
            </p>
            <div className="card-actions flex justify-start mb-0 items-center ">
              <span className="text-[#0071Bc]">Read more </span>
              <Link href="/" className="text-[#0071BC]">
                <GiArmoredBoomerang />
              </Link>
            </div>
          </div>
        </div>
        {/* Crad-7 */}
        <div className=" bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg w-72  border h-auto">
          <figure className="ml-7 pt-10">
            <img src="service-8.png" alt="Shoes" className="rounded-xl " />
          </figure>
          <div className="card-body text-left">
            <div>
              <h2 className="card-title font-extrabold">
               Design and Branding
              </h2>
            </div>
            <h3 className="card-title text-[#0071BC] mt-3 font-bold">
              From $35 p/h
            </h3>
            <p>
              IT-experts who can be integrated seamlessly into your team at a
              reasonable price. Accelerate the pace of project development
              without employment
            </p>
            <div className="card-actions flex justify-start mb-0 items-center ">
              <span className="text-[#0071Bc]">Read more </span>
              <Link href="/" className="text-[#0071BC]">
                <GiArmoredBoomerang />
              </Link>
            </div>
          </div>
        </div>
        {/* Card-8 */}
        <div className=" bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg w-72  border h-auto">
          <figure className="ml-7 pt-10">
            <img src="service-7.png" alt="Shoes" className="rounded-xl " />
          </figure>
          <div className="card-body text-left">
            <div>
              <h2 className="card-title font-extrabold">
               Database Design & Development
              </h2>
            </div>
            <h3 className="card-title text-[#0071BC] mt-3 font-bold">
              From $35 p/h
            </h3>
            <p>
              IT-experts who can be integrated seamlessly into your team at a
              reasonable price. Accelerate the pace of project development
              without employment
            </p>
            <div className="card-actions flex justify-start mb-0 items-center ">
              <span className="text-[#0071Bc]">Read more </span>
              <Link href="/" className="text-[#0071BC]">
                <GiArmoredBoomerang />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CardComponents;
