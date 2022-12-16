import clsx from "clsx";
import { SwiperSlide } from "swiper/react";
import { CollectionTypes, CompanyTypes } from "../../constants";
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
      <div
        className={clsx(
          "flex flex-col max-w-screen-2xl w-full mx-auto py-14 px-6",
          "md:px-[60px] md:py-20",
          "lg:px-[120px]",
          "xl:px-[160px]",
          "2xl:px-[210px]",
        )}
      >
        <p
          className={clsx(
            workData?.textColor,
            "m-0 uppercase font-bold text-12/16 md:text-14/18",
          )}
        >{`↓ Work File ${workData?.no.toString().padStart(2, "0")} ↓`}</p>

        <div
          className={clsx(
            "text-32/40 font-cas mt-[10px]",
            "md:text-40/52",
            "lg:text-48/60",
            "xl:text-56/60 md:mt-4",
          )}
        >
          <span className={clsx(workData?.textColor, "font-bold")}>
            {workData?.name}
          </span>
          <span className="">
            {workData?.subName} — {workData?.title}
          </span>
        </div>

        <div className="flex w-full mt-8 md:mt-12 relative">
          <BaseSwiper theme={theme}>
            {workData?.collections?.map(
              (collection: CollectionTypes, index: number) => (
                <SwiperSlide style={{ height: "auto" }} key={index}>
                  <div className="w-full h-full relative">
                    <img src={collection.imgSrc} alt="" />
                    <div
                      className={clsx(
                        "absolute top-4 right-4 z-10 w-12 h-12",
                        "md:top-8 md:right-8",
                      )}
                    >
                      <a
                        href={collection.url}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img src="/images/icon-share.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ),
            )}
          </BaseSwiper>
        </div>

        <div
          className={clsx(
            "grid grid-cols-1 mt-6 gap-3",
            "md:px-0",
            "2md:px-8 md:mt-16 md:grid-cols-2",
          )}
        >
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
