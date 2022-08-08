import React from "react";
import Wrapper from "../assets/wrappers/Products";
import { BsFillGridFill, BsList } from "react-icons/bs";
import FormRowSelect from "./FormRowSelect";

const Products = () => {
  return (
    <Wrapper>
      <div className="products-sort">
        <div className="products-view">
          <BsFillGridFill /> <BsList />
        </div>
        <hr />
        <FormRowSelect labelText="Sort By" />
      </div>
    </Wrapper>
  );
};

export default Products;
