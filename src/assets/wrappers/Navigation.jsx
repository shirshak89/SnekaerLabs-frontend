import styled from "styled-components";

const Wrapper = styled.nav`
  border-bottom: 1px solid #dee0ea;
  padding: 2em 3em;
  font-family: "Nunito Sans";

  display: flex;
  justify-content: space-between;
  align-items: center;

  .active {
    color: var(--primary-color);
  }

  .primary-nav {
    width: 80%;

    ul {
      display: flex;
      justify-content: center;

      li {
        text-transform: uppercase;
        font-weight: 600;
        font-size: var(--font-small);
        letter-spacing: 1.2px;
        margin: 0 0.2em;

        a {
          padding: 0.2em 1em;
        }
      }
    }
  }

  .secondary-nav {
    width: 20%;
    display: flex;
    justify-content: center;
    font-size: var(--font-medium);

    a {
      padding: 0em 0.2em;
      margin: 0 0.2em;
    }
  }
`;

export default Wrapper;
