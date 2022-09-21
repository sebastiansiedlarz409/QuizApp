import './result_bar.css';

import React, {useState} from 'react';

function ResultBar(props){
    const [result, setResult] = useState(null);

    props.moveState(setResult);

    if(result != null){
        /*if(result > 50){
            document.getElementById("result").style.backgroundColor = "green";
        }
        else{
            document.getElementById("result").style.backgroundColor = "crimson";
        }*/
        
        return(
            <div id="result" className='result_bar' style={{backgroundColor: result >= 50 ? "green" : "crimson"}}>
                Twój wynik to {result["result"]}% ({result["count"]}/{result["questions"]})
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}

export default ResultBar;