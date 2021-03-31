function Header(props) {
  return (
    <header className="header">
      <h1>{props.title}</h1>
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
    </header>
  );
}

export default Header;
