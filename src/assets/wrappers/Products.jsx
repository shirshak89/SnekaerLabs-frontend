import styled from "styled-components";

const Wrapper = styled.div`
  .products-sort {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1.5em;
  }

  label {
    display: inline-block;
    margin-right: 0.5em;
  }

  hr {
    width: 100%;
  }

  svg {
    font-size: var(--font-xmedium);
    border: 1px solid black;
    border-radius: 2px;
    padding: 0.1em;
  }

  .products-showcase {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 2em;
    justify-items: center;

    svg {
      border: none;
    }
  }
`;

export default Wrapper;
