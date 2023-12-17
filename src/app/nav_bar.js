import "./nav_bar.css";

import logo from "./logo.png";

function NavBar(props) {
  return (
    <div className="nav_bar">
      <div className="nav_bar_menu">
        <span className="nav_bar_title">
          <img src={logo} alt="logo" />
        </span>
        <span className="nav_bar_item" onClick={() => props.setView(4)}>
          INFO GRAFIKI
        </span>
        <span className="nav_bar_item" style={{color:"darkgoldenrod"}} onClick={() => props.setView(3)}>
          MATERIAŁY
        </span>
        <span className="nav_bar_item" onClick={() => props.setView(0)}>
          LOSOWE P.
        </span>
        <span className="nav_bar_item" onClick={() => props.setView(1)}>
          WSZYSTKIE
        </span>
        <span className="nav_bar_item" onClick={() => props.setView(2)}>
          TEST
        </span>
        <span className="nav_bar_item" onClick={() => props.setView(5)}>
          USTAWIENIA
        </span>
      </div>
      <div className="nav_bar_menu_mobile">
        <span className="nav_bar_title">
          <img src={logo} alt="logo" />
        </span>
        <div class="nav_bar_menu_mobile_rows">
          <div class="nav_bar_menu_mobile_row">
            <span className="nav_bar_item" onClick={() => props.setView(4)}>
              INFO GRAFIKI
            </span>
            <span className="nav_bar_item" style={{color:"darkgoldenrod"}} onClick={() => props.setView(3)}>
              MATERIAŁY
            </span>
            <span className="nav_bar_item" onClick={() => props.setView(0)}>
              LOSOWE P.
            </span>
          </div>
          <div class="nav_bar_menu_mobile_row">
            <span className="nav_bar_item" onClick={() => props.setView(1)}>
              WSZYSTKIE
            </span>
            <span className="nav_bar_item" onClick={() => props.setView(2)}>
              TEST
            </span>
            <span className="nav_bar_item" onClick={() => props.setView(5)}>
              USTAWIENIA
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default NavBar;
