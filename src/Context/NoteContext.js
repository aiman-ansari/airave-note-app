import React from "react";
import { createContext, useContext } from "react";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { FilterReducer } from "./../Reducer/FilterReducer";
import { toast } from "react-toastify";
const NoteContext = createContext();

const useNote = () => useContext(NoteContext);

//Initial Note State
const initialNoteState = {
  title: "",
  content: "",
  priority: "",
  date: "",
};

//Initial trash State
const initialTrahState = {
  trashNote: [],
};
const NoteProvider = ({ children }) => {
  const [openContainer, setOpenContainer] = useState();

  const [note, setNote] = useState(initialNoteState);
  const [trash, setTrash] = useState(initialTrahState);
  const [open, setOpen] = useState("none");
  const [Editopen, setEditOpen] = useState("none");
  const [archive, setArchive] = useState([]);
  const [labels, setLabels] = useState([]);

  const token = localStorage.getItem("token");
  useEffect(() => {
    getNote();
  }, []);

  useEffect(() => {
    getArchive();
  }, []);

  const getNote = async () => {
    try {
      const res = await axios.get("/api/notes", {
        headers: {
          authorization: token,
        },
      });
      setNote(res.data.notes);
    } catch (err) {
      console.log(err);
    }
  };

  //Adding Note
  const addNote = async (note) => {
    try {
      const res = await axios.post(
        "/api/notes",
        {
          note,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setNote(res.data.notes);
      toast.success("Successfully Added", {
        theme: "colored",
        autoClose: 2000,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Adding note to trash
  const addToTrash = async (note) => {
    try {
      const res = await axios.delete(`/api/notes/${note._id}`, {
        headers: {
          authorization: token,
        },
      });
      setNote(res.data.notes);
      setTrash((prev) => ({
        ...prev,
        trashNote: [...prev.trashNote, note],
      }));
      toast.error("Added to trash", {
        theme: "colored",
        autoClose: 2000,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Deleting Note from db
  const deleteNote = async (note) => {
    setTrash((prev) => ({
      trashNote: [...prev.trashNote.filter((item) => item !== note)],
    }));
    toast.error(" Successfully Deleted note", {
      theme: "colored",
      autoClose: 2000,
    });
  };

  //Restoring note to db
  const restoreNote = async (note) => {
    try {
      const res = await axios.post(
        "/api/notes",
        {
          note,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setNote(res.data.notes);
      setTrash((prev) => ({
        trashNote: [...prev.trashNote.filter((item) => item !== note)],
      }));
      toast.success("note is being restore", {
        theme: "colored",
        autoClose: 2000,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const updateNote = async (note) => {
    try {
      const res = await axios.post(
        `/api/notes/${note._id}`,
        {
          note,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setNote(res.data.notes);
      toast.info("note is successfully updated", {
        theme: "colored",
        autoClose: 2000,
      });
      console.log("updated", res.data.notes);
    } catch (err) {
      console.log(err);
    }
  };

  const getArchive = async () => {
    try {
      const res = await axios.get("/api/archives", {
        headers: {
          authorization: token,
        },
      });
      setArchive(res.data.archives);
    } catch (err) {
      console.log(err);
    }
  };

  //Adding notes to archive
  const addArchieve = async (note) => {
    try {
      const res = await axios.post(
        `/api/notes/archives/${note._id}`,
        {
          note,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setArchive(res.data.archives);
      setNote(res.data.notes);
      toast.success("Added to archive", {
        theme: "colored",
        autoClose: 2000,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Deleting note from archive
  const deleteArchive = async (note) => {
    try {
      const res = await axios.delete(`/api/archives/delete/${note._id}`, {
        headers: {
          authorization: token,
        },
      });
      setArchive(res.data.archives);
      setTrash((prev) => ({
        ...prev,
        trashNote: [...prev.trashNote, note],
      }));
      toast.success("Added to trash", {
        theme: "colored",
        autoClose: 2000,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Restoring note to db
  const restoreArchive = async (note) => {
    try {
      const response = await axios({
        method: "post",
        url: `/api/archives/restore/${note._id}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });

      setArchive(response.data.archives);
      setNote(response.data.notes);
      toast.success("Note is successfully restore", {
        theme: "colored",
        autoClose: 2000,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const [state, dispatch] = useReducer(FilterReducer, {
    sort: "",
    date: "",
    label: "",
  });

  return (
    <NoteContext.Provider
      value={{
        state,
        dispatch,
        note,
        open,
        setOpen,
        setNote,
        addNote,
        addToTrash,
        updateNote,
        addArchieve,
        restoreArchive,
        deleteArchive,
        archive,
        labels,
        setLabels,
        trash,
        restoreNote,
        openContainer,
        setOpenContainer,
        deleteNote,
        Editopen,
        setEditOpen,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
export { useNote, NoteProvider };
