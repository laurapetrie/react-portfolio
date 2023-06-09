import "./About.css";
import Socials from "./Socials";
import ProfileImage from "../images/about_image.jpg";

function About() {
  return (
    <div className="About">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="about-text col-md-8">
              <h1>About</h1>
              <h4 className="mb-3">From florist to frontend...</h4>
              <p>
                For myself and as for many people the pandemic created a jolt to
                the system. It changed the way I thought about my future and
                gave me the push to set myself a new challenge.
              </p>
              <p>
                I have been a florist for around 15 years, both in the retail
                and wedding and events environments. I love how rewarding it can
                be to see a job through from initial concept to completion.
                Customer satisfaction, teamwork and creative problem solving are
                the cornerstones of the profession.
              </p>
              <p>
                Disruption to the status quo and a desire to try something new
                led me quite unexpectedly down the developer path. After trying
                various self-directed courses I finally found SheCodes, which
                has given me the tools to explore this world. Coding taps into
                my need to build and create and so far I'm loving the journey...
              </p>
            </div>
            <div className="col-md-4 mt-5 pt-4">
              <img
                src={ProfileImage}
                className="profile-picture img-fluid"
                alt="Laura Petrie"
              />
            </div>
          </div>
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default About;
