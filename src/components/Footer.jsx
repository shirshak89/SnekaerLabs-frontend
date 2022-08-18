import Wrapper from "../assets/wrappers/Footer";

const Footer = () => {
  const today = new Date().getFullYear();
  return <Wrapper>© {today} SneakerLabs. All rights reserved</Wrapper>;
};

export default Footer;
