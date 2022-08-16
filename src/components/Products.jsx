import { useDispatch, useSelector } from "react-redux/es/exports";
import Product from "./Product";
import Wrapper from "../assets/wrappers/Products";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useState } from "react";
import { handleFilters } from "../features/product/productSlice";
import Loading from "./Loading";

const Products = () => {
  const { isLoading, products, page, totalPages } = useSelector(
    (store) => store.product
  );

  const [filter, setFilter] = useState({ sort: "" });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (isLoading) return;

    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleFilters({ name, value }));
    setFilter({ [name]: value });
  };

  const handlePageChange = (change) => {
    const name = "page";

    if (change === "-") {
      if (page <= 1) {
        const value = 1;
        return dispatch(handleFilters({ name, value }));
      }

      const value = page - 1;
      return dispatch(handleFilters({ name, value }));
    }

    const value = page + 1;
    dispatch(handleFilters({ name, value }));
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
            <option value="price">Price (L-H)</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <Loading />
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

      <div className="pagination">
        {page > 1 ? (
          <button onClick={() => handlePageChange("-")}>previous</button>
        ) : (
          <button disabled onClick={() => handlePageChange("-")}>
            previous
          </button>
        )}

        <div className="jump-page">
          Page
          <select
            name="sort"
            value={filter.sort}
            id="sort"
            onChange={handleChange}
            className="form-select"
          >
            <option value="">1</option>
            <option value="name">2</option>
            <option value="-name">3</option>
            <option value="-price">4</option>
            <option value="price">4</option>
          </select>
          <p>/{totalPages}</p>
        </div>

        {page === totalPages ? (
          <button disabled onClick={() => handlePageChange("+")}>
            next
          </button>
        ) : (
          <button onClick={() => handlePageChange("+")}>next</button>
        )}
      </div>
    </Wrapper>
  );
};

export default Products;
