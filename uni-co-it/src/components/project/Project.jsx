import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Project = () => {
  return (
    <div className="max-w-6xl mx-auto mb-5 mt-20">
      <p className="text-4xl font-bold">
        Our{" "}
        <span>
          Proj<span className="text-[#0071BC]">e</span>ct
        </span>
      </p>
      <hr />

      <div className="grid grid-cols-3 gap-8 mt-10">
        <div className="card w-96 bg-base-300 shadow-2xl image-full">
          <figure>
            <img src="projects-1.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <p className="text-2xl font-bold mt-40">Data Protection System</p>
          </div>
        </div>
        {/* project-2 */}
        <div className="card w-96 bg-base-300 shadow-2xl image-full">
          <figure>
            <img src="projects-2.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <p className="text-2xl font-bold mt-40">
              Financial web development
            </p>
          </div>
        </div>
        {/* project-3 */}
        <div className="card w-96 bg-base-300 shadow-2xl image-full">
          <figure>
            <img src="projects-3.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <p className="text-2xl font-bold mt-40">Drone delivery System</p>
          </div>
        </div>
        {/* project-4 */}
        <div className="card w-96 bg-base-300 shadow-2xl image-full">
          <figure>
            <img src="project-4.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <p className="text-2xl font-bold mt-40">
              Custom food delivery service
            </p>
          </div>
        </div>
        {/* project-5 */}
        <div className="card w-96 bg-base-300 shadow-2xl image-full">
          <figure>
            <img src="project-5.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <p className="text-2xl font-bold mt-40">
              Solar Power Control System
            </p>
          </div>
        </div>
        {/* project-6 */}
        <div className="card w-96 bg-base-300 shadow-2xl image-full">
          <figure>
            <img src="project-6.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <p className="text-2xl font-bold mt-40">Advertising Platform</p>
          </div>
        </div>
        {/* project-7 */}
        <div className="card w-96 bg-base-300 shadow-2xl image-full">
          <figure>
            <img src="project-7.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <p className="text-2xl font-bold mt-40">
              Biometric Advance control for Acc
            </p>
          </div>
        </div>
        {/* project-8 */}
        <div className="card w-96 bg-base-300 shadow-2xl image-full">
          <figure>
            <img src="project-8.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <p className="text-2xl font-bold mt-40">Data Protection System</p>
          </div>
        </div>
        <div className="card w-96  image-full">
          <figure>
            <img src="project-9.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <p className="text-2xl font-bold mt-40">Health Care Control</p>
          </div>
        </div>
       
        <button className="font-bold rounded-full mt-10 px-6 py-3 text-xl text-white bg-[#3FBFEB]">
          View All Project{" "}
        </button>
      </div>
    </div>
  );
};

export default Project;
