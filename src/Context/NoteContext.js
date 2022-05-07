import React from 'react'
import { createContext, useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useReducer } from 'react';
import { filterReducer } from '../Reducer/FilterReducer';
import { Navigate, useNavigate } from 'react-router-dom';
const NoteContext = createContext()

const useNote = () => useContext(NoteContext)
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var dateTime = date;
const initialState = {
    title:"",
    content:"",
    priority:"",
    date:dateTime,

}
const NoteProvider = ({children}) =>{
    const [note, setNote] = useState(initialState);
    const [open , setOpen ] = useState('none')
    const [archive, setArchive] = useState([])
    const token = localStorage.getItem("token")
    useEffect(()=>{
        getNote()
    },[])

    useEffect(()=>{
        getArchive()
    },[])

    const getNote = async() =>{
        try{
            const res = await axios.get('/api/notes',{
                headers:{
                    authorization:token,
                }
            })
            setNote(res.data.notes)
        }
        catch(err){
            console.log(err)
        }
    }

    const addNote = async(note) =>{
        try{
            const res = await axios.post('/api/notes', 
            {
                note
            },
            {
                headers:{
                    authorization : token,
            },
            })
            setNote(res.data.notes)
        }
        catch(err){
            console.log(err)
        }
    }
    const deleteNote = async(note) =>{
        try{
            const res = await axios.delete(`/api/notes/${note._id}`, 
            {
                headers:{
                    authorization : token,
                }
            })
            setNote(res.data.notes)
            console.log("deleted: ",res.data.notes)
        }
        catch(err){
            console.log(err)
        }
    }
    const updateNote = async(note) =>{
        try{
            const res = await axios.post(`/api/notes/${note._id}`, 
            {
                note
            },
            {
                
                headers:{
                    authorization : token,
                }
            }
            )
            setNote(res.data.notes)
        }
        catch(err){
            console.log(err)
        }
    }
    const getArchive = async() =>{
        try{
            const res = await axios.get('/api/archives',{
                headers:{
                    authorization:token,
                }
            })
            setArchive(res.data.archives)
        }
        catch(err){
            console.log(err)
        }
    }
    const addArchieve = async(note) =>{
        try{
            const res = await axios.post(`/api/notes/archives/${note._id}`, 
            {
                note
            },
            {
                headers:{
                    authorization : token
                },
                
            })
            setArchive(res.data.archives)
            setNote(res.data.notes)
        }
        catch(err){
            console.log(err)
        }
    }
   
    const deleteArchive = async(note) =>{
        try{
            const res = await axios.delete(`/api/archives/delete/${note._id}`, 
            {
                headers:{
                    authorization : token
                }
                
            })
            setArchive(res.data.archives)
        }
        catch(err){
            console.log(err)
        }
    }
    const restoreArchive = async(note) =>{
        try {
            const   response = await axios({
                   method: 'post',
                   url: `/api/archives/restore/${note._id}`,
                   headers: {
                       authorization: localStorage.getItem('token'),
                   }
               })

               setArchive(response.data.archives)
               setNote(response.data.notes)
           }
           catch(err)
           {
              
           }
    }
    
   
    return(
        <NoteContext.Provider value={{note,  open, setOpen, setNote, addNote, deleteNote, updateNote, addArchieve, restoreArchive, deleteArchive,archive}}>
            {children}
        </NoteContext.Provider>
    )
}
export { useNote, NoteProvider}