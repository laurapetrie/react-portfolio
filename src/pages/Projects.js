import "./Projects.css";
import ReactWeatherApp from "./react-weather-app.png";
import ReactDictionaryApp from "./react-dictionary-app.png";

function Projects() {
  return (
    <div className="Projects">
      <div className="container">
        <h1>Projects</h1>
        <div className="container projects-container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={ReactWeatherApp}
                className="project-img img-fluid"
                alt="react-weather-app"
              />
            </div>
            <div className="col-md-6">
              <img
                src={ReactDictionaryApp}
                className="project-img img-fluid"
                alt="react-dictionary-app"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
