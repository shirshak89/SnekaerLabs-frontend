import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, auto) 1fr;
  column-gap: 2em;
  margin: 0 auto;
  margin-top: 2em;

  max-width: 1300px;
`;

export default Wrapper;
