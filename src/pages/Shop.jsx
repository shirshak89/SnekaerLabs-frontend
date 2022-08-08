import React from "react";
import FilterSidebar from "../components/FilterSidebar";
import Wrapper from "../assets/wrappers/Shop";
import Products from "../components/Products";

const Shop = () => {
  return (
    <Wrapper>
      <FilterSidebar />
      <Products />
    </Wrapper>
  );
};

export default Shop;
