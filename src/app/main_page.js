import "./main_page.css";

import NavBar from "./nav_bar.js";
import TestView from "./test_view";
import { QuestionView, RandomQuestionView } from "./question_view";
import DocumentView from "./document_view";
import InfoGraphicsView from "./infographics_view";

import React, { useState } from "react";

import questions from "./questions.js";
import files from "./files.js";
import infographics from "./infographics";

function MainPage(props) {
  const [view, setView] = useState(0); //switch views

  for (let i = 0; i < questions.length; i++) {
    questions[i]["id"] = i+1;
  }

  const updateView = (v) => {
    setView(v);
  };

  const returnView = () => {
    if (view === 0) {
      return <RandomQuestionView questions={questions}></RandomQuestionView>;
    } 
    else if (view === 1){
      return <QuestionView questions={questions}></QuestionView>;
    }
    else if (view === 2) {
      return <TestView questions={questions}></TestView>;
    }
    else if(view === 3){
      return <DocumentView questions={questions} files={files}></DocumentView>;
    }
    else if(view === 4){
      return <InfoGraphicsView questions={questions} infographics={infographics}></InfoGraphicsView>;
    }
  };

  return (
    <div className="main_body">
      <NavBar setView={(v) => updateView(v)}></NavBar>

      {returnView()}

      <div className="bottom_margin_desktop"></div>

    </div>
  );
}

export default MainPage;
