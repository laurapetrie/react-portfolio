import "../Projects.css";
import WeatherAppImg from "../../images/vanillajs-weather-app.png";

function WeatherApp() {
  return (
    <div className="WeatherApp">
      <h4>Vanilla JS Weather App</h4>
      <p>
        An interactive weather application built with Vanilla JS, with a 5 day
        forecast and realtime local weather conditions.
      </p>
      <a
        href="https://laurapetrie-js-weather-app.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={WeatherAppImg}
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
  );
}

export default WeatherApp;
