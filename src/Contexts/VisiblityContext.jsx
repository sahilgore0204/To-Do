import React,{useState,useContext} from 'react';

//all logic for a context, including its provider component and value state can be combined into a single file
const vContext=React.createContext();
const vtContext=React.createContext();
export function useVisiblity(){
    console.log("called");
    return useContext(vContext);
}

export function useToggle(){
    return useContext(vtContext);
}

export default function VisiblityContext(props){
    const [visiblity,setVisiblity]=useState(false);
    function toggleVisiblity(){
        console.log("called toggle visiblity");
        setVisiblity(!visiblity);
    }

    return (<>
            <vContext.Provider value={visiblity}>
                <vtContext.Provider value={toggleVisiblity}>
                    {props.children}
                </vtContext.Provider>
            </vContext.Provider>
        </>);
    
}
