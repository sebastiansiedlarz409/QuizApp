import './question_view.css';
import QuestionItem from './question_item';

import React, {useState} from 'react';

function QuestionView(props){
    const [render, setRender] = useState(true);
    const [id, setId] = useState(0);
    const [question, setQuestion] = useState(props.questions[0]);

    const randomQuestion = () => {
        setRender(!render);
        setId(Math.floor(Math.random() * props.questions.length));
        setQuestion(props.questions[id]);
    }

    const returnQuestionItem = () => {
        return <QuestionItem key={render} question={question}></QuestionItem>
    }

    return(
        <div className='question_view'>
            <center>
                <button className="button_style" onClick={() => randomQuestion()}>Losuj inne pytanie!</button>
            </center>
            <div className='question'>
                <center>
                    {returnQuestionItem()}
                </center>
            </div>
        </div>
    );
}

export default QuestionView;