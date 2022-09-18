import './question_item.css';
import React, {useEffect} from 'react';

function QuestionItem(props){
    useEffect(() => {
        document.getElementById(props.question.id+"A").style.backgroundColor = "transparent";
        document.getElementById(props.question.id+"B").style.backgroundColor = "transparent";
        document.getElementById(props.question.id+"C").style.backgroundColor = "transparent";
        document.getElementById(props.question.id+"D").style.backgroundColor = "transparent";
        //check if ABCD or TF
        if(props.question.type === "2A"){
            document.getElementById(props.question.id+"C").style.display = "none";
            document.getElementById(props.question.id+"D").style.display = "none";
        }

        let ans = document.getElementById("answers");
        for (let i = ans.children.length; i >= 0; i--) {
            ans.appendChild(ans.children[Math.random() * i | 0]);
        }
        //set A B C D letters
        let j = 0;
        for (let i = 0; i < ans.children.length; i++) {
            if(ans.children[i].style.display === "none"){
                continue;
            }
            ans.children[i].getElementsByClassName("answer_button")[0].innerHTML=
            String.fromCharCode('A'.charCodeAt(0)+j);
            j++;
        }
    });

    const mark = (id, positive) => {
        document.getElementById(props.question.id+"A").style.backgroundColor = "transparent";
        document.getElementById(props.question.id+"B").style.backgroundColor = "transparent";
        document.getElementById(props.question.id+"C").style.backgroundColor = "transparent";
        document.getElementById(props.question.id+"D").style.backgroundColor = "transparent";

        document.getElementById(id).style.backgroundColor = positive === 0 ? "red" : "green";
    }

    return(
        <div className='question_item'>
            <h2>{props.question.question} ({props.question.tag})</h2>
            <hr></hr>
            <div id="answers" className='question_answers'>
                <div id={props.question.id+"A"} className="answer" onClick={()=>mark(props.question.id+"A", 1)}>
                    <button className='answer_button A'>A</button><span>{props.question.a1}</span>
                </div>
                <div id={props.question.id+"B"} className="answer" onClick={()=>mark(props.question.id+"B", 0)}>                
                    <button className='answer_button B'>B</button><span>{props.question.a2}</span>
                </div>
                <div id={props.question.id+"C"} className="answer" onClick={()=>mark(props.question.id+"C", 0)}>
                    <button className='answer_button C'>C</button><span>{props.question.a3}</span>
                </div>
                <div id={props.question.id+"D"} className="answer" onClick={()=>mark(props.question.id+"D", 0)}>
                    <button className='answer_button D'>D</button><span>{props.question.a4}</span>
                </div>
            </div>
        </div>
    );
}

export default QuestionItem;