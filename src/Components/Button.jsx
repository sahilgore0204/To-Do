import React,{useState} from "react";
import '../App.css';

export default function Button(props){
    return <button style={props.style} className={props.type}>{props.children}</button>
}