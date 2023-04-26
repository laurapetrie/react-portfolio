import "./Home.css";
import Socials from "./Socials";
import { motion } from "framer-motion";

const textTransition = { ease: "linear", duration: 1, delay: 0.2 };

function Home() {
  return (
    <div className="Home">
      <div className="main">
        <div className="home-text">
          <motion.h2
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={textTransition}
          >
            Hello! I'm Laura
          </motion.h2>
          <motion.h1
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={textTransition}
          >
            A frontend developer based in Leeds, UK
          </motion.h1>
          <motion.h3
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={textTransition}
          >
            I am passionate about web development, building connections and
            solving problems in a creative way
          </motion.h3>
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default Home;
