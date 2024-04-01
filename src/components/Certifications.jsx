import certification from "../assets/certification.png";
import { Fade } from "react-awesome-reveal";

const Certifications = () => {
  return (
    <Fade delay={4.5}>
      <div className="text-3xl text-center mt-4 md:mt-28 text-white"> {/* Added md:mt-28 */}
        <h1>Certifications</h1>
        <div className="certification flex flex-row justify-center items-center mt-8 md:mt-16"> {/* Added md:mt-16 */}
          <img className="h-96" src={certification} alt="" /> {/* Added h-36 */}
        </div>
        <p className="flex text-center justify-center mt-8 md:mt-32">one from &nbsp; <span className="text-[#ffc72e]">techin</span> &nbsp; and <span className="text-[#ffc72e]">&nbsp; one from EAII</span></p> {/* Added md:mt-32 */}
      </div>
    </Fade>
  );
};

export default Certifications;
