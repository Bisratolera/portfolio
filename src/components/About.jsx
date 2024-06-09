
import mrfresh from "../assets/mr-fresh.gif";

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-8">
      <div className="text flex-1 mb-8 sm:mb-0 sm:mr-8">
        <h1 className="text-3xl font-bold mb-4 text-white text-center sm:text-left">
          Blog
        </h1>
        <p className="text-white text-center sm:text-left">
          Back in 2021, I was nothing but an admirer of technology until one of
          my friends,{" "}
          <a href="#" className="text-pink-500">
            Tsehay Goremes
          </a>, helped me to join the 2021 summer camp at Techin (Technology and
          Innovation Institute) and discover my true talent. In 2022, I continued
          in the summer camp of EAII (Ethiopian Artificial Intelligence Institute)
          where I learned more about AI and functional programming with Python,
          discovering my true potential through projects.
          <br /> <br />
          If you want to contact me, &nbsp;
          <a className="text-red-500" href="/">
            here is my social address
          </a>
          😁
        </p>
      </div>
      <div className="img flex-1 rounded">
        <img src={mrfresh} alt="Mr. Fresh" className="rounded shadow-lg" />
      </div>
    </div>
  );
};

export default About;
