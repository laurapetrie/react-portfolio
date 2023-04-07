import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="main">
        <div className="home-text">
          <h2>Hello! I'm Laura</h2>
          <h1>A frontend developer based in Leeds, UK</h1>
          <h3>
            I am passionate about web development, building connections and
            solving problems in a creative way
          </h3>
        </div>
      </div>
      <div className="home-socials">
        <div class="home-social">
          <a
            href="https://github.com/laurapetrie"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </div>
        <div class="home-social">
          <a
            href="https://www.linkedin.com/in/laurapetrie/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div class="home-social">
          <a
            href="https://www.instagram.com/rosy_codes/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
