import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faLinkedin,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const fontStyles = { color: "var(--contrast-color)", fontSize: "1.75rem" };

function Contact() {
  return (
    <div className="Contact">
      <div className="main">
        <h1>Contact me</h1>
        <h2 className="mb-4">I'd love to connect with you...</h2>
        <div className="contact-socials">
          <p>
            <a href="mailto:laurajrpetrie@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} style={fontStyles} />{" "}
              laurajrpetrie@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://github.com/laurapetrie"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithubSquare} style={fontStyles} />{" "}
              GitHub
            </a>
          </p>

          <p>
            <a
              href="https://www.linkedin.com/in/laurapetrie/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} style={fontStyles} /> LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/rosy_codes/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagramSquare} style={fontStyles} />{" "}
              Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
