import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Hooks() {
  return (
    <>
      <div style={{display : "flex", gap : "30px", flexWrap : "wrap", justifyContent :"center"}} >
        <Link to ="useState">useState Hook</Link>
        <Link to ="useEffect">useEffect Hook</Link>
        <Link to ="useRef">useRef Hook</Link>
        <Link to ="useContext">useContext Hook</Link>
        <Link to ="useMemo">useMemo Hook</Link>
        <Link to ="useCallBack">useCallBack Hook</Link>
        <Link to ="useReducer">useReducer Hook</Link>
        <Link to ="customHooks">customHooks Hook</Link>
      </div>
      <Outlet />
    </>
  )
}

export default Hooks