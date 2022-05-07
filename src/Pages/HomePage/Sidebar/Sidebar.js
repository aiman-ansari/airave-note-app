import React from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../../../Context/AuthContext'
import { useNote } from '../../../Context/NoteContext';
export const Sidebar = () =>{
    const {setIsLogin} = useAuth();
    const { setOpen} = useNote()
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
                    <button className='btn btn-secondary' 
                    onClick={() =>{
                        setOpen('add')

                    }}
                    >Create new note</button>
                </li>
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