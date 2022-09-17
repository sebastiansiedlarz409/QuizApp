import './question_view.css';
import QuestionItem from './question_item';

import React, {useState} from 'react';

function QuestionView(props){
    const [question, setQuestion] = useState(props.questions[0]);

    const randomQuestion = () => {
        setQuestion(props.questions[Math.floor(Math.random() * props.questions.length)]);
    }

    return(
        <div className='question_view'>
            <center>
                <button className="button_style" onClick={() => randomQuestion()}>Losuj inne pytanie!</button>
            </center>
            <div className='question'>
                <center>
                    <QuestionItem question={question}></QuestionItem>
                </center>
            </div>
        </div>
    );
}

export default QuestionView;