import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../assets/wrappers/SingleProduct";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getSingleProduct } from "../features/product/productSlice";
import Loading from "../components/Loading";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const SingleProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { singleProduct, isLoading } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getSingleProduct(params.id));
  }, []);

  return (
    <Wrapper className="container">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="product">
          <div className="product-image">
            <img src={singleProduct[0]?.image} alt="shoe-image" />
          </div>
          <div className="product-details">
            <h2>{singleProduct[0]?.name}</h2>
            <div className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span>({singleProduct[0]?.numOfReviews} customers review)</span>
            </div>
            <p className="product-price">
              Rs <span>{singleProduct[0]?.price}</span>
            </p>
            <p className="product-description">
              {singleProduct[0].description}
            </p>
            <div className="other-details">
              <p className="info">
                <span>In Stock :</span> {singleProduct[0].inventory}
              </p>
              <p className="info">
                <span>Company :</span> {singleProduct[0].company}
              </p>
              <p className="info">
                <span>Category :</span> {singleProduct[0].category}
              </p>
            </div>
            <button className="btn cart-btn">Add To Cart</button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default SingleProduct;
