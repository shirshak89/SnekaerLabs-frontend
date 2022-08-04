import React, { useEffect } from "react";
import { getFeaturedProducts } from "../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const { products, isLoading } = useSelector((store) => store.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeaturedProducts());
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return products?.map((data) => {
    return (
      <div className="carousel-item">
        <img src={data.image} alt="shoe image" />
      </div>
    );
  });
};

export default Product;
