import React from "react";
import '../App.css'
import Tag from "./Tag";
import { useToggle,useToggleP } from "../Contexts/VisiblityContext";
import { useList } from "../Contexts/TaskListContext";
import ConvertLocaleDateToStringDate from "../Algorithms/formStringDate";

export default function OneTask(props){
    const date=props.task.duedate;
    const tags=props.task.tags.split(',').map(tag=>tag.trim());
    const toggleVisiblity=useToggle();
    const stringDate=ConvertLocaleDateToStringDate(date)
    const taskDate=new Date(stringDate);
    const todayDate=new Date();
    const operate=useList();
    const togglePrompt=useToggleP();
    if((todayDate-taskDate)>86400000){
        operate("overdue",{task:props.id});
    }
    return <>
        <div className="one-task">
            <div className="content">
                <div className="title">{props.task.title}</div>
                <div className="description" style={{marginBottom:"10px"}}>{props.task.description}</div>
                <div className="date">{(todayDate-taskDate)>86400000 && "Was"} Due on {date}</div>
                <div className="status">Status: {props.task.status}</div>
                <div className="status-space" style={{marginBottom:"5px"}}>{tags.map((tag,ind)=><Tag duty="noselect" key={ind}>{tag}</Tag>)}</div>
            </div>
            <div className="edit-btn">
                <button onClick={()=>{
                    operate("done",{task:props.id});
                }} title="Mark as done" style={{backgroundColor:"#38E54D"}} className="edit">&#10004;</button>
                <button onClick={()=>{
                    toggleVisiblity(props.id);
                }}  title="Update Task" style={{backgroundColor:"#FFB100"}} className="edit">&#10000;</button>
                <button onClick={()=>{
                    togglePrompt(props.id);
                }} title="Delete Task" style={{backgroundColor:"#F55050"}} className="edit">&#x2716;</button>
            </div>
        </div>
    </>
}