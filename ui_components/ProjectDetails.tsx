import { FC } from "react";
import { ISelectedWorks } from "../constants";
import Image from "next/image";
import Link from "next/link";
import { icons } from "../utils/images";

export interface IProjectDetail {
  details: ISelectedWorks;
  handleBackBtn: () => void;
}

export const ProjectDetails: FC<IProjectDetail> = ({
  details,
  handleBackBtn,
}) => {
  return (
    <div className="px-5 lg:px-0">
      <div
        className="mb-10 cursor-pointer"
        onClick={() => {
          handleBackBtn();
        }}
      >
        <p className="font-inter font-normal text-[16px] leading-[1.2em] text-primary">
          Back
        </p>
      </div>
      <div className="md:flex items-start gap-5">
        <h1 className="text-[60px] lg:text-[120px] font-leagueGothic font-bold leading-[0.8em] text-whiteBold">
          {details.name}
        </h1>
        <Link
          href={details.link}
          target="_blank"
          className="font-inter flex items-center gap-1 font-normal text-[16px] leading-[1.2em] text-primary"
        >
          Visit
          <span>
            <Image
              width={16}
              height={16}
              src={icons.externalLink}
              alt="external link"
            />
          </span>
        </Link>
      </div>
      <div className="mt-10">
        <p className="font-inter font-normal text-[16px] leading-[1.2em] text-whiteLight">
          {details.description}
        </p>
      </div>
      <div
        className={`flex  items-center mt-10 gap-5 ${
          details.isMobile ? "" : "flex-col"
        }`}
      >
        {details.demoImgs.map((src, ind) => {
          return (
            <div key={ind}>
              <Image src={src} alt="project_demo_images" />
            </div>
          );
        })}
      </div>
      <div className="lg:grid grid-cols-12 gap-10 mt-10">
        <div className="col-span-3">
          <h3 className="font-inter font-bold text-[24px] leading-[1.2em] text-white">
            MY <br /> CONTRIBUTION
          </h3>
        </div>
        <div className="col-span-9 mt-5 lg:mt-0">
          <p className="font-inter font-normal text-[16px] leading-[1.2em] text-whiteLight">
            {details.myContributions}
          </p>
        </div>
      </div>
    </div>
  );
};
