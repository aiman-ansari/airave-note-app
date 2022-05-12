import React from 'react'
import { createContext, useContext } from "react";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { FilterReducer } from './../Reducer/FilterReducer';
const NoteContext = createContext()

const useNote = () => useContext(NoteContext)
   
const initialState = {
    title:"",
    content:"",
    priority:"",
    date:"",
}
const NoteProvider = ({children}) =>{
    const [note, setNote] = useState(initialState);
    const [open , setOpen ] = useState('none')
    const [archive, setArchive] = useState([])
    const [labels, setLabels] = useState([])
    const [arr, setArr] = useState([])
    const token = localStorage.getItem("token")
    useEffect(()=>{
        getNote()
    },[])

    useEffect(()=>{
        getArchive()
    },[])
    // const getArr = () =>{
    //     setArr(arr => [...arr, label])
    //     console.log(arr)
    // }
    // getArr()
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
    console.log("label from context:",labels)
    console.log("note" , note)
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
                console.log(err)  
           }
    }
   const [state, dispatch] = useReducer(FilterReducer , {
       sort:"",
       date:"",
       label:""
   })
    return(
        <NoteContext.Provider value={{state, dispatch,note,  open, setOpen, setNote, addNote, deleteNote, updateNote, addArchieve, restoreArchive, deleteArchive,archive, labels, setLabels}}>
            {children}
        </NoteContext.Provider>
    )
}
export { useNote, NoteProvider}