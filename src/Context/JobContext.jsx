import React, { createContext, useReducer } from 'react'
import reducer from './reducer'
 
export const jobContext = createContext()

const initialState = {
    favJobs: [],
}

export default function jobContextPorvider() {

const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>jobContext</div>
  )
}
