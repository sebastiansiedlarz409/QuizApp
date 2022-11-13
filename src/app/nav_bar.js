import "./nav_bar.css";

import logo from "./logo.png";

function NavBar(props) {
  return (
    <div className="nav_bar">
      <div className="nav_bar_menu">
        <span className="nav_bar_title">
          <img src={logo} alt="logo" />
        </span>
        <span className="nav_bar_item" style={{color:"darkgoldenrod"}} onClick={() => props.setView(3)}>
          MATERIAŁY
        </span>
        <span className="nav_bar_item" onClick={() => props.setView(0)}>
          LOSOWE PYTANIE
        </span>
        <span className="nav_bar_item" onClick={() => props.setView(1)}>
          WSZYSTKIE
        </span>
        <span className="nav_bar_item" onClick={() => props.setView(2)}>
          TEST
        </span>
      </div>
    </div>
  );
}

export default NavBar;
