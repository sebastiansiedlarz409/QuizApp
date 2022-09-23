import "./main_page.css";
import NavBar from "./nav_bar.js";
// import BottomBar from "./bottom_bar";

import QuestionView from "./question_view";
import TestView from "./test_view";

import React, { useState } from "react";

import questions from "./questions.js";

function MainPage(props) {
  const [view, setView] = useState(1); //switch views

  for (let i = 0; i < questions.length; i++) {
    questions[i]["id"] = i;
  }

  const updateView = (v) => {
    setView(v);
  };

  const returnView = () => {
    if (view === 0) {
      return <QuestionView questions={questions}></QuestionView>;
    } else if (view === 1) {
      return <TestView questions={questions}></TestView>;
    }
  };

  return (
    <div className="main_body">
      <NavBar setView={(v) => updateView(v)}></NavBar>

      {returnView()}

      <div className="bottom_margin_desktop"></div>

      {/* <BottomBar questionsCount={questions.length}></BottomBar> */}
    </div>
  );
}

export default MainPage;
