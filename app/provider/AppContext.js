
"use client"
import React,{createContext, useState, useContext,useEffect} from "react";

const AppContext = createContext()
export const useAppContext = () =>  useContext(AppContext)


export const AppProvider = ({children})=>{
    const [dark,setdark] = useState(false)
    const [debugConsole,setdebugConsole] = useState(false)
    const [editorValue,seteditorValue] = useState('')

    const handleRun = () => {
        setdebugConsole(true)
    };
    
    const handleSubmit = () => {
        setdebugConsole(true)
    };

    const handleDebug = () =>{
        setdebugConsole(false)
    }

    function handleEditorChange(value) {
        seteditorValue(value)
    }

    return(
    <AppContext.Provider value={{
            dark,
            setdark,
            handleRun,
            handleSubmit,
            debugConsole,
            handleDebug,
            handleEditorChange,
            editorValue,
        }}>
        {children}
    </AppContext.Provider>)
}

export default AppProvider
