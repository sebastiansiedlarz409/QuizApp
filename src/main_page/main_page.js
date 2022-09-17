import './main_page.css';
import NavBar from './nav_bar.js';
import BottomBar from './bottom_bar';

import React, {useState} from 'react';

function MainPage(props){
    const [view, setView] = useState(0); //switch views

    const questionView = "ASD";
    const testView = "QWE";

    const updateView = (v) => {
        setView(v);
    }

    const returnView = () =>{
        if(view === 0){
            return questionView;
        }
        else if(view === 1){
            return testView;
        }
    }

    return( 
        <div className='main_body'>
            <NavBar setView={(v)=>updateView(v)}></NavBar>

            {returnView()}
            
            <BottomBar></BottomBar>
        </div>
    );
}

export default MainPage;