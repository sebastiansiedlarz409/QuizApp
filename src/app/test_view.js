import './test_view.css';

import React, {useState} from 'react';

import QuestionItem from './question_item';
import ResultBar from './result_bar';

function TestView(props){
    //this is use to refresh test
    const [test, setTest] = useState([]);

    //answers returned from each child
    let answers = [];

    //max questions
    let question_count = 4;
 
    let result = 0;
    let count = 0;
    let resultSetResult;

    //random questions and refresh view
    const randomTest = () => {
        let q = [];

        for(let i = 0;i<question_count;i++){
            let v = props.questions[Math.floor(Math.random() * props.questions.length)];
            if(q.filter(t=>t.question === v.question).length > 0){
                i--;
                continue;
            }
            q.push(v);

            resultSetResult(false);
            setTest(q);
        }
    }

    //this is called by child when answer is choosen
    const answerCallback = (id, answer) =>{
        answers.push(answer);

        //if every question is answered return result
        if(answers.length === question_count){
            count = 0;
            for(let i = 0;i<question_count;i++){
                if(answers[i] === true){
                    count++;
                }
            }
            result = (count/question_count)*100;
            resultSetResult(true);

            //alert("Twój wynik to: " + result + "% (" + count + "/" + question_count +")");   
        }
    }

    //return list of questions
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
                <ResultBar result={result} count={count} questions={question_count} moveState={(setResult) => {resultSetResult = setResult}}></ResultBar>
                    {returnTest()}
                </center>
            </div>
        </div>
    );
}

export default TestView;