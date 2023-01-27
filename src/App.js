import React,{useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import Button from './Components/Button';
import VisiblityContext from './Contexts/VisiblityContext';
import OneTask from './Components/OneTask';
import TaskListContext from './Contexts/TaskListContext';
import DisplayTaskList from './Components/DisplayTaskList';

function App() {
  console.log("called app");
  return (
    <>
      <Navbar className="nav-bar" />
      <VisiblityContext>
        <TaskListContext>
          <Button style={{backgroundColor:"#86E5FF",color:"black",display:"block",margin:"15px auto 5px"}} type="large-btn" duty="add-task">Add a Task</Button>
          <AddTask/>
        </TaskListContext>
      </VisiblityContext>
      <h1 className='task-heading'>Your Tasks</h1>
      <TaskListContext>
        <DisplayTaskList/>
      </TaskListContext>
      {/* <TaskList/>
      <Button bgcolor="red" type="large-btn">Large btn</Button>
      <Button bgcolor="yellow" type="small-btn">Small btn</Button> */}
    </>
  );
}

export default App;
