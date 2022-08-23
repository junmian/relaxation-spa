import styled from "styled-components";

const FooterStyle = styled.footer`
  position: relative;
  width: 100%;
  background-color: #cce6ff;
  color: black;
  height: 30px;
  margin-top: 35px;
`;

const FooterParagraph = styled.p`
  text-align: center;
`;

const Footer = () => {
  return (
    <div>
      <FooterStyle>
        <FooterParagraph>&copy;2022 Relaxation Spa</FooterParagraph>
      </FooterStyle>
    </div>
  );
};

export default Footer;
