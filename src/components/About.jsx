import mrfresh from "../assets/mr-fresh.gif";

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-8">
      <div className="text flex-1 mb-8 sm:mb-0 ">
        <h1 className="text-3xl font-bold mb-4 text-white text-center sm:text-left">
          Story time
        </h1>
        <p className="text-white text-justify sm:text-left md:text-justify">
          Back in 2021, I was nothing but an admirer of technology until one of
          my friends,{" "}
          <a href="#" className="text-pink-500">
            Tsehay Goremes
          </a>
          , helped me to join the 2021 summer camp at Techin (Technology and
          Innovation Institute) and discover my true talent. In 2022, I
          continued in the summer camp of EAII (Ethiopian Artificial
          Intelligence Institute) where I learned more about AI and functional
          programming with Python, discovering my true potential through
          projects.
          <br />
          years after year i just found my brother{" "}
          <a href="" className="text-pink-500">
            imran shemsu
          </a>{" "}
          when i started learning hardware and networking at microlink and he
          saw a greatness and opend my eyes to the ways of being good at things
          and business. and also met many guys including our lost brother in
          heart{" "}
          <a href="" className="text-[#fff130]">
            yohannes sintayehu{" "}
          </a>
          may he rest in peace and{" "}
          <a href="" className="text-pink-500">
            ezra mamo
          </a>{" "}
          (elites backend assistant) who thought me javascript, flutter and
          react well.
        </p>
      </div>
      <div className="img flex-1 rounded">
        <img
          src={mrfresh}
          alt="Mr. Fresh"
          className="ml-auto rounded shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;
