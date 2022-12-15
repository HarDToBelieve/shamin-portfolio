import WorkSection from "../../components/WorkSection";
import { companies, CompanyTypes } from "../../constants";
import About from "./About";
import Footer from "./Footer";
import ForeWord from "./ForeWord";

const LandingPage = () => {
  return (
    <div className="w-full h-full flex flex-col bg-mainBlack text-white">
      <ForeWord />

      <About />

      {companies.map((item: CompanyTypes, index: number) => (
        <WorkSection
          workData={item}
          theme={index % 2 === 0 ? "light" : "dark"}
        />
      ))}

      <Footer />
    </div>
  );
};

export default LandingPage;
