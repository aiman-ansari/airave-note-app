import React from 'react'
import { useNote } from "../../Context/NoteContext"
import { Note, Sidebar, Header, SingleNote} from '../../Component'
import './../HomePage/HomePage.css' 
export const Label = () =>{
    const { note,labels} = useNote()
   
   return(
        <div>
        <Header />
        <div className="home-container">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main-content m-3">
               
                {labels.length > 0
                     ? labels.map((label, index) => {
                         const filteredLabel = note.filter((note) =>
                         note.label.includes(label)
                         );
                        {
                        return (
                        <div key={index}>
                            {filteredLabel.length > 0 ? (
                            <>
                                <div >
                                <li>{label}</li>
                                </div>
                                <div>
                                {filteredLabel.map((item) => {
                                    return (
                                    <SingleNote
                                        item={item}
                                        key={item._id}
                                        
                                    />
                                    );
                                })}
                                </div>
                            </>
                            ) : null}
                        </div>
                );
              }
            })
          : null}
      </div>
      {note.length < 1 && <>You Don't have any label</>
      }
               
            </div>
        </div>
    )
}
