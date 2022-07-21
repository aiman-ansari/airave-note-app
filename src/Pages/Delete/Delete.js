import React from "react";
import { useNote } from "../../Context/NoteContext";
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
    <div className='flex'>
      <div className='home-container'>
        <div>
          {trash.trashNote.length > 0 ? (
            <>
              {trash.trashNote.map((item) => (
                <div
                  key={item._id}
                  className='single-note-container box-shadow'
                >
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
