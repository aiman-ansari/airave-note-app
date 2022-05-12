import React from 'react'
import { useState } from 'react'

import './Color.css'
export const Color=({handleColor}) =>{
    const [color, setColor] = useState(["#f0ffff", "#f5f5dc","#f0e68c","#ffe4e1","	rgb(205, 255, 196)","	rgb(176, 255, 217)", "rgb(224, 160, 196)","rgb(160, 224, 161)"])
    return(
        <div className='color-container'>
            {color.map((item) => 
            <div style={{backgroundColor:item}} className='color-div' onClick={() =>{
                handleColor(item)
            }}></div>)}
        </div>
    )
}