import React from 'react'
import {Line} from "rc-progress"
import Recenttasks from "./recenttasks";
import colors from "./constants/colors";
import "./recenttasks.css";



const Progressbar = ({value}) => {
  return (
    <div className='progress-div'>
        <Line 
        percent={value}
        strokeColor={colors.orange}
        strokeWidth={2}
        trailWidth={2}
        />
        </div>
  )
}

export default Progressbar