import { useLocation } from "react-router-dom";
function Header(props) {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{props.title}</h1>
      {location.pathname === "/" ? (
        <button
          className="btn"
          style={{
            background: props.showStatus ? "red" : "green",
            cursor: "pointer",
          }}
          onClick={props.onShow}
        >
          {props.showStatus ? "Close" : "Add"}
        </button>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
