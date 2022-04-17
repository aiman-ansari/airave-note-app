import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes } from "react-router-dom"
import { HomePage, LangingPage, Note, DeletePage, ArchivePage, SignUp, Login } from "./Pages"
import Mockman from 'mockman-js'
export const Routers = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<LangingPage/>} />
                <Route path="signup" element={<SignUp />} />
                {/* <Route path="mock" element={<Mockman />} /> */}
                <Route path="login" element={<Login />} />
                <Route path="home" element={<HomePage />} />
                <Route path="note" element={<Note />} />
                <Route path='delete' element={<DeletePage />} />
                <Route path='archive' element={<ArchivePage />} />
                <Route path="mock" element={<Mockman />} />
            </Routes>
        </div>
       
    )
}