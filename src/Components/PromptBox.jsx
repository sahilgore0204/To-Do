import React,{useContext} from "react";
import "../App.css";
import { useVisiblityP,useToggleP,useSelect,useVisiblity } from "../Contexts/VisiblityContext";
import { useList } from "../Contexts/TaskListContext";
export default function PromptBox(props){
    const visiblity=useVisiblityP();
    const addTaskVisiblity=useVisiblity();
    const toggle=useToggleP();
    const ind=useSelect();
    const operate=useList();
    function handleClick(event){
        if(event.target.id==="NO"){
            toggle();
            //if(addTaskVisiblity)
            //delete the last element from taskList;
        }
        else{
            if(addTaskVisiblity){
                //its an update request
                //delete the entry of selected index
                toggle();
                return;
            }
            operate("delete",{task:ind});
            toggle();
        }
    }
    return <>
        <div className="msg-modal" style={{display:visiblity?"block":"none"}}>
            <h1>Are You Sure</h1>
            <button id="YES" onClick={handleClick}>YES</button>
            <button id="NO" onClick={handleClick}>No</button>
            <button onClick={()=>{
                toggle();
            }} className="close-msg-modal">&times;</button>
        </div>
        <div onClick={()=>{
            toggle();
        }} className="msg-modal-overlay" style={{display:visiblity?"block":"none",pointerEvents:visiblity?"all":"none"}}></div>
    </>
}