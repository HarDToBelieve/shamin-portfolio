import clsx from "clsx";
import { HTMLAttributeAnchorTarget } from "react";
import { SEND_GMAIL_URL } from "../../utils";

export type FooterRouteTypes = {
  label: "Home" | "About" | "Works" | "Contact";
  to: "#" | "#about" | "#works" | typeof SEND_GMAIL_URL;
  target?: HTMLAttributeAnchorTarget;
};
export const footerRoutes: Array<FooterRouteTypes> = [
  {
    label: "Home",
    to: "#",
  },
  {
    label: "About",
    to: "#about",
  },
  {
    label: "Works",
    to: "#works",
  },
  {
    label: "Contact",
    to: SEND_GMAIL_URL,
    target: "_blank",
  },
];

const Footer = () => {
  return (
    <div
      className={clsx(
        "flex flex-col w-full max-w-screen-2xl mx-auto",
        "md:pt-[120px] md:pr-[110px] md:pl-[80px]",
        "px-7 py-[60px]",
      )}
    >
      <div className="flex flex-col xs:flex-row">
        <span className="text-20/28 font-bold">03/</span>
        <div className="flex flex-col xs:ml-32">
          <span
            className={clsx(
              "text-40/52 font-bold font-cas max-w-[240px]",
              "text-80/80 xs:max-w-none",
            )}
          >
            Get In Touch
          </span>
          <span
            className={clsx(
              "max-w-[760px] italic mt-6 text-16/20",
              "xs:mt-10 xs:text-22/32",
            )}
          >
            If you have a general of project enquiry, please drop me an
            email/messenger
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-[150px] xs:mt-32">
        <div className="items-end text-14/18 hidden xs:flex">© 2023</div>
        <div className="flex ml-auto flex-col items-end">
          <img src="/images/logo-text.svg" alt="" className="h-4 w-fit" />
          <span className="text-12/16 mt-3">
            Product Owner / Web & Mobile Designer
          </span>
          <div className="flex space-x-12">
            {footerRoutes.map((item: FooterRouteTypes, index: number) => (
              <a
                key={index}
                href={item?.to}
                target={item?.target ?? "_self"}
                rel="noreferrer"
                className="uppercase text-14/18 mt-7 hover:text-main"
              >
                {item?.label}
              </a>
            ))}
          </div>
          <span className="mt-8 text-10/14 tracking-wider">
            Copyright ©SHAMIN HAKY
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
