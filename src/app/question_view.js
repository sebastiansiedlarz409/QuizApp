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

  if (id === 0) {
    randomQuestion();
  }

  return (
    <div className="question_view">
      <center>
        <div className="welcome_text">
          <Welcome questions={props.total}></Welcome>
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

  const goQuestion = () => {
    let number = parseInt(prompt("Podaj numer pytania:"));

    if (isNaN(number)) {
      return 0;
    }

    if (number >= props.questions.length) {
      number = props.questions.length - 1;
    }
    number--;

    return number - id;
  };

  const switchQuestion = (m) => {
    let i = id + m;
    if (i >= props.questions.length) {
      i = 0;
    }
    if (i < 0) {
      i = props.questions.length - 1;
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
          <Welcome questions={props.total}></Welcome>
        </div>
        <div className="switch_question_btns">
          <button
            id="prevBtn"
            className="button_style"
            onClick={() => switchQuestion(-1)}
          >
            {"<"}
          </button>
          <button
            className="button_style"
            onClick={() => switchQuestion(goQuestion())}
          >
            Idź do pytania
          </button>
          <button
            id="nextBtn"
            className="button_style"
            onClick={() => switchQuestion(1)}
          >
            {">"}
          </button>
        </div>
      </center>
      <div className="question">
        <center>{returnQuestionItem()}</center>
      </div>
    </div>
  );
}

export { RandomQuestionView, QuestionView };
