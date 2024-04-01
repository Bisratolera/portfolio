import { Fade, Slide } from "react-awesome-reveal";
import audiovisuals from "../assets/audiovisuals.png";
import programming from "../assets/programming.png";
import tools from "../assets/tools.png";
const About = () => {
  return (
    <div className="text-white mx-20 my-7">
      <Fade delay={4} cascade damping={0.5}>
        <h1 className="text-4xl mb-8">who i am</h1>
      </Fade>
      <Slide direction="up">
        <p>
          as i mentioned before i am just somebody who tries to discover
          different skills and knowledges
          <br />
          here are some lists of ma skills
        </p>
      </Slide>
      <Fade direction="up">
        <div className="text-xl skills grid text-center justify-center items-center mt-20 gap-4">
          <h1>audio visual tools</h1>
          <br />
          <img className="sm:h-[12vw] md:h-20 w-fit mx-auto" src={audiovisuals} alt="" />
          <h1>programming langs</h1>
          <br />
          <img className="sm:h-[12vw] md:h-20 w-fit mx-auto" src={programming} alt="" />
          <h1>hardware and software tools</h1>
          <br />
          <img className="sm:h-[12vw] md:h-20 w-fit mx-auto" src={tools} alt="" />
        </div>
      </Fade>
    </div>
  );
};

export default About;
