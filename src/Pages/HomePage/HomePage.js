import React from "react";
import { ToastContainer } from "react-toastify";
import {
  Note,
  Filter,
  filterFunc,
  EditNote,
  Sidebar,
  SingleNote,
} from "../../Component";
import { useNote } from "../../Context/NoteContext";
export const HomePage = () => {
  const { note, open, setOpen, state, dispatch, openContainer } = useNote();
  let sorted = filterFunc(note, state);
  return (
    <div className='App-container'>
      <Sidebar />
      <div className='home-container'>
        <div className='add-note'>
          <div
            placeholder='Take a new Note'
            className='search-input'
            onClick={() => {
              setOpen("add");
            }}
          >
            Take a new Note
          </div>
          {open === "filter" ? (
            <i
              className='bi bi-filter toggle'
              onClick={() => {
                dispatch({
                  type: "CLEAR_ALL",
                });
                setOpen("none");
              }}
            ></i>
          ) : (
            <i
              className='bi bi-filter toggle'
              onClick={() => {
                setOpen("filter");
              }}
            ></i>
          )}
        </div>
        {open === "add" || open === "label" || open === "color" ? (
          <>
            <Note setOpen={setOpen} />
          </>
        ) : (
          <></>
        )}
        {open === "filter" && <Filter />}

        {sorted.length > 0 ? (
          sorted.map((item) => <SingleNote item={item} />)
        ) : (
          <div className='image-container'>
            <img src='/Images/addnote.svg' />
            <h5 className='text-primary mt-1'>You haven't added any note.</h5>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};
