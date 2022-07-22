import React from "react";
import { useNote } from "../../Context/NoteContext";
import { Note, Sidebar, SingleNote } from "../../Component";
import "./../HomePage/HomePage.css";
export const Label = () => {
  const { note, labels } = useNote();

  return (
    <div className='App-container'>
      <Sidebar />
      <div className='home-container'>
        <h5 className='mt-1 flex-justify-center'>Label page</h5>

        {labels.length > 0 ? (
          labels.map((label, index) => {
            const filteredLabel = note.filter((note) =>
              note.label.includes(label)
            );
            {
              return (
                <div key={index}>
                  {filteredLabel.length > 0 ? (
                    <>
                      <div>
                        <li>{label}</li>
                      </div>
                      <div>
                        {filteredLabel.map((item) => {
                          return <SingleNote item={item} key={item._id} />;
                        })}
                      </div>
                    </>
                  ) : null}
                </div>
              );
            }
          })
        ) : (
          <div className='image-container'>
            <img src='/Images/label.svg' />
            <h5 className='text-primary mt-1'>You don't have any label.</h5>
          </div>
        )}
      </div>
    </div>
  );
};
