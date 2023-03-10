import React,{useState,useContext,useEffect} from "react";

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
    console.log(taskList);
    useEffect(()=>{
        const localdata=JSON.parse(window.localStorage.getItem("List"));
        if(localdata){
            setTaskList(localdata);
        }
    },[]);

    useEffect(()=>{
        //console.log(fload);
        window.localStorage.setItem("List",JSON.stringify(taskList));
        console.log(taskList);
    },[taskList]);

    //Remember one thing, even if the value of the state is changed, if there is some code remaining to
    //be executed, still the previous value of the state will be used, new value will be available on next reload.
    //react is reloading the component 2 times on reload thats why this problem is happening
    //solution 1: comment React.strictMode from index.js ,or don't cause [taskList] to execute on reload, could be done susing a boolean state
    

    //array.prototype.splice(startindex,howmany,replace elements..)
    console.log("called task list contx");
    function operate(action,payload){
        if(action==="add-task"){
            console.log(payload.task);
            setTaskList([...taskList,payload.task]);
        }
        else if(action==="overdue"){
            const ind=payload.task;
            setTaskList((prev)=>{
                prev[ind].status="OVERDUE";
                return prev;
            });
        }
        else if(action==="delete"){
            const ind=payload.task;
            console.log(ind);
            setTaskList((prev)=>{
                return prev.filter((task,id)=>id!==ind);
            });
        }
        else if(action==="done"){
            const ind=payload.task;
            setTaskList((prev)=>{
                return prev.map((task,id)=>{
                    if(id===ind)
                    task.status="DONE";
                    return task;
                })
            })
        }
    }
    return <ListContext.Provider value={operate}>
        <ViewListContex.Provider value={taskList}>
            {props.children}
        </ViewListContex.Provider>
    </ListContext.Provider>
}