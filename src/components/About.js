import { Link } from "react-router-dom";
import "../css/About.css";

function About(props) {
  return (
    <div className="about">
      <h4 className="about--heading">Task Tracker built with React.js ⚛️</h4>
      <Link className="about--link" to="/">
        Go Back
      </Link>
    </div>
  );
}

export default About;
