import styled from "styled-components";

const Wrapper = styled.aside`
  .filter-container {
    position: sticky;
    top: 0.5em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: #373737;
    border-radius: 5px;
    color: #d3d3d3;
    padding: 1em;
    font-weight: 300;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  button {
    font-size: var(--font-small);
    text-transform: uppercase;
    color: #d3d3d3;
  }

  label {
    margin-bottom: 0.2em;
    text-transform: uppercase;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 0.5em 0.8em;
    background-color: #f4f4f4;
  }

  .form-select {
    width: 60%;
    background-color: #f4f4f4;
    border-radius: 4px;
    text-transform: capitalize;
  }

  .filter-category {
    .category-btn {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.4em;

      button {
        border: 0;
        background-color: transparent;
        margin: 0.1em 0;
      }

      button:hover {
        cursor: pointer;
      }

      .active {
        border-bottom: 2px solid var(--primary-color);
      }
    }
  }

  .clear-filter {
    background-color: black;
    border-radius: 4px;
    padding: 0.4em 1.25em;
  }
`;

export default Wrapper;
