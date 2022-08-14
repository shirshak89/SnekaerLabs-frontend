import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #1a1a1a;

  .hero {
    min-height: calc(100vh - 100px);
    display: flex;
    margin: 0 auto;
    height: 100%;

    img {
      height: 100%;
      object-fit: contain;
      transform: rotateZ(-15deg);
    }
  }

  .hero-intro,
  .hero-image {
    width: 50%;
    overflow: hidden;
  }

  .hero-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2,
    h3 {
      text-transform: uppercase;
    }

    h2,
    h3,
    p {
      color: var(--color-white);
      line-height: 1.4;
    }

    h2 {
      font-size: var(--font-xxlarge);
      font-weight: 700;
    }

    h3 {
      font-size: var(--font-large);
      margin: 0.5rem 0;
      font-weight: 700;
    }

    p {
      margin: 0.5em 0;
      width: 80%;
      color: var(--color-gray);
      font-size: var(--font-small);
    }

    .btn-collection {
      max-width: 150px;
      padding: 0.675em 1.25em;
      margin: 1em 0;
      background-color: var(--primary-color);
      color: var(--color-black);
      border-radius: var(--border-1);
      font-weight: 500;
      text-transform: uppercase;
    }
  }

  .featured {
    background-color: #f5f5f5;
    padding: 2em 4em;

    .container {
      margin: 0 auto;
    }

    h2 {
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  /* Carousel */

  .rec-pagination {
    display: none;
  }

  .rec-arrow {
    border-radius: 0;
    min-width: 30px;
    width: 30px;
    height: 40px;
    line-height: 40px;
    background-color: transparent;
    border: 0;
    box-shadow: none;
  }

  .rec-arrow:hover {
    background-color: transparent;
  }

  .rec-arrow-right:hover,
  .rec-arrow-left:hover {
    color: var(--primary-color);
  }

  @media (max-width: 1310px) {
    .hero {
      min-height: calc(60vh - 100px);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.5em 0;
    }

    .featured {
      padding: 2em 0;

      h2 {
        text-align: center;
      }
    }

    .hero-intro {
      width: 100%;
      align-items: center;

      h2 {
        font-size: var(--font-xlarge);
      }

      h3 {
        font-size: var(--font-large);
      }

      p {
        text-align: center;
      }
    }
  }

  @media (max-width: 700px) {
    .hero {
      width: 100%;
    }

    .rec-arrow {
      display: none;
    }

    .hero-intro {
      width: 100%;
      align-items: center;

      h2 {
        font-size: var(--font-large);
      }

      h3 {
        font-size: var(--font-regular);
      }
    }
  }
`;

export default Wrapper;
