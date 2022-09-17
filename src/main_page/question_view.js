import './question_view.css';
import QuestionItem from './question_item';

function QuestionView(props){
    let question = props.questions[0];
    return(
        <div className='question_view'>
            <center>
                <button className="button_style">Losuj inne pytanie!</button>
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