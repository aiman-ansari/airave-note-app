import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom"

export const Sidebar = () =>{
    return(
        <div>
            <ul>
                <Link to="/note">
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
                   <Link to="/note">
                    <button className="btn btn-secondary width-100">Create New Note</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}