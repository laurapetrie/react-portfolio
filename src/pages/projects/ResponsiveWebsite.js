import "../Projects.css";
import ResponsiveWebsiteImg from "../../images/responsive-website.png";

function ResponsiveWebsite() {
  return (
    <div className="ResponsiveWebsite">
      <h4>Responsive Website</h4>
      <p>
        A website created with responsiveness in mind, utilising Bootstrap and
        CSS flexbox.
      </p>
      <a
        href="https://laurapetrie-responsive-website.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={ResponsiveWebsiteImg}
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
  );
}

export default ResponsiveWebsite;
