import React,{useState,useContext} from "react";

const ListContext=React.createContext();
const ViewListContex=React.createContext();

export function useList(){
    return useContext(ListContext);
}

export function useViewList(){
    return useContext(ViewListContex);
}

export default function TaskListContext(props){
    const [taskList,setTaskList]=useState([]);
    console.log("called task list contx");
    function operate(action,payload){
        if(action==="add-task"){
            console.log(payload.task);
            setTaskList([...taskList,payload.task]);
        }
    }
    return <ListContext.Provider value={operate}>
        <ViewListContex.Provider value={taskList}>
            {props.children}
        </ViewListContex.Provider>
    </ListContext.Provider>
}