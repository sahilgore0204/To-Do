import React,{useState,useContext} from 'react';

//all logic for a context, including its provider component and value state can be combined into a single file
const vContext=React.createContext();
const vtContext=React.createContext();
const selectContext=React.createContext();

const vContextP=React.createContext();
const vtContextP=React.createContext();

export function useVisiblity(){
    console.log("called");
    return useContext(vContext);
}

export function useToggle(){
    return useContext(vtContext);
}

export function useVisiblityP(){
    return useContext(vContextP);
}

export function useToggleP(){
    return useContext(vtContextP);
}

export function useSelect(){
    return useContext(selectContext);
}

export default function VisiblityContext(props){
    //console.log("called visi contx");
    const [visiblity,setVisiblity]=useState(false);
    const [selected,setSelected]=useState(-1);
    const [visiblityP,setVisiblityP]=useState(false);
    function toggleVisiblity(ind=-1){
        console.log("called toggle visiblity");
        setVisiblity(!visiblity);
        setSelected(ind);
    }

    function toggleVisiblityP(ind=-1){
        setVisiblityP(!visiblityP);
        if(ind===-1 && visiblity)
        return;
        setSelected(ind);
    }

    return (<>
            <vContextP.Provider value={visiblityP}>
                <vtContextP.Provider value={toggleVisiblityP}>
                    <vContext.Provider value={visiblity}>
                        <vtContext.Provider value={toggleVisiblity}>
                            <selectContext.Provider value={selected}>
                                {props.children}
                            </selectContext.Provider>
                        </vtContext.Provider>
                    </vContext.Provider>
                </vtContextP.Provider>
            </vContextP.Provider>
        </>);
    
}
