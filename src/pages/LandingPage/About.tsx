import clsx from "clsx";
import { AboutItemTypes, abouts } from "../../constants";
import styles from "./landing.module.scss";

const About = () => {
  return (
    <div className={clsx("w-full max-w-screen-2xl mx-auto")}>
      <div
        className={clsx(
          "flex flex-col pt-[120px] pb-20 w-full",
          "pr-[210px] pl-20",
          styles.bgAbout,
        )}
      >
        <div className="flex">
          <span className="text-20/28 font-bold">01/</span>

          <div className="flex flex-col ml-32 w-full">
            <p className="m-0 text-80/80 max-w-[380px] font-bold font-cas">
              Based in Hanoi
            </p>
            <div className="flex justify-between mt-10">
              <p className="m-0 max-w-[260px] text-22/32 italic">
                A journey of curiosity and explorations
              </p>
              <p className="whitespace-pre-line text-22/32 max-w-[480px]">{`I'm a creative designer with years of experience in building products and appealing website/mobile app experiences. I've partnered with startups of all sizes and various stages to create some truly unique products.\n\nEach project is an opportuinity to learn new concepts across multiple domains including digital arts, multi-media and physics.`}</p>
            </div>

            <div className="grid grid-cols-[auto_auto] gap-y-[60px] mt-[100px] text-22/32">
              <div className="italic text-main">Professional</div>
              <div className="grid grid-cols-[auto_480px] gap-[60px]">
                {abouts.map((item: AboutItemTypes, index: number) => (
                  <div className={clsx("flex flex-col")} key={index}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-26/32 font-cas font-bold hover:underline"
                    >
                      {item.company}
                    </a>
                    <span className="text-22/32 mt-3">{item.priod}</span>
                    <span className="text-22/32 mt-1">{item.role}</span>
                  </div>
                ))}
              </div>

              <div className="italic text-main">Education</div>
              <div className="grid grid-cols-[auto_480px] gap-[60px]">
                <div className={clsx("flex flex-col")}>
                  <a
                    href="https://www.arena-multimedia.vn/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-26/32 font-cas font-bold hover:underline"
                  >
                    Arena Multimedia
                  </a>
                  <span className="text-22/32 mt-3">2014 - 2017</span>
                  <span className="text-22/32 mt-1 max-w-[300px]">
                    Advanced Diplopma in Multimedia (ADIM)
                  </span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[160px]">
          <span className="text-20/28 font-bold">02/</span>
          <div className="flex flex-col ml-32 w-full">
            <p className="m-0 text-80/80 font-bold font-cas">Selected Work</p>
            <span className="mt-10 italic text-22/32 max-w-[780px]">
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
