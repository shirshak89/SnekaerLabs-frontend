import { useDispatch, useSelector } from "react-redux/es/exports";
import Product from "./Product";
import Wrapper from "../assets/wrappers/Products";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useState } from "react";
import { handleFilters } from "../features/product/productSlice";

const Products = () => {
  const { isLoading, products } = useSelector((store) => store.product);
  const [filter, setFilter] = useState({ sort: "" });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (isLoading) return;

    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleFilters({ name, value }));
    setFilter({ [name]: value });
  };

  return (
    <Wrapper>
      <div className="products-sort">
        <div className="products-view">
          <BsFillGridFill /> <BsList />
        </div>
        <hr />
        <div className="form-row">
          <label htmlFor="sort" className="form-label">
            Sort By
          </label>
          <select
            name="sort"
            value={filter.sort}
            id="sort"
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Most Recent</option>
            <option value="name">Name (A-Z)</option>
            <option value="-name">Name (Z-A)</option>
            <option value="-price">Price (H-L)</option>
            <option value="price">Name (L-H)</option>
          </select>
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="products-showcase">
          {products.map((data) => {
            return (
              <Product
                key={data._id}
                image={data.image}
                name={data.name}
                company={data.company}
                price={data.price}
                averageRating={data.averageRating}
              />
            );
          })}
        </div>
      )}
    </Wrapper>
  );
};

export default Products;
