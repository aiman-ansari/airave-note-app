import React from 'react'
import ReactDOM from 'react-dom'
import {Sidebar} from './Sidebar/Sidebar'
import {MainPage} from './MainPage/MainPage'
import { Header } from './Header'
import {Note} from './../Notes/Note'
export const HomePage = () =>{
    return(
        <div>
            <Header />
            <div className="flex">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main-content">
                </div>
            </div>
        </div>
        
    )
}