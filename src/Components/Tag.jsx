import React from "react";


export default function Tag(){
    let colors=["#FFE5F1","#FFC93C","#EBC7E6"];
    let ind= Math.floor(Math.random()*3);
    return <span className="tag" style={{backgroundColor:colors[ind]}}>Tag efijskdd1</span>
}