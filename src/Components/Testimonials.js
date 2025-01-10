
import React from 'react';
import Slider from 'react-slick';
import { Star } from 'lucide-react';
import Image1 from '../assets/images/client-sm-1.jpg';
import Image2 from '../assets/images/client-sm-2.jpg';
import Image3 from '../assets/images/client-sm-3.jpg';
import Image4 from '../assets/images/client-sm-4.jpg';

// Note: You'll need to import these in your main CSS file:
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dennis Jacques",
      position: "User from USA",
      image: Image1,
      content: "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry."
    },
    {
      name: "Jay Shah",
      position: "Founder at Icomatic Pvt Ltd",
      image: Image2,
      content: "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure."
    },
    {
      name: "Debines Jackab",
      position: "User from USA",
      image: Image3,
      content: "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry."
    },
    {
      name: "Jack mickal",
      position: "Founder at Icomatic Pvt Ltd",
      image: Image4,
      content: "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure."
    }
    // Add more testimonials if needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ],
    customPaging: (i) => (
      <div className="w-3 h-3 mx-1 rounded-full border-2 border-red-500 transition-all duration-300 "></div>
    ),
    dotsClass: "slick-dots !flex justify-center items-center mt-8"
  };

  const renderStars = () => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star 
          key={index} 
          className="w-4 h-4 fill-yellow-400 text-yellow-400" 
        />
      ))}
    </div>
  );

  return (
    <div id='testimonial' className="bg-gray-900 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Background Text */}
        <div>
          {/* Know Me More Section */}
          <div className="relative flex justify-center">
          <h2 className="text-gray-500 text-[150px] font-bold absolute -top-20 opacity-20">
            TESTIMONIALS
          </h2>
            <h3 className="text-3xl font-bold mb-12 pt-8">
              Client Speaks
              <div className="w-12 h-0.5 bg-red-500 mt-2"></div>
            </h3>
          </div>

          {/* Testimonials Slider */}
          <div className="testimonial-slider">
          <style>
              {`
                .slick-dots .slick-active div {
                  background-color: #ef4444;
                }
                .slick-slide {
                  padding: 0 1rem;
                }
              `}
            </style>

            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="outline-none">
                  <div className="bg-gray-800 p-8 rounded-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                    {renderStars()}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;