import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 80vh;

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
    min-height: 500px;

    svg {
      border: none;
    }
  }

  .pagination {
    display: flex;
    justify-content: space-between;
    margin: 2em 0;

    .jump-page {
      display: flex;

      select {
        margin: 0 0.2em;
      }
    }

    button {
      font-weight: 500;
      padding: 0.4em 0.3em;
      font-size: var(--font-small);
      text-transform: uppercase;
      border: 0;
      background-color: transparent;
    }

    button:hover {
      cursor: pointer;
      color: white;
      border-radius: 4px;
      border-bottom: 1px solid black;
      background-color: #373737;
    }
  }
`;

export default Wrapper;
