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
import PromptBox from './Components/PromptBox';
import { useViewList } from './Contexts/TaskListContext';
import Tag from './Components/Tag';
function App() {
  //console.log("called app");
  const [filterVisible,setFilterVisible]=useState(false);
  const [selectedTags,setSelectedTags]=useState([]);
  console.log(selectedTags);
  const taskList=useViewList();
  let tagsList=[];
  taskList.forEach((task)=>{
    tagsList=[...tagsList,...(task.tags.split(',').map(tag=>tag.trim()))];
  })
  return (
    <>
      <Navbar className="nav-bar" />
      <Button style={{backgroundColor:"#86E5FF",color:"black",display:"block",margin:"80px auto 5px"}} type="large-btn" duty="add-task">Add a Task</Button>
      <AddTask/>
      <DisplayTaskList tags={selectedTags}/>
      <div className='invisible'></div>
      {/* <TaskList/>
      <Button bgcolor="red" type="large-btn">Large btn</Button>
      <Button bgcolor="yellow" type="small-btn">Small btn</Button> */}
      <PromptBox/>
      <div className='filter-container' onMouseEnter={()=>{
        setFilterVisible(true);
    }} onMouseLeave={()=>{
        setFilterVisible(false);
    }}> 
        <Button func={setFilterVisible} type="filter">Filter wrt tags</Button>
        <div style={{display:filterVisible?"block":"none"}} className="displayTags">
          {tagsList.map((tag,ind)=><Tag func={setSelectedTags} duty="select" key={ind}>{tag}</Tag>)}
        </div>
      </div>
    </>
  );
}

export default App;



/* If you are creating a separate file for a context, remember use its instance only once in your app.js, because if the component inside it changes a state(which it will probably do) only the first occurenence will be reloaded,rest will be remain same
 If you are planning to create a context, better way is to wrap your whole app.js inside it. */