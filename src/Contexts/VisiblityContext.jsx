import React,{useState,useContext} from 'react';

//all logic for a context, including its provider component and value state can be combined into a single file
const vContext=React.createContext();
const vtContext=React.createContext();
const selectContext=React.createContext();

export function useVisiblity(){
    console.log("called");
    return useContext(vContext);
}

export function useToggle(){
    return useContext(vtContext);
}

export function useSelect(){
    return useContext(selectContext);
}

export default function VisiblityContext(props){
    //console.log("called visi contx");
    const [visiblity,setVisiblity]=useState(false);
    const [selected,setSelected]=useState(-1);
    function toggleVisiblity(ind=-1){
        console.log("called toggle visiblity");
        setVisiblity(!visiblity);
        setSelected(ind);
    }

    return (<>
            <vContext.Provider value={visiblity}>
                <vtContext.Provider value={toggleVisiblity}>
                    <selectContext.Provider value={selected}>
                        {props.children}
                    </selectContext.Provider>
                </vtContext.Provider>
            </vContext.Provider>
        </>);
    
}
