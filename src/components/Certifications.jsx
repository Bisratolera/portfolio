import { Fade } from "react-awesome-reveal";
import { IoIosTime } from "react-icons/io";

const Certifications = () => {
  return (
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center mt-4 md:mt-20">
        <h1 className="text-3xl font-bold mb-8 text-white">Certifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-[35px] w-11/12 md:w-3/4">
<Fade delay={45}>
<div className="first flex flex-col gap-8">
            {/* Card 1 */}
            <div className="bg-[#866aff]/40 p-8 rounded-lg shadow-lg w-full h-48 flex items-center justify-center">
            <h2 className="text-xl font-semibold text-white">uploaded soon ! &nbsp; <IoIosTime /></h2>
          </div>
          {/* Card 2 */}
          <div className="bg-[#866aff]/40 p-8 rounded-lg shadow-lg w-full h-48 flex items-center justify-center">
            <h2 className="text-xl font-semibold text-white">uploaded soon ! &nbsp; <IoIosTime /></h2>
          </div>
</div>
</Fade>

<Fade>
<div className="second flex flex-col gap-8 mt-12">
            {/* Card 1 */}
            <div className="bg-[#866aff]/40 p-8 rounded-lg shadow-lg w-full h-48 flex items-center justify-center">
            <h2 className="text-xl font-semibold text-white">uploaded soon ! &nbsp; <IoIosTime /></h2>
          </div>
          {/* Card 2 */}
          <div className="bg-[#866aff]/40 p-8 rounded-lg shadow-lg w-full h-48 flex items-center justify-center">
            <h2 className="text-xl font-semibold text-white">uploaded soon ! &nbsp; <IoIosTime /></h2>
          </div>
</div>
</Fade>
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#ffffff] to-[#866aff] blur-[120px] "></div>
      </div>
        </div>
      </div>

  );
};

export default Certifications;
