import "./index.css";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa6";
import logos from "../Assets/Suubi-logo.png";
import { useRef, useState } from 'react';

const Footer = () => {
  const footerRef = useRef(null);
  const aboutUsRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <footer id="footer" ref={footerRef}>
        <div className="footer-section">
          <img src={logos} alt="Suubi-Logo" className="logos" />
        </div>
        <div className="footer-content" ref={aboutUsRef}>
          <h4>About Us</h4>
          <p onClick={scrollToAboutUs}>Mission</p>
          <p onClick={scrollToAboutUs}>The Team</p>
        </div>
        <div className="footer-content">
          <h4>Products</h4>
          <p>Suubi SMS</p>
          <p>Suubi App</p>
        </div>
        <div className="footer-content">
          <h4>Get In Touch</h4>
          <p>616 Korongo Road,off Ndege Road,Karen</p>
          <p>info@suubi.com</p>
          <div className="icons">
            <FaTwitter alt="twitter-icon" className="Icons" />
            <FaFacebook alt="facebook-icon" className="Icons" />
            <FaGoogle alt="google-icon" className="Icons" />
          </div>
        </div>
      </footer>
      {isMenuOpen && (
        <div className="hamburger-menu">
          {/* Add your hamburger menu content here */}
        </div>
      )}
    </div>
  );
};

export default Footer;