"use client";
import { useState } from "react";
import { ISelectedWorks, selectedWorks } from "../constants";
import { ProjectDetails } from "./ProjectDetails";

export const HomePage = () => {
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [projectDetails, setProjectDetails] = useState<ISelectedWorks>();

  const handleBackBtn = () => {
    console.log("called");
    setShowProjectDetails(false);
    setProjectDetails({} as ISelectedWorks);
    document.documentElement.scrollTop = 0;
  };

  const handleProjectClick = (item: ISelectedWorks) => {
    setProjectDetails(item);
    setShowProjectDetails(true);
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      {showProjectDetails ? (
        <div>
          <ProjectDetails
            details={projectDetails ?? ({} as ISelectedWorks)}
            handleBackBtn={handleBackBtn}
          />
        </div>
      ) : (
        <div className="">
          <h1 className="hidden lg:block text-[120px] font-leagueGothic font-bold leading-[0.8em] text-whiteBold">
            HI, I'M <span className="text-primary">VAITHIYALINGAM S</span>.
          </h1>
          <h1 className="block lg:hidden text-[70px] font-leagueGothic font-bold leading-[0.8em] text-whiteBold">
            HI, I'M <br />
            <span className="text-primary  pt-2">VAITHIYALINGAM S</span>.
          </h1>
          <div className="flex flex-col gap-14 mt-20 lg:ml-14 ml-4">
            <div className="lg:grid grid-cols-12 gap-10">
              <div className="col-span-2">
                <h3 className="font-inter font-bold text-[24px] leading-[1.2em] text-white">
                  FRONTEND <br /> DEVELOPER
                </h3>
              </div>
              <div className="col-span-10 mt-5 lg:mt-0">
                <p className="font-inter font-normal text-[16px] leading-[1.2em] text-whiteLight">
                Frontend Engineer specializing in high-performance UI engineering, real-time systems, and scalable front-end architecture. I’ve built complex interfaces such as live testing dashboards, dynamic execution viewers with real-time screenshot updates, responsive blockchain explorers, and interactive UI workflows. I focus heavily on performance optimization — improving load times, reducing unnecessary network operations, and optimizing rendering paths. My experience spans React, Next.js, Remix, TypeScript, RxJS, Firebase, and real-time WebSocket environments. I enjoy solving deep technical challenges and building products that feel fast, polished, and reliable at scale.
                </p>
              </div>
            </div>
            <div className="lg:grid grid-cols-12 gap-10">
              <div className="col-span-2">
                <h3 className="font-inter font-bold text-[24px] leading-[1.2em] text-white">
                  SELECTED <br /> WORKS
                </h3>
              </div>
              <div className="col-span-10 mt-5 lg:mt-0">
                <div className="flex flex-col gap-5">
                  {selectedWorks.map((item: ISelectedWorks, ind) => {
                    return (
                      <div
                        className="w-fit flex items-start justify-start gap-2 cursor-pointer hover:opacity-80 hover:scale-[1.1] transition-all ease-in-out duration-300"
                        onClick={() => {
                          handleProjectClick(item);
                        }}
                        role="presentation"
                        key={ind}
                      >
                        <p className="font-inter font-normal text-[16px] leading-[1.2em] text-whiteLight">{`0${
                          ind + 1
                        }`}</p>
                        <p className="lg:text-[60px] text-[40px] font-leagueGothic font-bold leading-[0.8em] text-primary">
                          {item.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
