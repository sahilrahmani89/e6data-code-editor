"use client"
import React,{useState} from 'react'
import Editor from "@monaco-editor/react";
import { useAppContext } from '../provider/AppContext';


const E6editor = () => {
    const {dark,debugConsole,handleEditorChange} = useAppContext()
    const [language, setLanguage] = useState("javascript");
    const [isEditorReady, setIsEditorReady] = useState(false);

    function handleEditorDidMount() {
      setIsEditorReady(true);
    }
    
    function toggleLanguage() {
      setLanguage(language === "javascript" ? "python" : "javascript");
    }
    
    let style = '65vh'
    if(window){
    style= window.innerWidth>=1280 ? `${debugConsole?'40vh':'65vh'}`:`${debugConsole?'20vh':'30vh'}`
    }
    
    return (
      <>
       <div className={`mb-2`}>
        <button 
         className={`px-4 py-2   ${dark? 'bg-[#eeeeee] text-gray' : 'bg-gray-800 text-white'} rounded max-w-[250px]`}
         onClick={toggleLanguage} >
          Toggle language
        </button>
        </div>
        
        <Editor
          height= {style}// By default, it fully fits with its parent
          theme={dark?'vs-dark':'light'}
          language={language}
          loading={'Loading Please wait.'}
          value={language}
          editorDidMount={handleEditorDidMount}
          onChange={handleEditorChange}
        />
      </>
    )
}

export default E6editor