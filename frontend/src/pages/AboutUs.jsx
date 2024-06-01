import React from "react";
import Header from "../components/Layout/Header";
import Services from "../components/About/Services";
import Statistics from "../components/About/Statistics";
import GrowthSection from "../components/About/GrowthSection";
import Awards from "../components/About/Awards";
import Leaders from "../components/About/Leaders";
import Footer from "../components/Layout/Footer";
import HeaderAbout from "../components/About/HeaderAbout";
import Breadcrumb from "../components/About/Breadcrumb";
import MainSection from "../components/About/Mainsection";

const AboutUs = () => {
  return (
    <>
        <Header/>
    <div className="font-Poppins">
        <MainSection/>
        <Breadcrumb />
      <HeaderAbout />
      <Services />
      <Statistics />
      <GrowthSection />
      <Awards />
      <Leaders />
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
