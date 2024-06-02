import mrfresh from '../assets/mr-fresh.gif'


const About = () => {
  return (
    <div className=" mt-12 my-7 flex flex-col-2 items-center justify-between">
      <div className="text justify-evenly"><p>also im a content creator  at elites and on my own channel called the sudo guy
both channels have a lot of good stuffs you should have to <a className="text-red-500" href="https://www.youtube.com/@thesudoguyofficial">subscribe to my channels and pages</a>😁</p></div>
      <div className="img rounded ring-2 mt-12 my-12 i flex" ><img  src={mrfresh} alt="" /></div>
    </div>
  );
};

export default About;
