import "./nav_bar.css";

import logo from "./logo.png";
import React from 'react';


function NavBar(props) {
  const toggle_mobile_menu = () => {
    let mobile_menu = document.querySelector(".nav_bar_mobile_menu_items");
    if(mobile_menu){
      mobile_menu.style.display = mobile_menu.style.display === "block" ? "none" : "block";
    }
  }

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
        <span className="nav_bar_item" onClick={() => props.setView(6)}>
          KONTAKT
        </span>
      </div>
      <div className="nav_bar_menu_mobile">
        <span className="nav_bar_title">
          <img src={logo} alt="logo" />
        </span>
        <button class="nav_bar_mobile_mobile_hamburger" onClick={() => toggle_mobile_menu()}>☰</button>
      </div>
      <div class="nav_bar_mobile_menu_items">
          <div className="nav_bar_item" onClick={() => props.setView(4)}>
            INFO GRAFIKI
          </div>
          <div className="nav_bar_item" style={{color:"darkgoldenrod"}} onClick={() => props.setView(3)}>
            MATERIAŁY
          </div>
          <div className="nav_bar_item" onClick={() => props.setView(0)}>
            LOSOWE P.
          </div>
          <div className="nav_bar_item" onClick={() => props.setView(1)}>
            WSZYSTKIE
          </div>
          <div className="nav_bar_item" onClick={() => props.setView(2)}>
            TEST
          </div>
          <div className="nav_bar_item" onClick={() => props.setView(5)}>
            USTAWIENIA
          </div>
          <div className="nav_bar_item" onClick={() => props.setView(6)}>
            KONTAKT
          </div>
        </div>
    </div>
  );
}

export default NavBar;
