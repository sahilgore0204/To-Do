import React from "react";
import { useViewList } from "../Contexts/TaskListContext";
import { useVisiblity } from "../Contexts/VisiblityContext";


export default function DisplayTaskList(props){
    const visi=useVisiblity();
    const taskList=useViewList();
    console.log(taskList);
    return <>

    </>
}