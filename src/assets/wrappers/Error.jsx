import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  line-height: 1;

  h2 {
    font-size: 12em;
    font-weight: 800;
  }

  h3 {
    font-size: 5em;
    font-weight: 600;
  }

  a {
    text-decoration: underline;
  }
`;

export default Wrapper;
