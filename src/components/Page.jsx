import main from '../assets/main.jpg';
import { Slide } from 'react-awesome-reveal';
import vector from '../assets/Vector.svg'


const Page = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:justify-center my-20 sm:items-center md:mx-8"> 
      <div className="">
        
        <Slide direction='left'>
          <img src={vector} className='h-10' alt="" /> 
          <img className='rounded-[200%] rounded-bl-full p-2 h-3/4 ring-8 ring-[#07EAE5]' src={main} alt="Profile" /> 
        </Slide>
      </div>
      <div className="text-left">
        <div className="text-3xl"> 
          my name is<span className="text-[#FF6BCB]">&nbsp; leul dereje</span>
        </div>
        <div className="pt-2 md:pt-3 text-l text-justify"> 
          <p>i am a UI/ux designer and ceo at elites dev co. and also innovation ambassador <br /> at EAII (Ethiopian artificial intelligence institute). Now I am learning Cisco networking <br /> and hardware maintenance as a minor course and software designing as a major course.</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
