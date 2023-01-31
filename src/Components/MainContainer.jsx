import React, { useEffect } from "react";
import '../Components/MainContainer.css'

import AOS from "aos";
import "aos/dist/aos.css";

const MainContainer = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease", once: false });
  });

  return (
    <div className="main_container">
      <div className="box" data-aos="fade-up" data-aos-delay="100"></div>
      <div className="box" data-aos="fade-down" data-aos-delay="50"></div>
      <div className="box" data-aos="fade-down-right" data-aos-delay="20"></div>
      <div className="box" data-aos="zoom-in-up" data-aos-delay="70"></div>
      <div className="box" data-aos="slide-right" data-aos-delay="50"></div>
    </div>
  );
};

export default MainContainer;
