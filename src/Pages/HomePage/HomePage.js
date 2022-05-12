import React from 'react'
import { Note, Filter, filterFunc, EditNote, Sidebar , SingleNote, Header} from '../../Component'
import { useNote } from '../../Context/NoteContext'
import { Label } from '../../Component/Label/Label'
export const HomePage = () =>{
    const {note, open, setOpen, state} = useNote()
   
    let sorted = filterFunc(note, state)    
    return(
        <div>
            <Header />
            <div className="home-container">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main-content m-3">
                    <div className='flex box-shadow-bottom mt-2'>
                        <input type="text" placeholder="Search here" class="search-input"/>
                        <i className='bi bi-filter toggle' 
                            onClick={() =>{
                            setOpen('filter')
                        }}>
                        </i>         
                    </div> 
                    {open ==='add' || open==="label" ? 
                    <>
                    <Note setOpen={setOpen}/>  
                    </>:<></>}
                    {/* {open === "label" ? <Label /> :<></>} */}

                    {open ==='filter' && <Filter />}

                    {open === "edit" && <EditNote/> }
                    {  sorted.length > 0 ?  
                        sorted.map((item)=> <SingleNote item={item} />)
                        :
                        <h4 className='mt-3'>You don't have any note</h4>
                    }
                </div>
            </div>
        </div>
    )
}