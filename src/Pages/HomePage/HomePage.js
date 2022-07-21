import React from "react";
import {
  Note,
  Filter,
  filterFunc,
  EditNote,
  Sidebar,
  SingleNote,
  Header,
} from "../../Component";
import { useNote } from "../../Context/NoteContext";
export const HomePage = () => {
  const { note, open, setOpen, state, dispatch } = useNote();
  let sorted = filterFunc(note, state);
  return (
    <div>
      <Header />
      <div className='home-container'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='main-content m-3'>
          <div className='flex box-shadow-bottom mt-1'>
            <div
              placeholder='Take a new Note'
              class='search-input'
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
          {open === "edit" && <EditNote />}
          {sorted.length > 0 ? (
            sorted.map((item) => <SingleNote item={item} />)
          ) : (
            <h4 className='mt-3'>You don't have any note</h4>
          )}
        </div>
      </div>
    </div>
  );
};
