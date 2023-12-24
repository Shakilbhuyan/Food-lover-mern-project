import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../../public/hamburger-494706_1280.jpg'
import slider2 from '../../../../public/meal-2834549_1280.jpg'
import slider3 from '../../../../public/pizza-329523_1280.jpg'
import slider4 from '../../../../public/salmon-518032_1280.jpg'



const Banner = () => {
 
    return (
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}>
        <div className="relative h-[720px]">
      <img src={slider1}  alt="Slider 3" /> 
      <p className="absolute left-1/4 text-6xl text-red-600 top-1/2">
        Legend 1
      </p>
    </div>
      <div className="relative h-[720px]">
      <img src={slider2}  alt="Slider 3" /> 
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      <p className="absolute left-1/4 text-6xl text-red-600 top-1/2">
        Legend 2
      </p>
    </div>
      <div className="relative h-[720px]">
      <img src={slider3}  alt="Slider 3" /> 
      <p className="absolute left-1/4 text-6xl text-red-600 top-1/2">
        Legend 3
      </p>
    </div>
    <div className="relative h-[720px]">
      <img src={slider4}  alt="Slider 3" /> 
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
      <p className="absolute left-1/4 text-6xl text-red-600 top-1/2">
        Legend 4
      </p>
    </div>
  </Carousel>
    );
};

export default Banner;