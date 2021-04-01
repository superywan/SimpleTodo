import { useLocation } from "react-router-dom";
import "../css/Header.css";

function Header(props) {
  const location = useLocation();
  return (
    <header id="header">
      <h1 id="header__h1">{props.title}</h1>
      {location.pathname === "/" ? (
        <button
          id="header__button"
          style={{
            background: props.showStatus ? "red" : "green",
            cursor: "pointer",
          }}
          onClick={props.onShow}
        >
          {props.showStatus ? "Close" : "Add Task"}
        </button>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
