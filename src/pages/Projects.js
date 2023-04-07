import "./Projects.css";
import ReactWeatherApp from "./react-weather-app.png";
import ReactDictionaryApp from "./react-dictionary-app.png";

function Projects() {
  return (
    <div className="Projects">
      <div className="main">
        <h1>Projects</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4>Weather App remade in React</h4>
              <img
                src={ReactWeatherApp}
                className="project-img img-fluid"
                alt="react-weather-app"
              />
              <div className="technologies">
                <div className="technology">HTML</div>
                <div className="technology">CSS</div>
                <div className="technology">Bootstrap</div>
                <div className="technology">JavaScript</div>
                <div className="technology">React</div>
                <div className="technology">API</div>
                <div className="technology">npm</div>
              </div>
            </div>
            <div className="col-md-6">
              <h4>React Dictionary App</h4>
              <img
                src={ReactDictionaryApp}
                className="project-img img-fluid"
                alt="react-dictionary-app"
              />
              <div className="technologies">
                <div className="technology">HTML</div>
                <div className="technology">CSS</div>
                <div className="technology">JavaScript</div>
                <div className="technology">React</div>
                <div className="technology">API</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
