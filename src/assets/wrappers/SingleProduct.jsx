import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2em 0;

  .product {
    display: flex;
    justify-content: space-between;
    gap: 2em;

    .product-image {
      width: 50%;

      img {
        border-radius: 4px;
        border: 1px solid gainsboro;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 3px;
        aspect-ratio: 1;
        object-fit: cover;
        object-position: center;
      }
    }

    .product-details {
      width: 50%;
      display: flex;
      flex-direction: column;
      row-gap: 0.4em;

      h2 {
        color: var(--color-black);
        font-size: var(--font-xlarge);
        text-transform: uppercase;
        font-weight: 600;
      }

      .stars {
        display: flex;
        align-items: center;

        span {
          color: gray;
          margin-left: 0.5em;
        }

        svg {
          font-size: var(--font-medium);
          color: #ffd700;
        }
      }

      .product-price {
        font-size: var(--font-medium);

        span {
          font-size: var(--font-large);
          font-weight: 700;
        }
      }

      .product-description {
        color: gray;
        line-height: 1.7;
      }

      .other-details {
        color: gray;

        .info {
          width: 300px;
          display: grid;
          grid-template-columns: 125px 1fr;
          margin: 0.5em;

          span {
            font-weight: 600;
          }
        }
      }

      .cart-btn {
        color: gainsboro;
        align-self: flex-start;
        background-color: black;
        border-radius: 4px;
        padding: 0.4em 1.25em;
      }
    }
  }
`;

export default Wrapper;
