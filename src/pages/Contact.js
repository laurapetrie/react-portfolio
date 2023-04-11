import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="Contact">
      <div className="main">
        <h1>Contact me</h1>
        <h2 className="mb-5">I'd love to connect with you...</h2>
        <div className="contact-socials">
          <p>
            <a href="mailto:laurajrpetrie@gmail.com">laurajrpetrie@gmail.com</a>
          </p>
          <p>
            <a
              href="https://github.com/laurapetrie"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithubSquare} /> GitHub
            </a>
          </p>

          <p>
            <a
              href="https://www.linkedin.com/in/laurapetrie/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/rosy_codes/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagramSquare} /> Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
