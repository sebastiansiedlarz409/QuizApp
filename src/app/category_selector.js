import "./category_selector.css";

import { CookiesProvider, useCookies } from "react-cookie";
import React, { useState } from "react";

function CategorySelector(props){
    const [cookies, setCookie] = useCookies(["inf04Categories"]);

    //generate cat
    let questions = props.questions;
    let categories = {};
    for(let i = 0;i<questions.length;i++){
        if(categories[questions[i].cat] === undefined){
            categories[questions[i].cat] = 1;
        }
        else{
            categories[questions[i].cat] += 1;
        }
    }

    let save = () => {
        let value = "";
        let inputs = document.querySelectorAll(".category-list input");
        for(let i = 0;i<inputs.length;i++){
            if(inputs[i].checked){
                value+=inputs[i].value
                value+=","
            }
        }
        setCookie("inf04Categories", value, { path: "/", maxAge : 2764800 }); //month
    }

    let returnCategories = () =>{
        let cat = [];
        for(let i = 0;i<Object.keys(categories).length;i++){
            if(cookies.inf04Categories || cookies.inf04Categories === ""){
                let cats = cookies.inf04Categories.split(",");
                console.log(cookies.inf04Categories);
                if(cats.includes(Object.keys(categories)[i])){
                    cat.push(
                        <div className="category-list">
                            <input type="checkbox" value={Object.keys(categories)[i]} defaultChecked></input>
                            <label>{Object.keys(categories)[i]}({categories[Object.keys(categories)[i]]})</label>
                        </div>
                    );
                }
                else{
                    cat.push(
                        <div className="category-list">
                            <input type="checkbox" value={Object.keys(categories)[i]}></input>
                            <label>{Object.keys(categories)[i]}({categories[Object.keys(categories)[i]]})</label>
                        </div>
                    );
                }
            }
            else{
                cat.push(
                    <div className="category-list">
                        <input type="checkbox" value={Object.keys(categories)[i]} defaultChecked></input>
                        <label>{Object.keys(categories)[i]}({categories[Object.keys(categories)[i]]})</label>
                    </div>
                );
            }
        }
        return cat;
    }

    return(
        <div id="top" className="test_view">
            <center>
                <h2>Zaznacz interesujące Cię kategorie:</h2>
                <h5>Jeżeli żaden box nie jest zaznaczony jest to równoznaczne z zaznaczeniem wszystkich!</h5>
                <div>
                    <div className="category_selector">{returnCategories()}</div>
                </div>
                <button className="button_style" onClick={() => save()}>
                    Zapisz zmiany
                </button>
            </center>
        </div>
    );
}

export default CategorySelector;