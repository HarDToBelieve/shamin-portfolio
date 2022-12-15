import clsx from "clsx";
import { SwiperSlide } from "swiper/react";
import { CompanyTypes } from "../../constants";
import BaseSwiper from "../Swiper";

type WorkSectionProps = {
  theme?: "dark" | "light";
  workData: CompanyTypes;
};

const WorkSection = (props: WorkSectionProps) => {
  const { theme = "light", workData } = props;

  return (
    <div
      className={clsx(
        theme === "light" ? " bg-white text-black" : "bg-black text-white",
        "w-full flex",
      )}
    >
      <div className="flex flex-col max-w-screen-main w-full mx-auto py-20">
        <p
          className={clsx(workData?.textColor, "m-0 uppercase font-bold")}
        >{`↓ Work File ${workData?.no.toString().padStart(2, "0")} ↓`}</p>

        <div className="text-56/60 font-cas mt-4">
          <span className={clsx(workData?.textColor, "font-bold")}>
            {workData?.name}
          </span>
          <span className="">
            {workData?.subName} — {workData?.title}
          </span>
        </div>

        <div className="flex w-full mt-12">
          <BaseSwiper theme={theme}>
            {workData?.collections?.map((url: string, index: number) => (
              <SwiperSlide style={{ height: "auto" }} key={index}>
                <div className="w-full h-full relative">
                  <img src={url} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </BaseSwiper>
        </div>

        <div className="grid grid-cols-2 px-8 mt-16">
          <ul className="list-[square] list-inside">
            {workData?.fullName ? (
              <li className="text-18/24 uppercase">
                <span className={clsx(workData?.textColor, "font-semibold")}>
                  Company:{" "}
                </span>
                <span>{workData?.fullName || "N/A"}</span>
              </li>
            ) : (
              <li className="text-18/24 uppercase">
                <span className={clsx(workData?.textColor, "font-semibold")}>
                  Project:{" "}
                </span>
                <a
                  href={workData?.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  The Leadership and Change
                </a>
              </li>
            )}
            <li className="text-18/24 uppercase">
              <span className={clsx(workData?.textColor, "font-semibold")}>
                Role:{" "}
              </span>
              <span>{workData?.roles || "N/A"}</span>
            </li>
            {workData?.fullName ? (
              <li className="text-18/24 uppercase">
                <span className={clsx(workData?.textColor, "font-semibold")}>
                  Live:{" "}
                </span>
                <a
                  href={workData?.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  HERE
                </a>
              </li>
            ) : (
              <li className="text-18/24 uppercase">
                <span className={clsx(workData?.textColor, "font-semibold")}>
                  Date:{" "}
                </span>
                <span>2020</span>
              </li>
            )}
          </ul>

          <div className="w-full whitespace-pre-line">
            {workData?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
