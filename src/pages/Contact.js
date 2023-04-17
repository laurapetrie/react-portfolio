import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="Contact">
      <div className="main">
        <h1>Contact me</h1>
        <h2 className="mb-4">I'd love to connect with you...</h2>
        <div className="contact-socials">
          <p>
            <a href="mailto:laurajrpetrie@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            laurajrpetrie@gmail.com
          </p>
          <p>
            <a
              href="https://github.com/laurapetrie"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            GitHub
          </p>

          <p>
            <a
              href="https://www.linkedin.com/in/laurapetrie/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            LinkedIn
          </p>
          <p>
            <a
              href="https://www.instagram.com/rosy_codes/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            Instagram
          </p>
          <p>
            <a href="/" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faFile} />
            </a>
            Curriculum Vitae
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
