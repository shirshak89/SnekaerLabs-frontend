import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: auto;

  label {
    display: block;
    font-size: var(--font-xsmall);
  }

  .form-label {
    text-transform: capitalize;
    letter-spacing: 0.3px;
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
      }

      h2 {
        margin-bottom: var(--margin-1);
        font-weight: 700;
        color: transparent;
        -webkit-text-stroke: 1.6px var(--font-color);
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .btn-submit {
        min-width: 320px;
        font-size: var(--font-xsmall);
        margin: var(--margin-2) 0;
        background-color: black;
        border: 0;
        border-radius: var(--border-1);
        color: white;
        text-transform: uppercase;
        padding: 0.85em 2em;
      }

      p {
        text-align: center;
        font-size: var(--font-xsmall);
      }

      .link-btn {
        border: none;
        background: transparent;
        cursor: pointer;
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
