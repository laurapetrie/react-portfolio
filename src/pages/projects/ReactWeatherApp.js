import "../Projects.css";
import ReactWeatherImg from "../../images/react-weather-app.png";

function ReactWeatherApp() {
  return (
    <div className="ReactWeatherApp">
      <h4>React Weather App</h4>
      <p>
        An interactive weather application, rebuilt in React, with the inclusion
        of animated weather icons using npm.{" "}
      </p>
      <a
        href="https://laurapetrie-react-weather-app.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={ReactWeatherImg}
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
  );
}

export default ReactWeatherApp;
