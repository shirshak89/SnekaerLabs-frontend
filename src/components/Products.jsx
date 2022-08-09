import { useSelector } from "react-redux/es/exports";
import Product from "./Product";
import Wrapper from "../assets/wrappers/Products";
import { BsFillGridFill, BsList } from "react-icons/bs";
import FormRowSelect from "./FormRowSelect";

const Products = () => {
  const { isLoading, products } = useSelector((store) => store.product);

  return (
    <Wrapper>
      <div className="products-sort">
        <div className="products-view">
          <BsFillGridFill /> <BsList />
        </div>
        <hr />
        <FormRowSelect labelText="Sort By" />
      </div>
      <div className="products-showcase">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          products.map((data) => {
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
          })
        )}
      </div>
    </Wrapper>
  );
};

export default Products;
