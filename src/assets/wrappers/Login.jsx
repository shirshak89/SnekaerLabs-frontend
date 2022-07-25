import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--background-color);
  display: flex;
  height: 100vh;
  overflow: auto;

  label {
    display: block;
    font-size: var(--font-xsmall);
    text-transform: capitalize;
  }

  .form-content {
    padding: 2em;
    width: 50%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 2em;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .login-form {
      display: flex;
      justify-content: center;
      align-items: center;

      .form-row {
        margin: var(--margin-3) 0;
      }

      .form-input {
        width: 320px;
        max-width: 400px;
        font-size: var(--font-small);
        color: var(--font-color-light);
      }

      h2 {
        margin-bottom: var(--margin-1);
        font-weight: 600;
        color: transparent;
        -webkit-text-stroke: 1.3px var(--font-color);
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }

      .btn-submit {
        min-width: 320px;
        font-size: var(--font-xsmall);
        margin: var(--margin-2) 0;
      }

      p {
        text-align: center;
        font-size: var(--font-xsmall);
        color: var(--font-color-light);
      }

      .link-btn {
        border: none;
        background: transparent;
        cursor: pointer;
        font-weight: 500;
        text-decoration: underline;
      }

      .link-btn:hover {
        color: var(--primary-color);
      }

      .forgot-remember {
        display: flex;
        justify-content: space-between;
      }

      [type="checkbox"] {
        vertical-align: text-top;
      }
    }

    span {
      font-size: var(--font-xsmall);
    }
  }

  .brand-content {
    width: 50%;
    overflow: hidden;

    img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 740px) {
    flex-direction: column;
    height: auto;

    .brand-content {
      width: 100%;
      order: 1;
      height: 250px;
    }

    .form-content {
      width: 100%;
      order: 2;
    }
  }
`;

export default Wrapper;
