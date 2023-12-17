import "./main_page.css";

import NavBar from "./nav_bar.js";
import TestView from "./test_view";
import { QuestionView, RandomQuestionView } from "./question_view";
import DocumentView from "./document_view";
import InfoGraphicsView from "./infographics_view";

import React, { useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import questions from "./questions.js";
import files from "./files.js";
import infographics from "./infographics";
import CategorySelector from "./category_selector.js";

function MainPage(props) {
  const [cookies, setCookie] = useCookies(["inf04Categories"]);

  const [view, setView] = useState(0); //switch views

  for (let i = 0; i < questions.length; i++) {
    questions[i]["id"] = i+1;
  }

  const updateView = (v) => {
    setView(v);
  };

  const returnView = () => {
    let filteredQuestions = [];
    if(cookies.inf04Categories){
      let cats = cookies.inf04Categories.split(",");
      for(let i = 0;i<questions.length;i++){
        if(cats.includes(questions[i].cat)){
          filteredQuestions.push(questions[i]);
        }
      }
    }
    else{
      filteredQuestions = questions;
    }

    if (view === 0) {
      return <RandomQuestionView total={questions.length} questions={filteredQuestions}></RandomQuestionView>;
    } 
    else if (view === 1){
      return <QuestionView total={questions.length} questions={filteredQuestions}></QuestionView>;
    }
    else if (view === 2) {
      return <TestView total={questions.length} questions={filteredQuestions}></TestView>;
    }
    else if(view === 3){
      return <DocumentView total={questions.length} questions={filteredQuestions} files={files}></DocumentView>;
    }
    else if(view === 4){
      return <InfoGraphicsView total={questions.length} questions={filteredQuestions} infographics={infographics}></InfoGraphicsView>;
    }
    else if(view === 5){
      return <CategorySelector total={questions.length} questions={questions}></CategorySelector>;
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
