import styled from "styled-components";

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1em;

  .filter-category {
    .category-btn {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.4em;

      button {
        text-transform: capitalize;
        border: 0;
        background-color: transparent;
      }

      button:hover {
        cursor: pointer;
      }

      .active {
        border-bottom: 1px solid black;
      }
    }
  }
`;

export default Wrapper;
