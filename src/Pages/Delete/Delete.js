import React from 'react'
import ReactDOM from 'react-dom'
import { useNote } from "../../Context/NoteContext"
import { Header } from "../../Pages/HomePage/Header"
import { Sidebar } from "../../Pages/HomePage/Sidebar/Sidebar"
// import './Archive.css'
export const DeletePage = () =>{
    const {archive, restoreArchive, addNote, deleteArchive , note, deleteNote} = useNote()
    console.log("getting archieves:",archive)
    return(
        <div>
            <Header />
            <div className="flex">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="archive-container">
                    <div>
                    {note.map((item) => 
                        <div key={item._id} className="note box-shadow">
                        <div className="h5 mt-1 bold-text">
                            {item.title}
                        </div>
                        <div className="note-body">
                            {item.content}
                        </div>     
                        <div className="note-icons">
                            <span>
                                <i className="bi bi-trash-fill"
                                onClick={() =>
                                    deleteNote(item)
                                }>
                                </i>
                            </span>
                            <span>
                                <i className="bi bi-archive-fill" 
                                    onClick={
                                        ()=>{
                                            // restoreArchive(item)
                                            addNote(item)
                                            // deleteNote(item)
                                            // deleteArchive(item)}}
                                        }}
                                >
                                </i>
                            </span>
                            <span>
                                <i className="bi bi-label" 
                                    onClick={() =>{
                                        deleteArchive(item)
                                        }}>
                                </i>
                            </span>
                        </div>    
                    </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}