import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import Wrapper from "../assets/wrappers/FilterSidebar";
import FormRow from "../components/FormRow";
import {
  getAllProducts,
  handleFilters,
  clearFilters,
} from "../features/product/productSlice";
import FormRowSelect from "./FormRowSelect";

const initialFilterState = {
  search: "",
  category: "all",
  company: "all",
};

const FilterSidebar = () => {
  const categories = ["all", "outdoor", "lifestyle", "sports", "casual"];

  const [filters, setFilters] = useState(initialFilterState);
  const { isLoading, search, category, company } = useSelector(
    (store) => store.product
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [search, category, company]);

  const handleChange = (e) => {
    if (isLoading) return;

    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleFilters({ name, value }));
    setFilters({ ...filters, [name]: value });
  };

  return (
    <Wrapper>
      <h2>Filter Products</h2>
      <FormRow
        placeholder="Search..."
        name="search"
        type="text"
        value={filters.search}
        handleChange={handleChange}
      />
      <div className="filter-category">
        <label>Category</label>
        <div className="category-btn">
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                name="category"
                value={cat === "all" ? "" : cat}
                onClick={handleChange}
                className={category === cat ? "active" : null}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
      <FormRowSelect
        labelText="Company"
        name="company"
        value={filters.company}
        handleChange={handleChange}
        list={["all", "adidas", "nike", "vans"]}
      />
      <button onClick={() => dispatch(clearFilters())} className="btn">
        Clear Filters
      </button>
    </Wrapper>
  );
};

export default FilterSidebar;
