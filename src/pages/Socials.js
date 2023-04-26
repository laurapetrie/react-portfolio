import "./Socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

function Socials() {
  return (
    <div className="Socials">
      <div className="home-socials">
        <div className="home-social">
          <a
            href="https://github.com/laurapetrie"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
        <div className="home-social">
          <a
            href="https://www.linkedin.com/in/laurapetrie/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="home-social">
          <a
            href="https://www.instagram.com/rosy_codes/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Socials;
