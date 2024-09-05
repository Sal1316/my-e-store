import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styled from "styled-components";

//#region Styled Components
const FooterContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;

  svg {
    font-size: 36px;
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      font-size: 28px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

const FooterText = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;
//#endregion

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        <a
          href="https://www.instagram.com/btr1welding/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.facebook.com/your_facebook_account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.youtube.com/your_youtube_account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon />
        </a>
      </SocialMediaContainer>
      <FooterText>&copy; 2024 BTR1Corporation</FooterText>
    </FooterContainer>
  );
};

export default Footer;
