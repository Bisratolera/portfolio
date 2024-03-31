import profile2 from '../assets/profile2.png'
import { Slide } from 'react-awesome-reveal';
const Page = () => {
  return (
    <div className="flex justify-center mx-28 text-white pt-32">
      <div className="mr-8">
        <div className="text-3xl pt-28">my name is<span className="text-[#07EAE5]">&nbsp; leul dereje</span></div>
        <div className="pt-3 text-justify">
          <p>i am a UI/ux designer and ceo at elites dev co.and also innovation ambassador <br /> at EAII (Ethiopian artificial intelligence institute)now i am learning cisco networking <br /> and hardware maintenance as minor course and software designing as a major course.</p>
        </div>
      </div>
      <div>
        <Slide direction='right'>
        <img className='h-96 w-fit' src={profile2} alt="Profile" />
        </Slide>
      </div>
    </div>
  );
}

export default Page;
