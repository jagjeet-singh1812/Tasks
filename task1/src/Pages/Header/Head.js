import React from 'react'
import {useNavigate} from "react-router-dom"
import "./head.css"
const Head = () => {
    const navigate=useNavigate();
  return (
    <div>
        <div className="hedline_title">
            <h1>Taskify</h1>
        </div>
      <div className="whole_div_btn">
      <div className="button" onClick={()=>navigate("/incomplete")}>Incomplete</div>
      <div className="button" onClick={()=>navigate("/complete")}>Complete</div>
      </div>
    </div>
  )
}

export default Head
