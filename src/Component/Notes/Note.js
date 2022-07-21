import React from "react";
import { useState } from "react";
import { useNote } from "../../Context/NoteContext";
import { Label } from "../Label/Label";
import { Color } from "../Color/Color";
import "./Note.css";
export const Note = () => {
  const { addNote, setOpen, open, labels, setLabels } = useNote();
  console.log(open);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [priority, setPriority] = useState("low");
  const [color, setColor] = useState("");
  const [label, setLabel] = useState([]);
  console.log(open);
  console.log(color);
  const addNotes = () => {
    if (!labels.includes(label)) {
      setLabel((labels) => [...labels, label]);
    }
    addNote({ title, content, priority, color, label, date, time });
    setTitle("");
    setContent("");
    setColor("color");
    setPriority("low");
    setLabel("");
    setOpen("none");
  };
  const handleLabel = (string) => {
    if (!string.includes(string)) {
      setLabel(string);
    }
  };
  const handleColor = (string) => {
    setColor(string);
  };
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    <div>
      <div
        className='note-container box-shadow'
        style={{ backgroundColor: color }}
      >
        <div>
          <input
            type='text'
            placeholder='Enter your title'
            className='title-section'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='body-section'>
          <textarea
            placeholder='Enter your body'
            name='content'
            className='body-section'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <hr />
        <div className='info-section'>
          <div className='info-date'>{`Created at ${date}`}</div>
          <div className='info-icons'>
            <div>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value='low' label='low'></option>
                <option value='high' label='high'></option>
              </select>
            </div>
            <div>
              {open === "color" ? (
                <i
                  className='bi bi-palette-fill'
                  onClick={() => setOpen("add")}
                ></i>
              ) : (
                <i
                  className='bi bi-palette-fill'
                  onClick={() => setOpen("color")}
                ></i>
              )}
            </div>
            {open === "color" && <Color handleColor={handleColor} />}
            <div>
              <i
                className='bi bi-tag-fill'
                onClick={() => setOpen("label")}
              ></i>
            </div>
            <span>
              <i
                className='bi bi-plus-circle-fill'
                onClick={() => {
                  addNotes();
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
        {open === "label" && <Label handleLabel={handleLabel} />}
      </div>
      {label.length > 0 ? (
        <div className='label-container'>
          <h5>Labels </h5>
          <div className='label-text'>
            {label.map((item) => (
              <div className='label'>{item}</div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
