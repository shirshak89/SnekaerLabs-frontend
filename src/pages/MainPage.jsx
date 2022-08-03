import React from "react";
import Wrapper from "../assets/wrappers/MainPage";
import HeroImage from "../assets/images/hero-image/heroImage.png";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <Wrapper>
      <div className="container hero">
        <div className="hero-intro">
          <h2>newest styles</h2>
          <h3>
            Summer Collection <span className="accent-color">2022</span>
          </h3>

          <p>
            Browse our boutique new arrivals for in style clothing and
            accessories. Our collection features new fashion essentials you'll
            love. Shop new arrivals today!
          </p>
          <Link to="/shop">
            <button className="btn btn-collection">Shop &#8594;</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="hero image" />
        </div>
      </div>
    </Wrapper>
  );
};

export default MainPage;
