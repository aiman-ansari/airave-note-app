import React from 'react'
import {Sidebar} from './Sidebar/Sidebar'
import { Header } from './Header'
import {SingleNote} from './../Notes/SingleNote'
import { useNote } from '../../Context/NoteContext'
import {Note } from '../Notes/Note'
export const HomePage = () =>{
    const {note, open, setOpen} = useNote()
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth() + 1)+'-'+today.getDate();
    var time = today.getHours() + ':' + today.getMinutes() +':' +today.getSeconds()
    var dateTime = date +' ' + time;
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
                    {open ==='add' ? <Note setOpen={setOpen}/> :<></>}
                    {note.length === 0 || note===undefined ?  <h4>You don't have any note</h4> :
                    <>
                    <div className="notes">
                        <div className="notes">
                       
                            <SingleNote note={note} date={dateTime} setOpen={setOpen} open={open}/>
                     </div> 

                    </div> 
                    </>    

                    }
                </div>
            </div>
        </div>
        
    )
}