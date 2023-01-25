import React,{useState,useContext} from "react";
import '../App.css';
import { useToggle } from "../Contexts/VisiblityContext";
export default function Button(props){
    let visiblity=useToggle();
    //console.log("button");
    function handleClick(){
        if(props.duty==="add-task"){
            visiblity();
        }
        else if(props.duty==="submit"){
            console.log("form submitted");
        }
        else if(props.duty==="close-modal"){
            props.reset();
            visiblity();
        }
    }
    return <button onClick={handleClick} style={props.style} className={props.type} type={props.duty}>{props.children}</button>
}