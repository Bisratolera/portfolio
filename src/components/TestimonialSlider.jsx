import { useState } from 'react';
import { testimonials } from '../data/testimonials'; // Make sure you have a testimonials array

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative py-10 flex h-screen justify-center items-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
        <div className="flex items-center justify-center">
          <button
            className="absolute left-0 p-2 bg-gray-500/40 rounded-full hover:bg-gray-700"
            onClick={handlePrev}
          >
            <span className="text-white">{"<"}</span>
          </button>
          <div className="w-full max-w-3xl overflow-hidden relative">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="p-8 bg-gray-500/40 rounded-lg shadow-lg mx-4 flex items-center gap-4">
                    <img
                      src={testimonial.profilePic}
                      alt={`${testimonial.author}'s profile`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-lg italic mb-2">{testimonial.text}</p>
                      <h3 className="text-xl font-semibold">{testimonial.author}</h3>
                      <p className="text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute right-0 p-2 bg-gray-800 rounded-full hover:bg-gray-700"
            onClick={handleNext}
          >
            <span className="text-white">{">"}</span>
          </button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-500'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
