import React from "react";
import { useViewList} from "../Contexts/TaskListContext";
import { useVisiblity } from "../Contexts/VisiblityContext";
import '../App.css'
import OneTask from "./OneTask";

export default function DisplayTaskList(props){
    const taskList=useViewList();
    //console.log(taskList);
    return <div className="taskList">
        <h1 className='task-heading'>Your Tasks</h1>
        {taskList.filter((task,ind)=>{
            if(props.tags.length===0)
            return true;
            let availableTags=task.tags.split(",").map(tag=>tag.trim());
            let ans=false;
            availableTags.forEach((tag)=>{
                if(props.tags.includes(tag))
                ans=true;
            });
            return ans;
        }).map((task,ind)=>{
            return <OneTask key={ind} task={task} id={ind}/>
        })}
    </div>
}