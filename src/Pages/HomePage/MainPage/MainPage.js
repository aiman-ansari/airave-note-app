import React from 'react'
import ReactDOM from 'react-dom'
import './MainPage.css'
export const MainPage = () =>{
    return(
        <div className='conatainer'>
<div className="note-container">
            <div >
                <input type="text" placeholder="Enter your title" className='title-section' />
            </div>
            <p>
                <input type="text" placeholder="Enter your body" className='body-section'></input>
            </p>
            <div className='info-section'>
                <ul className='info-list'>
                    <li>Created at 14/4/2022</li>
                    <div className='list-icons'>
                    <li>color</li>
                    <li>color</li>
                    <li>color</li>
                    <li>color</li>
                    </div>

                </ul>
            </div>
            
        </div>
        </div>
        
    )
}