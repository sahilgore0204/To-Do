import React from "react";
import '../App.css'

export default function Tag(props){
    let colors=["#FFE5F1","#FFC93C","#EBC7E6"];
    let ind= Math.floor(Math.random()*3);
    return <span className="tag" style={{backgroundColor:colors[ind]}}>{props.children}</span>
}