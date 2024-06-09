import mrfresh from "../assets/mr-fresh.gif";

const About = () => {
  return (
    <div className="flex flex-cols-2 sm:justify-between sm:items-center">
      <div className="text justify-evenly">
        <p>
          also im a content creator at elites and on my own channel called the
          sudo guy both channels have a lot of good stuffs you should have to{" "}
          <a
            className="text-red-500"
            href="https://www.youtube.com/@thesudoguyofficial"
          >
            subscribe to my channels and pages
          </a>
          😁
        </p>
      </div>
      <div className="img rounded">
        <img src={mrfresh} alt="" />
      </div>
    </div>
  );
};

export default About;
