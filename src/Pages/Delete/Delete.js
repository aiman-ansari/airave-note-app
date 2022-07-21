import React from "react";
import { useNote } from "../../Context/NoteContext";
import { Sidebar, Header } from "../../Component";
export const DeletePage = () => {
  const {
    archive,
    restoreArchive,
    addNote,
    deleteArchive,
    note,
    deleteNote,
    restoreNote,
    trash,
  } = useNote();
  return (
    <div>
      <Header />
      <div className='flex'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='archive-container'>
          <div>
            {trash.trashNote.length > 0 ? (
              <>
                {trash.trashNote.map((item) => (
                  <div key={item._id} className='note box-shadow'>
                    <div className='h5 mt-1 bold-text'>{item.title}</div>
                    <div className='note-body'>{item.content}</div>
                    <div className='note-icons'>
                      <span></span>
                      <span>
                        <i
                          className='bi bi-archive-fill'
                          onClick={() => restoreNote(item)}
                        ></i>
                      </span>
                      <span>
                        <i
                          className='bi bi-trash'
                          onClick={() => {
                            deleteNote(item);
                          }}
                        ></i>
                      </span>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h1>EMPTYYYYYYYYYYYYY</h1>
            )}
          </div>
          {/* <div>
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
                    </div> */}
        </div>
      </div>
    </div>
  );
};
