import './question_item.css';
import React, {useEffect} from 'react';

function QuestionItem(props){
    useEffect(() => {
        let ul = document.getElementById("answers");
        for (var i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ul.children[Math.random() * i | 0]);
        }
        //check if ABCD or TF
        if(props.question.type === "2A"){
            document.getElementById("C").style.display = "none";
            document.getElementById("D").style.display = "none";
        }
    });

    const mark = (id, positive) => {
        document.getElementById("A").style.backgroundColor = "transparent";
        document.getElementById("B").style.backgroundColor = "transparent";
        document.getElementById("C").style.backgroundColor = "transparent";
        document.getElementById("D").style.backgroundColor = "transparent";

        document.getElementById(id).style.backgroundColor = positive === 0 ? "red" : "green";
    }

    return(
        <div className='question_item'>
            <h2>{props.question.question} ({props.question.tag})</h2>
            <hr></hr>
            <div id="answers" className='question_answers'>
                <div id="A" className="answer">
                    <input type="radio" name="answer" onChange={()=>mark("A", 1)}/><span>{props.question.a1}</span>
                </div>
                <div id="B" className="answer">                
                    <input type="radio" name="answer" onChange={()=>mark("B", 0)}/><span>{props.question.a2}</span>
                </div>
                <div id="C" className="answer">
                    <input type="radio" name="answer" onChange={()=>mark("C", 0)} /><span>{props.question.a3}</span>
                </div>
                <div id="D" className="answer">
                    <input type="radio" name="answer" onChange={()=>mark("D", 0)} /><span>{props.question.a4}</span>
                </div>
            </div>
        </div>
    );
}

export default QuestionItem;