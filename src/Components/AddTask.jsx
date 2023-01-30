import React,{useEffect, useState} from "react";
import '../App.css';
import { useVisiblity,useToggle,useSelect } from "../Contexts/VisiblityContext";
import Button from "./Button";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';
import { useList,useViewList} from "../Contexts/TaskListContext";
export default function AddTask(props){
    const visible=useVisiblity();
    const operate=useList();
    console.log("addTask");
    const toggle=useToggle();
    const selectedInd=useSelect();
    const taskList=useViewList();
    const [taskInfo,setTaskInfo]=useState({title:"",description:"",tags:"",status:"OPEN"});
    const [startDate, setStartDate] = useState(new Date());

    useEffect(()=>{
        if(selectedInd==-1)
        return;
        const task=taskList[selectedInd];
        setTaskInfo({title:task.title,description:task.description,tags:task.tags,status:task.status});
    },[selectedInd]);

    function resetTaskInfo(){
        setTaskInfo({title:"",description:"",tags:"",status:"OPEN"});
        setStartDate(new Date());
    }
    function handleChange(event){
        setTaskInfo({...taskInfo,[event.target.name]:event.target.value});
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(taskInfo);
        operate("add-task",{task:{...taskInfo,duedate:startDate.toLocaleDateString('en-US',{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}});
        resetTaskInfo();
    }
    return <div className="add-task-container">
        <div className="add-task-modal" style={{display:visible?"block":"none"}}>
         <Button reset={resetTaskInfo} type="customize" duty="close-modal">&times;</Button>
         <form onSubmit={handleSubmit}>
            <label for="title" >Title</label> <br/>
            <input onChange={handleChange} id="title" type='text' name="title" maxLength="100" placeholder="Title of the task" required  value={taskInfo.title}/> <br/>

            <label for="description">Description</label> <br/>
            <input onChange={handleChange} id="description" type='text' name="description" maxLength="1000" placeholder="Describe the task" required value={taskInfo.description} /> <br/>

            <label for="duedate">Due Date</label> <br/>
            <DatePicker minDate={new Date()} selected={startDate} onChange={(date) => setStartDate(date)} /> <br/>

            <label for="tags">Tags</label> <br/>
            <input onChange={handleChange} id="tags" type="text" name="tags" placeholder="Add tags(comma separated)" value={taskInfo.tags} /> <br/>

            <label for="status">Status:</label> <br/>
            <select onChange={handleChange} name="status" id="status" required value={taskInfo.status}>
                <option value="OPEN" selected>OPEN</option>
                <option value="WORKING">WORKING</option>
                <option value="DONE">DONE</option>
                <option value="OVERDUE">OVERDUE</option>
            </select><br/>
            <Button type="medium-btn" duty="submit">Submit</Button>
         </form>
        </div>
        <div onClick={()=>{
            resetTaskInfo();
            toggle();
        }} className="add-task-modal-overlay" style={{display:visible?"block":"none",pointerEvents:visible?"all":"none"}}>

        </div>
    </div>
}