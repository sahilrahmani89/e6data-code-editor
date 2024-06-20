"use client"
import React, { useState } from 'react';
import E6editor from './E6editor';
import { useAppContext } from '../provider/AppContext';
import Report from './Report';

const Homepage= () => {

  const {dark,setdark,
         handleRun,handleSubmit,
         debugConsole,
         handleDebug,
         editorValue,
  } = useAppContext()
  

  const toggleDarkMode = () => {
    setdark((prev)=>!prev);
  };

  return (
    <React.Fragment>
      <div className={`flex flex-col h-screen p-4  transition-colors duration-300 ${dark?'bg-[#2E2E2E]':'bg-[#eeeeee]'}`}>
        <div className="flex justify-between mb-4 items-center font-bold">
          <h1 className={`${dark? 'text-white' : ' text-gray'}`}>E6Data Code Editor</h1>
          <button
            className={`px-4 py-2   ${dark? 'bg-[#eeeeee] text-gray' : 'bg-gray-800 text-white'} rounded`}
            onClick={toggleDarkMode}
          >
            Toggle Theme
          </button>
        </div>
        <div className="flex lg:flex-1  lg:flex-row overflow-hidden flex-col gap-2">
          <div className={`w-full xl:w-1/3 p-4 ${dark ? 'bg-[#454545] text-[#ffffff]': 'bg-[#FBFBFA] text-[#454545]' } overflow-auto h-[40vh] lg:h-auto`}>
            <h2 className="text-xl font-bold mb-4">Test Cases</h2>
            <ul>
              <li className="mb-2">Test Case 1</li>
              <li className="mb-2">Test Case 2</li>
              <li className="mb-2">Test Case 3</li>
            </ul>
          </div>
          <div className={`w-full xl:w-2/3 p-4 ${dark ? 'bg-[#454545]': 'bg-[#FBFBFA]'} overflow-y-scroll`}>
            <E6editor />
            <div className="flex justify-end space-x-2 mt-2">
            {debugConsole && <button
                className={`px-4 py-2   ${dark? 'bg-[#eeeeee] text-gray' : 'bg-gray-800 text-white'} rounded`}
                onClick={handleDebug}
              >
                Hide Output
              </button>
              }
              <button
                className={`px-4 py-2   ${dark? 'bg-[#eeeeee] text-gray' : 'bg-gray-800 text-white'} rounded`}
                onClick={handleRun}
              >
                Run
              </button>
              <button
                className={`px-4 py-2   ${dark? 'bg-[#eeeeee] text-gray' : 'bg-gray-800 text-white'} rounded`}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            {
              debugConsole &&
              <Report
                text={editorValue}
              />
            }
          </div>
        </div>
        
      </div>
    </React.Fragment>
  );
};

export default Homepage;
