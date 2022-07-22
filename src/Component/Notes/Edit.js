import React from "react";
import { useState } from "react";
import { useNote } from "../../Context/NoteContext";

import "./Note.css";

export const EditNote = ({ item }) => {
  const {
    addNote,
    dispatch,
    updateNote,
    open,
    setOpen,
    Editopen,
    setEditOpen,
  } = useNote();

  const [state, setState] = useState(item);

  return (
    <div>
      {item !== undefined ? (
        <div className='note box-shadow'>
          <div>
            <input
              type='text'
              placeholder='Enter your title'
              className='title-section'
              name='title'
              value={state.title}
              onChange={(e) => setState({ ...state, title: e.target.value })}
            />
          </div>
          <div className='body-section'>
            <textarea
              placeholder='Enter your body'
              name='content'
              className='body-section'
              value={state.content}
              onChange={(e) => setState({ ...state, content: e.target.value })}
            ></textarea>
          </div>
          <hr />
          <div className='info-section'>
            <div className='info-date'>{`Created at ${state.date}`}</div>
            <div className='info-icons'>
              <div>
                <select
                  value={state.priority}
                  onChange={(e) =>
                    setState({ ...state, priority: e.target.value })
                  }
                >
                  <option value='low' label='low'></option>
                  <option value='high' label='high'></option>
                </select>
              </div>

              <span>
                <i
                  className='bi bi-plus-circle-fill'
                  onClick={() => {
                    updateNote(state);
                    setOpen("none");
                  }}
                ></i>
              </span>
              <span>
                <i
                  className='bi bi-trash-fill'
                  onClick={() => {
                    setOpen("none");
                  }}
                ></i>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
