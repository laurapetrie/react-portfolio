import "./Home.css";
import ProfileImage from "./profile-image.jpg";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="home-text col-8">
            <h2>Hello! I'm Laura</h2>
            <h1>A frontend developer based in Leeds, UK</h1>
            <h3>
              I am passionate about web development, building connections and
              solving problems in a creative way
            </h3>
          </div>
          <div className="col-4">
            <img
              src={ProfileImage}
              className="profile-picture"
              alt="Laura Petrie"
            />
          </div>
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
