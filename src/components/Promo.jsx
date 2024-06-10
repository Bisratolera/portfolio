import { useState, useEffect } from 'react';
import leuldev from '../assets/leultdev.jpg';
import qr from '../assets/leultdev_qr.png';

const Promo = () => {
  // Function to generate a random color in hexadecimal format
  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  // State to hold the current color
  const [textColor, setTextColor] = useState(getRandomColor());

  // Function to handle click event and change the color
  const changeColor = () => {
    setTextColor(getRandomColor());
  };

  // Effect to update color gradient every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTextColor(getRandomColor());
    }, 150); // Adjust interval for noticeable gradient transition
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 flex justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Promo</h1>
        <div className="banner flex flex-col sm:flex-row bg-[#9A9ECE] rounded-3xl p-6 items-center gap-12">
          <div className="flex-1 flex justify-center sm:justify-start">
            <img
              src={leuldev}
              alt="Leul Dev"
              className="md:max-w-full lg:h-cover max-w-full h-auto rounded-xl hover:shadow-2xl hover:delay-300"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p
              className="text-xl font-semibold"
              style={{ color: textColor }}
              onClick={changeColor}
            >
              {"-> scan for full info here <-"}
            </p>
          </div>
          <div className="flex-1 flex justify-center sm:justify-end">
            <img
              src={qr}
              alt="QR Code"
              className="md:max-w-full lg:h-44 h-auto rounded-xl hover:drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
