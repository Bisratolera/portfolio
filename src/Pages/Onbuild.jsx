import Lottie from 'react-lottie';
import animationData from '../assets/lottie.json'; 
import '../../src/OnBuild.css';

const OnBuild = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="construction-container">
      <div className="animation-container">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <h1>We are working on something amazing!</h1>
      <p>Our website is currently under construction. We will be here soon with our new awesome site 😊</p>
    </div>
  );
};

export default OnBuild;
