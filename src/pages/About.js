import "./About.css";
import ProfileImage from "./profile-image.jpg";

function About() {
  return (
    <div className="About">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <p>Some text here</p>
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
    </div>
  );
}

export default About;
