import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="main">
        <h1>Contact me</h1>
        <h2 className="mb-5">I'd love to connect with you...</h2>
        <div className="contact-socials">
          <p>
            <a href="mailto:laurajrpetrie@gmail.com">laurajrpetrie@gmail.com</a>
          </p>
          <p>
            <a
              href="https://github.com/laurapetrie"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </p>

          <p>
            <a
              href="https://www.linkedin.com/in/laurapetrie/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/rosy_codes/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
