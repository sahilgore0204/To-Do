import './App.css';
import Navbar from './Components/Navbar';
import AddTask from './Components/AddTask';
function App() {
  return (
    <>
      <Navbar className="nav-bar" />
      <AddTask/>
    </>
  );
}

export default App;
