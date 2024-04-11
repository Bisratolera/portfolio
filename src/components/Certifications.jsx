import certification from "../assets/certification.png";
import { Fade } from "react-awesome-reveal";

const Certifications = () => {
  return (
    <Fade delay={4.5}>
      <div className="text-3xl text-center mt-4 md:mt-28 text-white">
        <h1>Certifications</h1>
        <div className="certification flex justify-center items-center mt-4 md:mt-8">
          <img className="h-64 md:h-96" src={certification} alt="" />
        </div>
      </div>
    </Fade>
  );
};

export default Certifications;
