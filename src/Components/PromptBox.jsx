import React,{useContext} from "react";
import "../App.css";
import { useVisiblityP,useToggleP,useSelect,useVisiblity,useToggle } from "../Contexts/VisiblityContext";
import { useList,useViewList } from "../Contexts/TaskListContext";
export default function PromptBox(props){
    const visiblity=useVisiblityP();
    const addTaskVisiblity=useVisiblity();
    const toggleP=useToggleP();
    const ind=useSelect();
    const operate=useList();
    const toggle=useToggle();
    const list=useViewList();
    function handleClick(event){
        if(event.target.id==="NO"){
            if(addTaskVisiblity){
                operate("delete",{task:list.length-1});
                toggleP();
            }
            else
            toggleP();
        }
        else{
            operate('delete',{task:ind});
            if(addTaskVisiblity){
                //its an update request
                //delete the entry of selected index
                toggleP();
                toggle();
            }
            else{
                toggleP();
            }
        }
    }
    return <>
        <div className="msg-modal" style={{display:visiblity?"block":"none"}}>
            <h1>Are You Sure</h1>
            <button id="YES" onClick={handleClick}>YES</button>
            <button id="NO" onClick={handleClick}>No</button>
            <button onClick={()=>{
                handleClick({target:{id:"NO"}});
            }} className="close-msg-modal">&times;</button>
        </div>
        <div onClick={()=>{
            handleClick({target:{id:"NO"}});
        }} className="msg-modal-overlay" style={{display:visiblity?"block":"none",pointerEvents:visiblity?"all":"none"}}></div>
    </>
}