import React from "react";
import { useNote } from "../../Context/NoteContext";
import { Sidebar, SingleNote } from "../../Component";
import "../HomePage/HomePage.css";
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
    <div className='App-container'>
      <Sidebar />
      <div className='home-container'>
        <h5 className='mt-1 flex-justify-center'>Delete page</h5>

        <div>
          {trash.trashNote.length > 0 ? (
            <>
              {trash.trashNote.map((item) => (
                <div className='note-container'>
                  <div
                    className='single-note-container box-shadow-bottom'
                    key={item._id}
                    style={{ backgroundColor: item.color }}
                  >
                    <div className='h6'>{item.date}</div>
                    <div className='h5 mt-1 bold-text'>{item.title}</div>
                    <div className='note-body'>{item.content}</div>
                    <div className='flex gap-3'>
                      <div>
                        Priority:
                        {item.priority}
                      </div>
                      <div className='flex'>
                        {item.label.length > 0 ? (
                          <>
                            <span>Tag :</span>
                            {item.label.map((item) => (
                              <div className='ml-1'>{item}</div>
                            ))}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className='note-icons'>
                      <span>
                        <i
                          className='bi bi-trash-fill'
                          onClick={() => deleteNote(item)}
                        ></i>
                      </span>
                      <span>
                        <i
                          className='bi bi-archive-fill'
                          onClick={() => restoreNote(item)}
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className='image-container'>
              <img src='/Images/notFound.svg' />
              <h5 className='text-primary mt-1'>
                You don't have any deleted note.
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
