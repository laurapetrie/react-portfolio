import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="Footer">
      <footer>{`© Copyright ${year} Made by Laura Petrie`}</footer>
    </div>
  );
}

export default Footer;
