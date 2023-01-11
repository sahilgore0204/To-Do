import React,{useState} from "react";
import '../App.css';

export default function AddTask(){
    const [tags,setTags]=useState([]);
    return <div className="add-task-container">
        <form>
            <label for="title" >Title</label> <br/>
            <input id="title" type='text' name="title" maxLength="100" placeholder="Title of the task" required /> <br/>

            <label for="description">Description</label> <br/>
            <input id="description" type='text' name="description" maxLength="1000" placeholder="Describe the task" required /> <br/>

            <label for="duedate">Due Date</label> <br/>
            <input id="duedate" type='date' name="duedate"/> <br/>

            <label for="tags">Tags</label> <br/>
            <input id="tags" type="text" name="tags" placeholder="Add tags"/> <br/>

            <label for="status">Status:</label> <br/>
            <select name="status" id="status" required>
                <option value="OPEN" selected>OPEN</option>
                <option value="WORKING">WORKING</option>
                <option value="DONE">DONE</option>
                <option value="OVERDUE">OVERDUE</option>
            </select>
        </form>
    </div>
}