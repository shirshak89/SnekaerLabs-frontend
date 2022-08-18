import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  width: 280px;
  border-radius: 8px;
  margin-top: 1em;

  a {
    margin: 0;
  }

  .product-image {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-bottom: none;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 250px;
    }
  }

  .product-info {
    background-color: #1a1a1a;
    color: white;
    padding: 1em;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    display: flex;
    flex-direction: column;

    .product-name,
    .product-brand {
      text-transform: uppercase;
      font-size: var(--font-small);
      letter-spacing: 1.125px;
    }

    .product-brand {
      color: var(--color-gray);
    }

    .product-price {
      font-size: var(--font-medium);
      font-weight: 600;
      letter-spacing: 1.125px;
    }

    .product-name-row,
    .product-price-row {
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        font-size: var(--font-medium);
      }
    }

    .product-name-row {
      svg {
        font-size: 22px;
        color: var(--primary-color);
        transition: transform 250ms ease-out;
      }

      svg:hover {
        cursor: pointer;
        transform: scale(1.3);
      }
    }

    .product-price-row {
      svg {
        color: #ffd700;
      }
    }
  }

  @media (max-width: 1100px) {
    width: 240px;
  }
`;

export default Wrapper;
