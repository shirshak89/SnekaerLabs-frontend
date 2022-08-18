import styled from "styled-components";

const Wrapper = styled.div`
  .bounce {
    height: 550px;
    width: 100%;
    display: flex;
    gap: 0.2em;
    justify-content: center;
    align-items: center;
  }

  .bounce div {
    border-radius: 50%;
    height: 12px;
    width: 12px;
    background-color: #ff490f;
    animation: move 0.5s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite alternate;
  }

  div:nth-child(2) {
    animation-delay: 0.1s;
  }

  div:nth-child(3) {
    animation-delay: 0.2s;
  }

  div:nth-child(4) {
    animation-delay: 0.3s;
  }

  @keyframes move {
    from {
      transform: translateY(0);
      opacity: 0.1;
    }
    to {
      transform: translateY(-100px);
      opacity: 1;
    }
  }
`;

export default Wrapper;
