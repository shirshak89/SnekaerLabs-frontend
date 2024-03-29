import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/MainPage";
import HeroImage from "../assets/images/hero-image/heroImage.png";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import { getFeaturedProducts } from "../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";
import Loading from "../components/Loading";

const MainPage = () => {
  const { products, isLoading } = useSelector((store) => store.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeaturedProducts());
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 580, itemsToShow: 2, itemsToScroll: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

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
      <div className="featured">
        <div className="container">
          <h2>
            <span className="accent-color">Featured</span> Products
          </h2>
          <Carousel breakPoints={breakPoints}>
            {isLoading ? (
              <Loading />
            ) : (
              products.map((data) => {
                return (
                  <Product
                    key={data._id}
                    id={data._id}
                    image={data.image}
                    name={data.name}
                    company={data.company}
                    price={data.price}
                    averageRating={data.averageRating}
                  />
                );
              })
            )}
          </Carousel>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainPage;
