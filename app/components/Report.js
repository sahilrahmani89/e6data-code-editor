import React from 'react'
import { useAppContext } from '../provider/AppContext'

const Report = ({text}) => {
    const {dark} = useAppContext()
  return (
    <div className={`${dark? 'text-white' : ' text-gray'} border-2 border-indigo-200 p-4 mt-2 h-[20vh] overflow-y-scroll`}>
        <p>{text ? text : 'Nothing to show!'}</p>
    </div>
  )
}

export default Report