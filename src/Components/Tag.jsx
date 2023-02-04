import React from "react";
import '../App.css'

export default function Tag(props){
    let colors=["#FFE5F1","#FFC93C","#EBC7E6"];
    let ind= Math.floor(Math.random()*3);
    function handleClick(event){
        if(props.duty==="select"){
            props.func((prev)=>{
                if(prev.includes(props.children)){
                    return prev.filter(tag=>{
                        return tag!==props.children;
                    })
                }
                return [...prev,props.children];
            });
        }
    }
    return <span onClick={handleClick} className="tag" style={{backgroundColor:colors[ind],cursor:"default"}}>{props.children}</span>
}