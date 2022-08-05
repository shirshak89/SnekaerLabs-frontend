import React from "react";
import Wrapper from "../assets/wrappers/Product";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

const Product = ({ image, name, company, price, averageRating }) => {
  return (
    <>
      <Wrapper>
        <div className="product-image">
          <img src={image} alt="shoe image" />
        </div>
        <div className="product-info">
          <div className="product-name-row">
            <p className="product-name">{name}</p>
            <AiOutlineHeart />
          </div>
          <p className="product-brand">{company}</p>
          <div className="product-price-row">
            <p className="product-price">{price}</p>
            <div className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Product;
