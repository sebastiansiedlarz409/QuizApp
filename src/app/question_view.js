import "./question_view.css";
import QuestionItem from "./question_item";

import React, { useState } from "react";
import Welcome from "./welcome";

function RandomQuestionView(props) {
  const [id, setId] = useState(0);
  const [question, setQuestion] = useState(props.questions[0]);

  const randomQuestion = () => {
    let i = Math.floor(Math.random() * props.questions.length);
    setId(i);
    setQuestion(props.questions[i]);
  };

  const returnQuestionItem = () => {
    return (
      <QuestionItem
        key={question.id}
        question={question}
        child={-1}
      ></QuestionItem>
    );
  };

  if(id === 0){
    randomQuestion();
  }

  return (
    <div className="question_view">
      <center>
      <div className="welcome_text">
          <Welcome questions={props.questions}></Welcome>
        </div>
        <button className="button_style" onClick={() => randomQuestion()}>
          Losuj inne pytanie!
        </button>
      </center>
      <div className="question">
        <center>{returnQuestionItem()}</center>
      </div>
    </div>
  );
}

function QuestionView(props) {
  const [id, setId] = useState(0);
  const [question, setQuestion] = useState(props.questions[0]);

  const switchQuestion = (m) => {
    let i = id+m;
    if(i >= props.questions.length){
      i = 0;
    }
    if(i < 0){
      i = props.questions.length-1;
    }
    setId(i);
    setQuestion(props.questions[i]);
  };

  const returnQuestionItem = () => {
    return (
      <QuestionItem
        key={question.id}
        question={question}
        child={-1}
      ></QuestionItem>
    );
  };

  return (
    <div className="question_view">
      <center>
      <div className="welcome_text">
          <Welcome questions={props.questions}></Welcome>
        </div>
        <button className="button_style" onClick={() => switchQuestion(-1)}>
          Poprzednie pytanie!
        </button>
        <button className="button_style" onClick={() => switchQuestion(1)}>
          Następne pytanie!
        </button>
      </center>
      <div className="question">
        <center>{returnQuestionItem()}</center>
      </div>
    </div>
  );
}

export {
  RandomQuestionView,
  QuestionView
}
