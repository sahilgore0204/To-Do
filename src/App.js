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
  //console.log("called app");
  return (
    <>
      <Navbar className="nav-bar" />
      <Button style={{backgroundColor:"#86E5FF",color:"black",display:"block",margin:"80px auto 5px"}} type="large-btn" duty="add-task">Add a Task</Button>
      <AddTask/>
      <DisplayTaskList/>
      <div className='invisible'></div>
      {/* <TaskList/>
      <Button bgcolor="red" type="large-btn">Large btn</Button>
      <Button bgcolor="yellow" type="small-btn">Small btn</Button> */}
    </>
  );
}

export default App;



/* If you are creating a separate file for a context, remember use its instance only once in your app.js, because if the component inside it changes a state(which it will probably do) only the first occurenence will be reloaded,rest will be remain same
 If you are planning to create a context, better way is to wrap your whole app.js inside it. */