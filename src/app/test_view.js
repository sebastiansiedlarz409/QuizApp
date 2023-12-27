import "./test_view.css";

import React, { useState, useRef, useEffect } from "react";

import QuestionItem from "./question_item";
import ResultBar from "./result_bar";
import Welcome from "./welcome";

function TestView(props) {
  const ref = useRef(null);

  //this is use to refresh test
  const [questions, setQuestions] = useState([]);
  const [actualqc, setActualQC] = useState(40); //actual question count

  //answers returned from each child
  let answers = [];

  //max questions
  let question_count = 40;

  let result = 0;
  let count = 0;

  let resultSetResult; //callback which refresh result component

  //this is called by child when answer is choosen
  const answerCallback = (id, answer) => {
    answers.push(answer);

    //if every question is answered return result
    if (answers.length === actualqc) {
      count = 0;
      for (let i = 0; i < actualqc; i++) {
        if (answers[i] === true) {
          count++;
        }
      }
      result = (count / actualqc) * 100;
      resultSetResult({
        result: result.toFixed(2),
        count: count,
        questions: actualqc,
      });
      ref.current?.scrollIntoView({ behavior: "smooth" });
      return;
    }
  };

  //random questions and refresh view
  const randomTest = () => {
    let q = [];

    while(q.length < question_count) {
      let v =
        props.questions[Math.floor(Math.random() * props.questions.length)];

      if (q.filter((t) => t.question === v.question).length > 0) {
        continue;
      }
      q.push(v);

      resultSetResult(null);
      setQuestions(q);

      if(q.length >= props.questions.length){
        break;
      }
    }
    setActualQC(q.length);
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
          <button key={props.questions.length} className="button_style">
            <a href="#top" className="up">Do Góry</a>
          </button>
        );
      }
    }

    return test;
  };

  
  useEffect(()=>{
    if(questions.length === 0){
      randomTest();
    }
  });

  return (
    <div id="top" className="test_view">
      <center ref={ref}>
        <div className="welcome_text">
          <Welcome questions={props.total}></Welcome>
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
