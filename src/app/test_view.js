import './test_view.css';

function TestView(props){
    return(
        <div className='test_view'>
            <center>
                <button className="button_style" onClick={() => {}}>Losuj inny test!</button>
            </center>
            <div className='test'>
                <center>
                    ASD
                    {/* {returnQuestionItem()} */}
                </center>
            </div>
        </div>
    );
}

export default TestView;