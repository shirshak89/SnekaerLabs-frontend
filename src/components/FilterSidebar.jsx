import React, { useState } from "react";
import Wrapper from "../assets/wrappers/FilterSidebar";
import FormRow from "../components/FormRow";
import FormRowSelect from "./FormRowSelect";

const initialFilterState = {
  search: "",
  category: "all",
  company: "all",
};

const FilterSidebar = () => {
  const [filters, setFilters] = useState(initialFilterState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFilters({ ...filters, [name]: value });
  };

  const category = ["all", "outdoor", "lifestyle", "sports", "casual"];

  console.log(filters);

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
          {category.map((cat) => {
            return (
              <button
                key={cat}
                name="category"
                value={cat === "all" ? "" : cat}
                onClick={handleChange}
                className={filters.category === cat ? "active" : null}
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
      <button className="btn">Clear Filters</button>
    </Wrapper>
  );
};

export default FilterSidebar;
