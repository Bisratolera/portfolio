import main from "../assets/main.jpg";
import { Slide } from "react-awesome-reveal";

const Page = () => {
  return (
    <div className="grid grid-cols-2 gap-20 sm:justify-center my-20 sm:items-center md:mx-8">
      <div className="">
        <Slide direction="left">
          <img
            className="rounded-tl-[120px] rounded-br-[120px] p-2 ring-8 gradient-ring h-fit w-auto "
            src={main}
            alt="Profile"
          />
        </Slide>
      </div>
      <div className="text-left">
        <div className="text-3xl text-white">
          my name is<span className="text-[#FF6BCB]">&nbsp; leul dereje</span>
        </div>
        <div className="pt-2 md:pt-3 text-l text-justify">
          <p>
            also im a content creator at elites and on my own channel called the
            sudo guy both channels have a lot of good stuffs you should have to
            <a href="https://www.youtube.com/@thesudoguyofficial">
              subscribe to my channel
            </a>
            😁
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
