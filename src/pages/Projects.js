import "./Projects.css";
import Socials from "./Socials";
import ReactWeatherApp from "../images/react-weather-app.png";
import ReactDictionaryApp from "../images/react-dictionary-app.png";
import ResponsiveWebsite from "../images/responsive-website.png";
import JavascriptWeatherApp from "../images/vanillajs-weather-app.png";

function Projects() {
  return (
    <div className="Projects">
      <div className="main">
        <h1>Projects</h1>
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6">
              <h4>React Weather App</h4>
              <p>
                An interactive weather application, rebuilt in React, with the
                inclusion of animated weather icons using npm.{" "}
              </p>
              <a
                href="https://laurapetrie-react-weather-app.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ReactWeatherApp}
                  className="project-img img-fluid"
                  alt="react-weather-app"
                />
              </a>
              <div className="technologies">
                <div className="technology">HTML</div>
                <div className="technology">CSS</div>
                <div className="technology">JavaScript</div>
                <div className="technology">API</div>
                <div className="technology">Bootstrap</div>
                <div className="technology">React</div>
                <div className="technology">npm</div>
              </div>
            </div>
            <div className="col-md-6">
              <h4>React Dictionary App</h4>
              <p>
                A clean and simple dictionary app displaying the phonetic
                spelling, parts of speech and images related to the searched for
                word.
              </p>
              <a
                href="https://laurapetrie-react-dictionary.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ReactDictionaryApp}
                  className="project-img img-fluid"
                  alt="react-dictionary-app"
                />
              </a>
              <div className="technologies">
                <div className="technology">HTML</div>
                <div className="technology">CSS</div>
                <div className="technology">JavaScript</div>{" "}
                <div className="technology">API</div>
                <div className="technology">React</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4>Responsive Website</h4>
              <p>
                A website created with responsiveness in mind, utilising
                Bootstrap and CSS flexbox.
              </p>
              <a
                href="https://laurapetrie-responsive-website.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ResponsiveWebsite}
                  className="project-img img-fluid"
                  alt="responsive-website"
                />
              </a>
              <div className="technologies">
                <div className="technology">HTML</div>
                <div className="technology">CSS</div>
                <div className="technology">Bootstrap</div>
              </div>
            </div>
            <div className="col-md-6">
              <h4>Vanilla JS Weather App</h4>
              <p>
                An interactive weather application built with Vanilla JS, with a
                5 day forecast and realtime local weather conditions.
              </p>
              <a
                href="https://laurapetrie-js-weather-app.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={JavascriptWeatherApp}
                  className="project-img img-fluid"
                  alt="react-weather-app"
                />
              </a>
              <div className="technologies">
                <div className="technology">HTML</div>
                <div className="technology">CSS</div>
                <div className="technology">Bootstrap</div>
                <div className="technology">JavaScript</div>
                <div className="technology">API</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default Projects;
