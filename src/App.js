import './App.css';
import Navbar from './Components/Navbar';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import Button from './Components/Button';
function App() {
  return (
    <>
      <Navbar className="nav-bar" />
      <Button style={{backgroundColor:"blue",color:"black",display:"block",margin:"5px auto"}} type="large-btn">Add a Task</Button>
      <AddTask/>
      <TaskList/>
      <Button bgcolor="red" type="large-btn">Large btn</Button>
      <Button bgcolor="yellow" type="small-btn">Small btn</Button>
    </>
  );
}

export default App;
