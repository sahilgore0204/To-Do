import React,{useState} from "react";
import '../App.css';
import { useVisiblity,useToggle } from "../Contexts/VisiblityContext";
import Button from "./Button";
export default function AddTask(props){
    const visible=useVisiblity();
    console.log("addTask");
    const toggle=useToggle();
    const [tags,setTags]=useState([]);
    return <div className="add-task-container">
        <div className="add-task-modal" style={{display:visible?"block":"none"}}>
         <Button type="customize" duty="close-modal">&times;</Button>
         <form>
            <label for="title" >Title</label> <br/>
            <input id="title" type='text' name="title" maxLength="100" placeholder="Title of the task" required /> <br/>

            <label for="description">Description</label> <br/>
            <input id="description" type='text' name="description" maxLength="1000" placeholder="Describe the task" required /> <br/>

            <label for="duedate">Due Date</label> <br/>
            <input id="duedate" type='date' name="duedate"/> <br/>

            <label for="tags">Tags</label> <br/>
            <input id="tags" type="text" name="tags" placeholder="Add tags(comma separated)"/> <br/>

            <label for="status">Status:</label> <br/>
            <select name="status" id="status" required>
                <option value="OPEN" selected>OPEN</option>
                <option value="WORKING">WORKING</option>
                <option value="DONE">DONE</option>
                <option value="OVERDUE">OVERDUE</option>
            </select><br/>
            <Button type="medium-btn" duty="submit">Submit</Button>
         </form>
        </div>
        <div onClick={toggle} className="add-task-modal-overlay" style={{display:visible?"block":"none",pointerEvents:visible?"all":"none"}}>

        </div>
    </div>
}