import clsx from "clsx";
import { HTMLAttributeAnchorTarget, useState } from "react";
import { SEND_GMAIL_URL } from "../../utils";
import { footerRoutes, FooterRouteTypes } from "./Footer";
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
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleToggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const handleChangeRoute = (
    hash: FooterRouteTypes["to"],
    target?: HTMLAttributeAnchorTarget,
  ) => {
    setOpenMenu(false);
    if (!target) window.location.hash = hash;
    else window.open(hash, target);
  };

  //#region RENDER
  const renderPopupHeader = () => {
    return (
      <div
        className={clsx(
          "fixed flex flex-col px-6 pb-[120px] w-full bg-black top-[72px] sm:hidden z-50",
          styles.popupHeader,
          openMenu ? styles.slideIn : styles.slideOut,
        )}
      >
        <div className="flex flex-col space-y-6 text-20/28 mt-20">
          {footerRoutes.map((item: FooterRouteTypes, index: number) => (
            <div
              className="uppercase"
              key={index}
              onClick={() => handleChangeRoute(item.to, item.target)}
            >
              {item.label}
            </div>
          ))}
        </div>

        {renderFollowMe()}
      </div>
    );
  };

  const renderNavigation = () => {
    return (
      <>
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
        <div className="flex flex-1 flex-col border-r-2 border-black px-10 justify-center">
          <span className="text-20/28 font-bold">Experience</span>
          <span className="text-14/18">2016 - 2022</span>
        </div>
        <div className="flex flex-1 flex-col px-10 justify-center border-r-2 border-black lg:border-none">
          <span className="text-20/28 font-bold">Contact</span>
          <p className="text-14/18 m-0">
            Feel free to say{" "}
            <a
              href={SEND_GMAIL_URL}
              target={"_blank"}
              rel="noreferrer"
              className="text-[#001AFF] font-semibold"
            >
              /hello.
            </a>
          </p>
        </div>
      </>
    );
  };

  const renderFollowMe = () => {
    return (
      <div className="flex flex-col w-full md:w-fit md:min-w-[330px] mt-auto md:mt-0 sm:ml-auto">
        <span className="text-22/32 font-semibold">Follow me</span>
        <span className="text-14/18 mt-2 max-w-[250px] text-mainWhite">
          I’m available on the following social media platform
        </span>
        <div className="flex text-16/20 border-b border-white pb-2 mt-5">
          {socials.map((item: SocialItemTypes, index: number) => (
            <a
              key={index + 10000}
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
    );
  };

  //#endregion RENDER

  return (
    <div className={clsx("flex w-full h-full min-h-screen", styles.bgMain)}>
      <div className="flex w-full mx-auto flex-col md:pt-16">
        <div className="md:px-10 lg:px-[120px] flex-1 flex flex-col pb-10 md:pb-14">
          <div
            className={clsx(
              "flex border-b border-[#f0f2f526] h-[72px] items-center pl-6 fixed top-0 w-full bg-black z-20",
              "sm:border-none md:h-auto sm:relative sm:w-auto sm:bg-inherit md:pl-0",
            )}
          >
            <div className="flex flex-col">
              <img src="/images/logo-text.svg" alt="" className="h-4 w-fit" />
              <span className="text-12/16 mt-3">
                Product Owner / Web & Mobile Designer
              </span>
            </div>

            <div
              onClick={handleToggleMenu}
              className={clsx(
                "flex h-full w-[72px] items-center justify-center ml-auto border-l border-[#f0f2f526] cursor-pointer",
                "sm:hidden",
              )}
            >
              <img
                src={
                  openMenu ? "/images/icon-close.svg" : "/images/icon-menu.svg"
                }
                alt=""
              />
            </div>
          </div>

          <div
            className={clsx(
              "flex flex-col justify-center text-48/60 font-casMedium font-semibold pl-6 mt-20",
              "md:text-80/80 md:ml-0 md:flex-1 md:mt-0 md:pl-0",
              "lg:text-120/120",
            )}
          >
            <span data-aos="fade-up">Product</span>
            <span data-aos="fade-up">Designer</span>
          </div>

          <div
            className={clsx(
              "flex flex-col items-start px-6 flex-1",
              "md:flex-row md:items-end md:justify-between md:px-0 md:flex-initial",
            )}
          >
            <div className="flex items-center mt-10 md:mt-0">
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
              <p className="m-0 text-16/20 text-mainWhite max-w-[320px] lg:max-w-[440px] w-fit ml-4">
                A designer who works with startups looking to push creative
                boundaries and create unique user experiences.
              </p>
            </div>

            {renderFollowMe()}
          </div>
        </div>

        <div className="relative h-20 overflow-hidden">
          <div
            className={clsx(
              "flex bg-main pt-[2px] text-black",
              styles.navigation,
            )}
          >
            <div
              className={clsx(
                "flex w-full lg:w-screen xl:grid xl:grid-cols-4",
                styles.navItem,
              )}
            >
              {renderNavigation()}
            </div>

            <div className={clsx("flex lg:hidden", styles.navItem)}>
              {renderNavigation()}
            </div>
          </div>
        </div>
      </div>

      {renderPopupHeader()}
    </div>
  );
};

export default ForeWord;
