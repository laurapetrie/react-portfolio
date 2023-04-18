import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="Home">
      <div className="main">
        <div className="home-text">
          <motion.h2
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            Hello! I'm Laura
          </motion.h2>
          <motion.h1
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            A frontend developer based in Leeds, UK
          </motion.h1>
          <motion.h3
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            I am passionate about web development, building connections and
            solving problems in a creative way
          </motion.h3>
        </div>
      </div>
      <div className="home-socials">
        <div class="home-social">
          <a
            href="https://github.com/laurapetrie"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
        <div class="home-social">
          <a
            href="https://www.linkedin.com/in/laurapetrie/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div class="home-social">
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

export default Home;
