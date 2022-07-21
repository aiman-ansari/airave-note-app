import React from "react";
import { useNote } from "../../Context/NoteContext";
import { Note } from "../../Component";
import "./Archive.css";
import "./../HomePage/HomePage.css";
export const ArchivePage = () => {
  const { archive, restoreArchive, deleteArchive, open, setOpen } = useNote();

  return (
    <div className='home-container'>
      <div className='home-container'>
        {open === "add" ? <Note setOpen={setOpen} /> : <></>}

        {archive.length === 0 ? (
          <div className='image-container'>
            <img src='/Images/notFound.svg' />
            <h5 className='text-primary mt-1'>
              You don't have any archive note.
            </h5>
          </div>
        ) : (
          archive.map((item) => (
            <div key={item._id} className='single-note-container box-shadow'>
              <div className='h5 mt-1 bold-text'>{item.title}</div>
              <div className='note-body'>{item.content}</div>
              <div className='note-icons'>
                <span>
                  <i
                    className='bi bi-trash-fill'
                    onClick={() => deleteArchive(item)}
                  ></i>
                </span>
                <span>
                  <i
                    className='bi bi-archive-fill'
                    onClick={() => restoreArchive(item)}
                  ></i>
                </span>
                <span>
                  <i
                    className='bi bi-label'
                    onClick={() => {
                      deleteArchive(item);
                    }}
                  ></i>
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
