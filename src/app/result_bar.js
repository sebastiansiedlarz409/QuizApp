import './result_bar.css';

import React, {useState} from 'react';

function ResultBar(props){
    const [result, setResult] = useState(false);

    props.moveState(setResult);

    if(result){
        document.getElementById("result").style.display = "block";
    }
    else{
        document.getElementById("result").style.display = "none";
    }

    return(
        <div id="result" className='result_bar'>
            Twój wynik to {props.result}% ({props.count}/{props.questions})
        </div>
    );
}

export default ResultBar;