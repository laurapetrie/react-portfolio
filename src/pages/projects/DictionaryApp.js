import "../Projects.css";
import DictionaryAppImg from "../../images/react-dictionary-app.png";

function DictionaryApp() {
  return (
    <div className="DictionaryApp">
      <h4>React Dictionary App</h4>
      <p>
        A clean and simple dictionary app displaying the phonetic spelling,
        parts of speech and images related to the searched for word.
      </p>
      <a
        href="https://laurapetrie-react-dictionary.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={DictionaryAppImg}
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
  );
}

export default DictionaryApp;
