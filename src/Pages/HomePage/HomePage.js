import React from 'react'
import {Sidebar} from './Sidebar/Sidebar'
import { Header } from './Header'
import {SingleNote} from './../Notes/SingleNote'
import { useNote } from '../../Context/NoteContext'
import {Note } from '../Notes/Note'
export const HomePage = () =>{
    const {note} = useNote()
    return(
        <div>
            <Header />
            <div className="flex">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main-content m-3">
                    <div className='flex box-shadow-bottom mt-2'>
                        <input type="text" placeholder="Search here" class="input"/>
                        <i className='bi bi-plus toggle'></i>
                    </div> 
                    <Note />
                    {note.length === 0 || note===undefined ?  <h4>You don't have any note</h4> :
                    <>
                    <div className="notes">
                        <div className="notes">
                        {note.map((item) => 
                        
                           {return <SingleNote note={item} />}

                            )}
                     </div> 

                    </div> 
                    </>    

                    }
                </div>
            </div>
        </div>
        
    )
}