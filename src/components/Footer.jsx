import LinkedInIcon from "../images/linkedin-icon.png";
import EmailIcon from "../images/email-icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/alvaringbom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="mailto:alva.ringbom@gmail.com">
            <img src={EmailIcon} alt="Email" className="social-icon" />
          </a>
        </div>
        <p className="footer-text">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
