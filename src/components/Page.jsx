import profile2 from '../assets/profile2.png'
import { Slide } from 'react-awesome-reveal';

const Page = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center mx-4 md:mx-28 text-white pt-4 md:pt-32"> {/* Adjusted flex direction and mx values */}
      <div className="mr-0 md:mr-8 mb-8 md:mb-0 w-full md:w-auto"> {/* Adjusted md:mr-0, md:mb-8, and added w-full md:w-auto */}
        <div className="text-3xl pt-4 md:pt-8"> {/* Adjusted pt values */}
          my name is<span className="text-[#07EAE5]">&nbsp; leul dereje</span>
        </div>
        <div className="pt-2 md:pt-3 text-justify"> {/* Adjusted pt value */}
          <p>i am a UI/ux designer and ceo at elites dev co.and also innovation ambassador <br /> at EAII (Ethiopian artificial intelligence institute)now i am learning cisco networking <br /> and hardware maintenance as minor course and software designing as a major course.</p>
        </div>
      </div>
      <div>
        <Slide direction='right'>
          <img className='h-auto md:h-96 w-full md:w-auto' src={profile2} alt="Profile" /> {/* Adjusted image size */}
        </Slide>
      </div>
    </div>
  );
}

export default Page;
