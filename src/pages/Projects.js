import "./Projects.css";
import Socials from "./Socials";
import ReactWeatherApp from "./projects/ReactWeatherApp";
import WeatherApp from "./projects/WeatherApp";
import DictionaryApp from "./projects/DictionaryApp";
import ResponsiveWebsite from "./projects/ResponsiveWebsite";

function Projects() {
  return (
    <div className="Projects">
      <div className="main">
        <h1>Projects</h1>
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6">
              <ReactWeatherApp />
            </div>
            <div className="col-md-6">
              <DictionaryApp />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ResponsiveWebsite />
            </div>
            <div className="col-md-6">
              <WeatherApp />
            </div>
          </div>
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default Projects;
