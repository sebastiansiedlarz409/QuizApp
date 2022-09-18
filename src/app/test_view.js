import './test_view.css';

import React, {useState} from 'react';
import QuestionItem from './question_item';

function TestView(props){
    const [test, setTest] = useState([]);
    let answers = [];
    let question_count = 4;

    const randomTest = () => {
        let q = [];

        for(let i = 0;i<question_count;i++){
            let v = props.questions[Math.floor(Math.random() * props.questions.length)];
            if(q.filter(t=>t.question === v.question).length > 0){
                i--;
                continue;
            }
            q.push(v);

            setTest(q);
        }
        console.log(q);
    }

    const answerCallback = (id, answer) =>{
        answers[id] = answer;

        console.log(answers);
        if(answers.length === question_count){
            let count = 0;
            for(let i = 0;i<question_count;i++){
                if(answers[i] === true){
                    count++;
                }
            }
            let result = (count/question_count)*100;
            
            alert("Twój wynik to: " + result + "% (" + count + "/" + question_count +")");   
        }
    }

    const returnTest = () =>{
        let ret = [];

        for(let i = 0;i<test.length;i++){
            ret.push(<QuestionItem key={test[i].id} question={test[i]} child={i} answerCallback={answerCallback}></QuestionItem>);
        }

        return ret;
    }

    return(
        <div className='test_view'>
            <center>
                <button className="button_style" onClick={() => {randomTest()}}>Losuj test!</button>
            </center>
            <div className='test'>
                <center>
                    {returnTest()}
                </center>
            </div>
        </div>
    );
}

export default TestView;