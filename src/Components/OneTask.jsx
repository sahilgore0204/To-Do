import React from "react";
import '../App.css'
import Tag from "./Tag";
export default function OneTask(props){
    const date=props.task.duedate.toLocaleDateString('en-US',{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
    const tags=props.task.tags.split(',').map(tag=>tag.trim());
    return <>
        <div className="one-task">
            <div className="content">
                <div className="title">{props.task.title}</div>
                <div className="description" style={{marginBottom:"10px"}}>{props.task.description}</div>
                <div className="date">Due on {date}</div>
                <div className="status">Status: {props.task.status}</div>
                <div className="status-space" style={{marginBottom:"5px"}}>{tags.map((tag,ind)=><Tag key={ind}>{tag}</Tag>)}</div>
            </div>
            <div className="edit-btn">
                <button title="Mark as done" style={{backgroundColor:"#38E54D"}} className="edit">&#10004;</button>
                <button title="Update Task" style={{backgroundColor:"#FFB100"}} className="edit">&#10000;</button>
                <button title="Delete Task" style={{backgroundColor:"#F55050"}} className="edit">&#x2716;</button>
            </div>
        </div>
    </>
}