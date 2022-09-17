import './question_item.css';

function QuestionItem(props){
    return(
        <div className='question_item'>
            <h4>{props.question.question}</h4>
            <hr></hr>
            <div className='question_answers'>
                <input type="checkbox" id="A"></input><span>{props.question.a1}</span><br />
                <input type="checkbox" id="B"></input><span>{props.question.a2}</span><br />
                <input type="checkbox" id="C"></input><span>{props.question.a3}</span><br />
                <input type="checkbox" id="D"></input><span>{props.question.a4}</span><br />
            </div>
        </div>
    );
}

export default QuestionItem;