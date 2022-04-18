import React from 'react'
import { Link, Navigate } from "react-router-dom"
import { useAuth } from '../../../Context/AuthContext'
export const Sidebar = () =>{
    const {setIsLogin} = useAuth()
    return(
        <div>
            <ul>
                <Link to="/home">
                <li>
                    <i className="bi bi-house-door-fill mr-1"></i>Home
                </li>
                </Link>
                <Link to="/delete">
                <li>
                    <i className="bi bi-trash-fill mr-1"></i>Delete
                </li>
                </Link>
                <Link to="/archive">
                <li>
                    <i class="bi bi-archive mr-1"></i>Archive
                </li>
                </Link>
                <li>
                    <Link to="/">
                    Logout <i className="bi bi-box-arrow-in-right" onClick={() =>{
                         setIsLogin(false)
                    }}></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}