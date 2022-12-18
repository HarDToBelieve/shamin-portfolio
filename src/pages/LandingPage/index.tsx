import { useEffect, useRef } from "react";
import WorkSection from "../../components/WorkSection";
import { companies, CompanyTypes } from "../../constants";
import About from "./About";
import Footer from "./Footer";
import ForeWord from "./ForeWord";

const scrollOptions: any = {
  behavior: "smooth",
  block: "start",
};

const LandingPage = () => {
  const aboutRef = useRef<any>(null);
  const workRef = useRef<any>(null);

  useEffect(() => {
    const onHashChange = () => {
      switch (window.location.hash) {
        case "#about":
          aboutRef.current.scrollIntoView(scrollOptions);
          break;
        case "#works":
          workRef.current.scrollIntoView(scrollOptions);
          break;
        default:
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          break;
      }
    };

    window.addEventListener("hashchange", onHashChange);

    return () => removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-mainBlack text-white">
      <ForeWord />

      <About ref={aboutRef} />

      <div ref={workRef}>
        {companies.map((item: CompanyTypes, index: number) => (
          <WorkSection
            key={index}
            workData={item}
            theme={index % 2 === 0 ? "light" : "dark"}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
