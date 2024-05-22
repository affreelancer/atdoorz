import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/styles";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
  };

  const slides = [
    {
      image: "https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg",
      title: "Best Collection for home Decoration",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, assumenda? Quisquam itaque exercitationem labore vel, dolore quidem asperiores, laudantium temporibus soluta optio consequatur aliquam deserunt officia. Dolorum saepe nulla provident.",
      link: "/products",
    },
    {
      image: "https://themes.rslahmed.dev/rafcart/assets/images/banner-3.jpg",
      title: "Stylish Furniture for Your Home",
      description: "Discover our range of stylish and modern furniture to suit your home decor. Quality and comfort combined.",
      link: "/furniture",
    },
    {
      image: "https://themes.rslahmed.dev/rafcart/assets/images/banner-4.jpg",
      title: "Elegant and Modern Designs",
      description: "Upgrade your home with our elegant and modern designs. Perfect for any room and any style.",
      link: "/designs",
    },
  ];

  return (
    <div className="relative min-h-[70vh] 800px:min-h-[80vh] w-full overflow-hidden">
      <Slider {...settings} className="w-full h-full relative">
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full">
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                minHeight: '70vh',
                height: '100%',
              }}
            >
              <div className={`${styles.section} w-[90%] 800px:w-[60%] bg-white bg-opacity-75 p-5 rounded-lg`}>
                <h1
                  className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
                >
                  {slide.title}
                </h1>
                <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
                  {slide.description}
                </p>
                <Link to={slide.link} className="inline-block">
                  <div className={`${styles.button} mt-5`}>
                    <span className="text-[#fff] font-[Poppins] text-[18px]">
                      Shop Now
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
