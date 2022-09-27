import "./question_item.css";
import React, { useEffect } from "react";

function QuestionItem(props) {
  let answer = -1;

  useEffect(() => {
    document.getElementById(props.question.id + "A").style.border =
      "5px solid transparent";
    document.getElementById(props.question.id + "B").style.border =
      "5px solid transparent";
    document.getElementById(props.question.id + "C").style.border =
      "5px solid transparent";
    document.getElementById(props.question.id + "D").style.border =
      "5px solid transparent";
    document.getElementById(props.question.id + "DESC").style.display = "none";

    //check if ABCD or TF
    if (props.question.type === "2A") {
      document.getElementById(props.question.id + "C").style.display = "none";
      document.getElementById(props.question.id + "D").style.display = "none";
    }

    //hide image field if there is no link
    if (props.question.url.length === 0) {
      document.getElementById(props.question.id + "IMG").style.display = "none";
    }

    let ans = document.getElementById(props.question.id + "answers");
    for (let i = ans.children.length; i >= 0; i--) {
      ans.appendChild(ans.children[(Math.random() * i) | 0]);
    }

    //set A B C D letters
    let j = 0;
    for (let i = 0; i < ans.children.length; i++) {
      if (ans.children[i].style.display === "none") {
        continue;
      }
      ans.children[i].getElementsByClassName("answer_button")[0].innerHTML =
        String.fromCharCode("A".charCodeAt(0) + j);
      j++;
    }
  });

  const mark = (id, positive) => {
    if (answer !== -1) {
      return;
    }

    document.getElementById(props.question.id + "A").style.backgroundColor =
      "rgb(255,255,255,0.3)";
    document.getElementById(props.question.id + "A").style.border =
      "5px solid green";

    document.getElementById(props.question.id + "B").style.backgroundColor =
      "rgb(255,255,255,0.3)";
    document.getElementById(props.question.id + "C").style.backgroundColor =
      "rgb(255,255,255,0.3)";
    document.getElementById(props.question.id + "D").style.backgroundColor =
      "rgb(255,255,255,0.3)";

    document.getElementById(id).style.backgroundColor =
      positive === 0 ? "crimson" : "green";

    if (
      document.getElementById(props.question.id + "DESC").innerHTML.length > 0
    ) {
      document.getElementById(props.question.id + "DESC").style.display =
        "block";
    }

    if (positive) {
      answer = true;
    } else {
      answer = false;
    }

    if (props.child !== -1) {
      props.answerCallback(props.child, answer);
    }
  };

  return (
    <div className="question_item">
      <h2 className="question_content">
        ({props.question.id}) {props.question.question} ({props.question.tag})
      </h2>
      <img
        id={props.question.id + "IMG"}
        className="question_image"
        src={props.question.url}
        alt=""
      />
      <div id={props.question.id + "answers"} className="question_answers">
        <div
          id={props.question.id + "A"}
          className="answer"
          onClick={() => mark(props.question.id + "A", 1)}
        >
          <span className="answer_container">
            <button className="answer_button A">A</button>
            <span>{props.question.a1}</span>
          </span>
        </div>
        <div
          id={props.question.id + "B"}
          className="answer"
          onClick={() => mark(props.question.id + "B", 0)}
        >
          <span className="answer_container">
            <button className="answer_button B">B</button>
            <span>{props.question.a2}</span>
          </span>
        </div>
        <div
          id={props.question.id + "C"}
          className="answer"
          onClick={() => mark(props.question.id + "C", 0)}
        >
          <span className="answer_container">
            <button className="answer_button C">C</button>
            <span>{props.question.a3}</span>
          </span>
        </div>
        <div
          id={props.question.id + "D"}
          className="answer"
          onClick={() => mark(props.question.id + "D", 0)}
        >
          <span className="answer_container">
            <button className="answer_button D">D</button>
            <span>{props.question.a4}</span>
          </span>
        </div>
      </div>
      <div id={props.question.id + "DESC"} className="question_description">
        {props.question.desc}
      </div>
    </div>
  );
}

export default QuestionItem;
