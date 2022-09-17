import './main_page.css';
import NavBar from './nav_bar.js';
import BottomBar from './bottom_bar';

import './questions.js';

import React, {useState} from 'react';
import questions from './questions.js';
import QuestionView from './question_view';

function MainPage(props){
    const [view, setView] = useState(0); //switch views

    const updateView = (v) => {
        setView(v);
    }

    const returnView = () =>{
        if(view === 0){
            return <QuestionView questions={questions}></QuestionView>;
        }
        else if(view === 1){
            return "QWE";
        }
    }

    return( 
        <div className='main_body'>
            <NavBar setView={(v)=>updateView(v)}></NavBar>

            {returnView()}
            
            <BottomBar questionsCount={questions.length}></BottomBar>
        </div>
    );
}

export default MainPage;