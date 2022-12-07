import clsx from "clsx";
import styles from "./landing.module.scss";

type SocialItemTypes = {
  label: string;
  url: string;
};
const socials: Array<SocialItemTypes> = [
  {
    label: "Dribbble",
    url: "https://dribbble.com/Shamin",
  },
  {
    label: "Behance",
    url: "https://www.behance.net/haky",
  },
  {
    label: "Linkedin",
    url: "https://www.linkedin.com/in/shamin-haky/",
  },
  {
    label: "Issuu",
    url: "https://issuu.com/shamin.haky",
  },
];

const ForeWord = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={clsx("flex w-full h-full min-h-screen", styles.bgMain)}>
      <div className="flex w-full mx-auto flex-col pt-16">
        <div className="px-[120px] flex-1 flex flex-col pb-14">
          <img src="/images/logo-text.svg" alt="" className="h-4 w-fit" />
          <span className="text-12/16 mt-3">
            Product Owner / Web & Mobile Designer
          </span>

          <div className="flex flex-col flex-1 justify-center">
            <span className="text-120/120 font-casMedium font-semibold">
              Product
            </span>
            <span className="text-120/120 font-casMedium font-semibold">
              Designer
            </span>
          </div>

          <div className="flex justify-between items-end">
            <div className="flex items-center">
              <div
                className="relative w-20 cursor-pointer"
                onClick={handleScrollDown}
              >
                <img
                  src="/images/bg-scroll-explore.svg"
                  alt=""
                  className={styles.bgBtnScroll}
                />
                <img
                  src="/images/icon-eye.svg"
                  alt=""
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 xs:w-6 md:w-6"
                />
              </div>
              <p className="m-0 text-16/20 text-mainWhite max-w-[440px] ml-4">
                A designer who works with startups looking to push creative
                boundaries and create unique user experiences.
              </p>
            </div>

            <div className="flex flex-col min-w-[330px]">
              <span className="text-22/32 font-semibold">Follow me</span>
              <span className="text-14/18 mt-2 max-w-[250px] text-mainWhite">
                I’m available on the following social media platform
              </span>
              <div className="flex text-16/20 border-b border-white pb-2 mt-5">
                {socials.map((item: SocialItemTypes) => (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-main flex-1"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid h-20 bg-main grid-cols-4 pt-[2px] text-black">
          <div className="flex flex-col border-r-2 border-black px-10 justify-center">
            <span className="text-20/28 font-bold">About Me</span>
            <span className="text-14/18">Always fresh, sometimes normal.</span>
          </div>
          <div className="flex flex-col border-r-2 border-black px-10 justify-center">
            <span className="text-20/28 font-bold">Works</span>
            <span className="text-14/18">
              Web & Mobile / UI & UX / Graphic Design
            </span>
          </div>
          <div className="flex flex-col border-r-2 border-black px-10 justify-center">
            <span className="text-20/28 font-bold">Experience</span>
            <span className="text-14/18">2016 - 2022</span>
          </div>
          <div className="flex flex-col px-10 justify-center">
            <span className="text-20/28 font-bold">Contact</span>
            <p className="text-14/18 m-0">
              Feel free to say{" "}
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=kieuyen1305@gmail.com&tf=cm"
                target={"_blank"}
                rel="noreferrer"
                className="text-[#001AFF] font-semibold"
              >
                /hello.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForeWord;
