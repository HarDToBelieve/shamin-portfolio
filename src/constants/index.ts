export type CompanyTypes = {
  no: number;
  name: string;
  fullName: string;
  value: "cystack" | "vndc" | "ocd" | "gamefi" | "vncredit";
  title: string;
  subName?: string;
  textColor: string;
  collections: Array<string>;
  liveUrl: string;
  roles: string;
  description: string;
};

export const companies: Array<CompanyTypes> = [
  {
    no: 1,
    name: "CyStack",
    fullName: "CyStack Security",
    liveUrl: "https://cystack.net/",
    roles: "CO-TEAM, PRODUCT DESIGN",
    value: "cystack",
    title:
      "Designing a cybersecurity brand and product for thousands of large and small businesses in Vietnam and around the world.",
    textColor: "text-[#1933F5]",
    description:
      "As a product fullstack design at CyStack Security, I lead design for all platforms including branding indentity, interface for desktop app, mobile app. I worked for three years on the brand and product design, helping CyStack through a major rebrand as the company tripled in size with 15+ security applications and services.",
    collections: [
      "/images/collections/cystack-1.png",
      "/images/collections/cystack-2.png",
      "/images/collections/cystack-3.png",
      "/images/collections/cystack-4.png",
      "/images/collections/cystack-5.png",
      "/images/collections/cystack-6.png",
    ],
  },
  {
    no: 2,
    name: "VNDC Wallet",
    fullName: "VNDC Stablecoin",
    liveUrl: "https://goonus.io/",
    roles: "CO-TEAM, PRODUCT DESIGN",
    value: "vndc",
    title:
      "The project with the vision of becoming a leading digital currency exchange in Vietnam",
    subName: " (Currently renamed Onus)",
    textColor: "text-[#FFCD00]",
    description:
      "With the launch of VNDC Wallet in 2021, VNDC recorded outstanding growth in all indexes. In just 6 months, VNDC Wallet has reached more than 1 million downloads on the App Store and Google Play. 40,000 users/day.\n\nI am responsible for creative direction for mobile apps, product design, branding and marketing. Creating momentum for the next stages on the journey of bringing VNDC to the world.",
    collections: [
      "/images/collections/vndc-1.png",
      "/images/collections/vndc-2.png",
      "/images/collections/vndc-7.png",
      "/images/collections/vndc-8.png",
    ],
  },
  {
    no: 3,
    name: "OCD",
    fullName: "",
    roles: "DESIGNER",
    value: "ocd",
    liveUrl: "https://issuu.com/scsaushi/docs/chuye__n__o__i_so___la__gi_",
    title:
      "Embrace leadership to innovate products in your business & Tet Holiday gifts for employees",
    textColor: "text-[#EE802D]",
    description:
      "The Leadership and Change Newsletter is OCD's annual magazine that provides articles sharing of management knowledge from consultants, technology experts and business managers.",
    collections: [
      "/images/collections/ocd-2.png",
      "/images/collections/ocd-3.png",
      "/images/collections/ocd-4.png",
      "/images/collections/ocd-5.png",
      "/images/collections/ocd-6.png",
    ],
  },
  {
    no: 4,
    name: "GameFi.Org",
    fullName: "Icetea Labs - Gamefi.org Team",
    liveUrl: "https://gamefi.org/",
    roles: "PO, PRODUCT DESIGN",
    value: "gamefi",
    title:
      "Integrates the top popular networks to bring users the best experience and enable diverse projects listed on its platform. ",
    textColor: "text-[#6CDB00]",
    description:
      "Together with my friends at GameFi.org, we marked milestones with GameFi.org - a one-stop destination for Web3 gaming.\n\nWith all determination and grit, GameFi.org crew is now a pioneer to pursue the long-term vision of building digital communities and managing virtual economies for mainstream adoption.",
    collections: [
      "/images/collections/gamefi-1.png",
      "/images/collections/gamefi-2.png",
      "/images/collections/gamefi-3.png",
    ],
  },
  {
    no: 5,
    name: "VietnamCredit",
    fullName: "VietnamCredit Ratings",
    liveUrl: "https://vietnamcredit.com.vn/",
    roles: "DESIGNER",
    value: "vncredit",
    title:
      "Offers the most accurate and comprehensive credit analysis reports in various industries.",
    textColor: "text-[#1184F3]",
    description:
      "Together with VietnamCredit, I created a cohesive online experience for our worldwide clients. We completely overhauled the vietnamcredit.com.vn, streamlining the checkout experience, creating imagery and designing layouts that helped VNC better tell their product stories.",
    collections: [
      "/images/collections/vncredit-2.png",
      "/images/collections/vncredit-3.png",
      "/images/collections/vncredit-4.png",
    ],
  },
];
