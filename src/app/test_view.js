import "./test_view.css";

import React, { useState, useRef } from "react";

import QuestionItem from "./question_item";
import ResultBar from "./result_bar";

function TestView(props) {
  const ref = useRef(null);

  //this is use to refresh test
  const [questions, setQuestions] = useState([]);

  //answers returned from each child
  let answers = [];

  //max questions
  let question_count = 20;

  let result = 0;
  let count = 0;

  let resultSetResult; //callback which refresh result component

  //this is called by child when answer is choosen
  const answerCallback = (id, answer) => {
    answers.push(answer);

    //if every question is answered return result
    if (answers.length === question_count) {
      count = 0;
      for (let i = 0; i < question_count; i++) {
        if (answers[i] === true) {
          count++;
        }
      }
      result = (count / question_count) * 100;
      resultSetResult({
        result: result,
        count: count,
        questions: question_count,
      });
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  //random questions and refresh view
  const randomTest = () => {
    let q = [];

    for (let i = 0; i < question_count; i++) {
      let v =
        props.questions[Math.floor(Math.random() * props.questions.length)];
      if (q.filter((t) => t.question === v.question).length > 0) {
        i--;
        continue;
      }
      q.push(v);

      resultSetResult(null);
      setQuestions(q);
    }
  };

  //return list of questions
  const returnTest = () => {
    let test = [];

    for (let i = 0; i < questions.length; i++) {
      test.push(
        <QuestionItem
          key={questions[i].id}
          question={questions[i]}
          child={i}
          answerCallback={answerCallback}
        ></QuestionItem>
      );
      if (i === questions.length - 1) {
        test.push(
          <button key={i + 1} className="button_style">
            <a href="#top">Do Góry</a>
          </button>
        );
      }
    }

    return test;
  };

  return (
    <div id="top" className="test_view">
      <center ref={ref}>
        <div className="welcome_text">
          <h1>Witaj przyszły programisto!</h1>
          <p>
            Ta strona została utworzona z myślą o osobach zdających egzamin
            INF04. Liczba pytań w bazie to <b>{props.questions.length}</b>.
            Ułatwią ci one przygotowanie się do owego egzamiu. Życzymy owocnej
            nauki :)
          </p>
        </div>
        <button
          className="button_style"
          onClick={() => {
            randomTest();
          }}
        >
          Losuj test!
        </button>
      </center>
      <div className="test">
        <center>
          <ResultBar
            moveState={(setResult) => {
              resultSetResult = setResult;
            }}
          ></ResultBar>
          {returnTest()}
        </center>
      </div>
    </div>
  );
}

export default TestView;
