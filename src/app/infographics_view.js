import './infographics_view.css'

import Welcome from "./welcome";
import React from 'react';

function InfoGraphicsView(props){
    let items = []

    for(let i = 0;i<props.infographics.length;i++){
        items.push(
            <li className="info_list_item" key={i}>
                <a className="graphic_file" href={props.infographics[i]["url"]} target="_blank" rel="noreferrer">{props.infographics[i]["title"]}</a>
            </li>
        )
    }
    

    return(
        <div className="document_view">
            <center>
                <div className="welcome_text">
                    <Welcome questions={props.total}></Welcome>
                </div>
            </center>
            <hr />
            <center>
                <ul className="info_list">
                    {items}   
                </ul>
            </center>
        </div>
    )
}

export default InfoGraphicsView;