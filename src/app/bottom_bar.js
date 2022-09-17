import './bottom_bar.css';

function BottomBar(props){
    return( 
        <div className='bottom_bar'>
            <span className='bottom_bar_text'>Ilość dostępnych pytań: {props.questionsCount}</span>
        </div>
    );
}

export default BottomBar;