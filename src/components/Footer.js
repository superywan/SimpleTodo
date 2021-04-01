import { Link } from "react-router-dom";
import "../css/Footer.css";

function Footer(props) {
  return (
    <footer>
      <p className="footer__paragraph">Copyright &copy; 2021</p>
      <Link className="link" to="/about">
        About
      </Link>
    </footer>
  );
}

export default Footer;
