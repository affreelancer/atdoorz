import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/styles";
import { categoriesData } from "../../../static/data";

const featuredCategories = categoriesData.filter(category => 
  [1, 2, 3,].includes(category.id)
);

// Define a new slide object
const additionalSlide = {}
//   id: "",
//   title: "",
//   subTitle: "",
//   description: "",
//   link: "",
//   bgimg_Url: "" // Custom background image
// };

// Combine the additional slide with the featured categories
// const slidesToShow = [...featuredCategories, additionalSlide];
// const slidesToShow = [featuredCategories];


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

  return (
    <div className="relative min-h-[70vh] 800px:min-h-[80vh] w-full overflow-hidden">
      <Slider {...settings} className="w-full h-full relative">
        {featuredCategories.map((category, index) => (
          <div key={index} className="w-full h-full">
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${category.bgimg_Url})`,
                minHeight: '70vh',
                height: '100%',
              }}
            >
              <div 
                className={`${styles.section} w-[90%] 800px:w-[60%] p-5 rounded-lg`} 
                style={{
                  background: "rgba(96, 96, 96, 0.12)",
                  borderRadius: "16px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(4.5px)",
                  WebkitBackdropFilter: "blur(4.5px)",
                  // border: "1px solid rgba(96, 96, 96, 0.3)",
                }}
              >
                <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-white font-[600] capitalize`}>
                  {category.title}
                </h1>
                <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
                  {category.subTitle}
                </p>
                <Link to={category.link} className="inline-block">
                  <div className={`${styles.button} mt-5`}>
                    <span className="text-[#fff] font-[Poppins] text-[18px]">Shop Now</span>
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
