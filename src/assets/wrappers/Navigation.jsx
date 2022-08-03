import styled from "styled-components";

const Wrapper = styled.nav`
  border-bottom: 1px solid #dee0ea;
  padding: 2em 3em;
  font-family: "Nunito Sans";

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 20%;

    img {
      min-width: 200px;
      width: 100%;
    }
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
          color: black;
          padding: 0.2em 1em;
        }
      }
    }

    .active {
      color: var(--primary-color);
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

  .close-btn,
  .hamburger {
    display: none;
  }

  @media (max-width: 950px) {
    .primary-nav {
      position: fixed;
      z-index: 999;
      inset: 0 0 0 50%;
      padding: 6em 2em;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);

      ul {
        flex-direction: column;
        gap: 1em;
      }
    }

    .hide {
      transform: translateX(100%);
      transition: transform 350ms ease-out;
    }

    .show {
      transform: translateX(0);
      transition: transform 350ms ease-out;
    }

    .secondary-nav {
      display: none;
    }

    .hamburger {
      display: block;
      position: relative;
      font-size: 1.275em;
    }

    .close-btn {
      display: block;
      position: relative;
      font-size: 1.275em;
      z-index: 9999;
    }
  }
`;

export default Wrapper;
