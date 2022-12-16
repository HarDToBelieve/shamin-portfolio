import clsx from "clsx";
import { AboutItemTypes, abouts } from "../../constants";
import styles from "./landing.module.scss";

const About = () => {
  return (
    <div className={clsx("w-full max-w-screen-2xl mx-auto")}>
      <div
        className={clsx(
          "flex flex-col px-6 pt-[74px] pb-[50px] w-full",
          "sm:pl-5",
          "xl:pr-[120px]",
          "2xl:pr-[210px] xl:pl-20 xl:pt-[120px]",
          styles.bgAbout,
        )}
      >
        <div className="flex flex-col sm:flex-row">
          <span className="text-20/28 font-bold">01/</span>

          <div className="flex flex-col sm:ml-[30px] md:ml-16 lg:ml-20 xl:ml-32 w-full">
            <p
              className={clsx(
                "m-0 text-40/52 font-bold font-cas max-w-[380px]",
                "2md:text-80/80",
              )}
            >
              Based in Hanoi
            </p>
            <div
              className={clsx(
                "flex flex-col gap-12 justify-between mt-10 text-16/28",
                "lg:flex-row lg:gap-0 2md:text-22/32",
              )}
            >
              <p className="m-0 max-w-[260px] italic">
                A journey of curiosity and explorations
              </p>
              <p className="whitespace-pre-line max-w-[480px]">{`I'm a creative designer with years of experience in building products and appealing website/mobile app experiences. I've partnered with startups of all sizes and various stages to create some truly unique products.\n\nEach project is an opportuinity to learn new concepts across multiple domains including digital arts, multi-media and physics.`}</p>
            </div>

            <div
              className={clsx(
                "grid grid-cols-1 gap-6 mt-[54px] text-18/32",
                "2md:grid-cols-[auto_auto] md:mt-[100px] md:gap-y-[60px] md:text-22/32",
              )}
            >
              <div className="italic text-main">Professional</div>
              <div
                className={clsx(
                  "grid grid-cols-1 gap-8 w-fit lg:w-full xs:ml-[20%] md:ml-[10%] lg:ml-0",
                  "md:grid-cols-[auto_380px] md:gap-[60px]",
                  "lg:grid-cols-[auto_480px]",
                )}
              >
                {abouts.map((item: AboutItemTypes, index: number) => (
                  <div
                    className={clsx("flex flex-col text-16/28 2md:text-22/32")}
                    key={index}
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-18/32 w-fit 2md:text-26/32 font-cas font-bold hover:text-main"
                    >
                      {item.company}
                    </a>
                    <span className="mt-3">{item.priod}</span>
                    <span className="mt-1">{item.role}</span>
                  </div>
                ))}
              </div>

              <div className="italic text-main mt-[30px] 2md:mt-0">
                Education
              </div>
              <div
                className={clsx(
                  "grid grid-cols-1 gap-[60px] w-fit xs:ml-[20%] md:ml-[10%] lg:ml-0",
                  "md:grid-cols-[auto_380px]",
                  "lg:grid-cols-[auto_480px]",
                )}
              >
                <div
                  className={clsx("flex flex-col text-16/28 2md:text-22/32")}
                >
                  <a
                    href="https://www.arena-multimedia.vn/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-18/32 w-fit 2md:text-26/32 font-cas font-bold hover:text-main"
                  >
                    Arena Multimedia
                  </a>
                  <span className="mt-3">2014 - 2017</span>
                  <span className="mt-1 lg:max-w-[300px]">
                    Advanced Diplopma in Multimedia (ADIM)
                  </span>
                </div>
                <div className="hideen lg:block"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-[100px] 2md:mt-[160px]">
          <span className="text-20/28 font-bold">02/</span>
          <div className="flex flex-col md:ml-16 lg:ml-20 xl:ml-32 w-full">
            <p
              className={clsx(
                "m-0 text-40/52 font-bold font-cas",
                "2md:text-80/80",
              )}
            >
              Selected Work
            </p>
            <span
              className={clsx(
                "mt-6 italic text-16/24 max-w-[780px]",
                "2md:mt-10 2md:text-22/32",
              )}
            >
              I've partnered with startups of all sizes and various stages to
              create some truly unique products. Here are a few that I feel were
              the most challenging yet rewarding projects.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
