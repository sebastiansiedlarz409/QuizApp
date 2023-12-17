import "./question_item.css";
import React, { useEffect } from "react";

function QuestionItem(props) {
  let answer = -1;

  useEffect(() => {
    document.getElementById("A" + props.question.id).style.border =
      "5px solid transparent";
    document.getElementById("B" + props.question.id).style.border =
      "5px solid transparent";
    document.getElementById("C" + props.question.id).style.border =
      "5px solid transparent";
    document.getElementById("D" + props.question.id).style.border =
      "5px solid transparent";
    document.getElementById("DESC" + props.question.id).style.display = "none";

    //check if ABCD or TF
    if (props.question.type === "2A") {
      document.getElementById("C" + props.question.id).style.display = "none";
      document.getElementById("D" + props.question.id).style.display = "none";
    }

    //hide image field if there is no link
    if (props.question.url.length === 0) {
      document.getElementById("IMG" + props.question.id).style.display = "none";
    }

    let ans = document.getElementById("answers" + props.question.id);
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

    document.getElementById("A" + props.question.id).style.backgroundColor =
      "rgb(255,255,255,0.3)";
    document.getElementById("A" + props.question.id).style.border =
      "5px solid green";

    document.getElementById("B" + props.question.id).style.backgroundColor =
      "rgb(255,255,255,0.3)";
    document.getElementById("C" + props.question.id).style.backgroundColor =
      "rgb(255,255,255,0.3)";
    document.getElementById("D" + props.question.id).style.backgroundColor =
      "rgb(255,255,255,0.3)";

    document.getElementById(id).style.backgroundColor =
      positive === 0 ? "crimson" : "green";

    if (
      document.getElementById("DESC" + props.question.id).innerHTML.length > 0
    ) {
      document.getElementById("DESC" + props.question.id).style.display =
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
        ({props.question.id}) [{props.question.cat}] {props.question.question} ({props.question.tag})
      </h2>
      <img
        id={"IMG" + props.question.id}
        className="question_image"
        src={props.question.url}
        alt=""
      />
      <div id={"answers" + props.question.id} className="question_answers">
        <div
          id={"A" + props.question.id}
          className="answer"
          onClick={() => mark("A" + props.question.id, 1)}
        >
          <span className="answer_container">
            <button className="answer_button A">A</button>
            <span>{props.question.a1}</span>
          </span>
        </div>
        <div
          id={"B" + props.question.id}
          className="answer"
          onClick={() => mark("B" + props.question.id, 0)}
        >
          <span className="answer_container">
            <button className="answer_button B">B</button>
            <span>{props.question.a2}</span>
          </span>
        </div>
        <div
          id={"C" + props.question.id}
          className="answer"
          onClick={() => mark("C" + props.question.id, 0)}
        >
          <span className="answer_container">
            <button className="answer_button C">C</button>
            <span>{props.question.a3}</span>
          </span>
        </div>
        <div
          id={"D" + props.question.id}
          className="answer"
          onClick={() => mark("D" + props.question.id, 0)}
        >
          <span className="answer_container">
            <button className="answer_button D">D</button>
            <span>{props.question.a4}</span>
          </span>
        </div>
      </div>
      <div id={"DESC" + props.question.id} className="question_description">
        {props.question.desc}
      </div>
    </div>
  );
}

export default QuestionItem;
