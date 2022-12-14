import React from "react";
import { SEND_GMAIL_URL } from "../../utils";

const footerRoutes = [
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
    <div className="flex flex-col w-full pt-[120px] pb-[60px] pr-[110px] pl-[80px]">
      <div className="flex">
        <span className="text-20/28 font-bold">03/</span>
        <div className="flex flex-col ml-32">
          <span className="text-80/80 font-bold font-cas">Get In Touch</span>
          <span className="max-w-[760px] mt-10 italic text-22/32">
            If you have a general of project enquiry, please drop me an
            email/messenger
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-32 pl-8">
        <div className="flex items-end text-14/18">© 2022</div>
        <div className="flex ml-auto flex-col items-end">
          <img src="/images/logo-text.svg" alt="" className="h-4 w-fit" />
          <span className="text-12/16 mt-3">
            Product Owner / Web & Mobile Designer
          </span>
          <div className="flex space-x-12">
            {footerRoutes.map((item: any, index: number) => (
              <a
                key={index}
                href={item?.to}
                target={item?.target ?? "_self"}
                rel="noreferrer"
                className="uppercase text-14/18 mt-7 hover:underline"
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
