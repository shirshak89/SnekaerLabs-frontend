import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #1a1a1a;

  .hero {
    min-height: calc(100vh - 100px);
    display: flex;
    margin: 0 auto;
    height: 100%;
  }

  .hero-intro,
  .hero-image {
    width: 50%;
  }

  .hero-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

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
      color: #868686;
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

  img {
    height: 100%;
    object-fit: contain;
    transform: rotateZ(-15deg);
  }
`;

export default Wrapper;
