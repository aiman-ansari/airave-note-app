import React from 'react'
import { useNote } from "../../Context/NoteContext"
import { Note, Sidebar, Header, SingleNote} from '../../Component'
import './../HomePage/HomePage.css' 
export const Label = () =>{
    const {archive, restoreArchive, deleteArchive , open , setOpen, note,labels, setLabel} = useNote()
   console.log(note)
//    const something = [...label]
//    console.log(something)
   console.log("from label :",labels)
   return(
        <div>
        <Header />
        <div className="home-container">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main-content m-3">
                {/* {note.length > 0 ? 
                <>
                    {note.map((item) => 
                        <>
                    <h5>{item.label}</h5>
                    <SingleNote item={item}  />
                        </>
                    
                    )}
                   
                </>
                :
                <h4>no label</h4>} */}
                {labels.length > 0
                     ? labels.map((label, index) => {
                         const filteredLabelList = note.filter((note) =>
                         note.label.includes(label)
                         );
                        {
                        return (
                        <div key={index}>
                            {filteredLabelList.length > 0 ? (
                            <>
                                <div >
                                <li>{label}</li>
                                </div>
                                <div>
                                {filteredLabelList.map((item) => {
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
      {note.length < 1 && <>no</>
      }
               
            </div>
        </div>
    )
}
