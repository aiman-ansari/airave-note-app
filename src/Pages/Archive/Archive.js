import React from 'react'
import { useNote } from "../../Context/NoteContext"
import { Header } from "../../Pages/HomePage/Header"
import { Sidebar } from "../../Pages/HomePage/Sidebar/Sidebar"
import { Note } from '../Notes/Note'
import './Archive.css'
export const ArchivePage = () =>{
    const {archive, restoreArchive, deleteArchive , open , setOpen} = useNote()
    
    return(
        <div>
            <Header />
            <div className="flex">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div>

                </div>
                <div className="archive-container">
                    <div>
                    {open ==='add' ? <Note setOpen={setOpen}/> :<></>}

                        {archive.length === 0 ? <h4>You dont have any archive</h4>:
                    archive.map((item) => 
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
                                    deleteArchive(item)
                                }>
                                </i>
                            </span>
                            <span>
                                <i className="bi bi-archive-fill" 
                                    onClick={()=>
                                        restoreArchive(item)
                                    }
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
                    )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
                                    }