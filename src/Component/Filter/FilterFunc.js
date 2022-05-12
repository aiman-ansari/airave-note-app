import React from "react"
import { useNote } from "../../Context/NoteContext";

export const filterFunc = (note, {label, sort, date}) =>{
    // const {labels} = useNote()

    // console.log(labels)
    let sortedNote = note;
    console.log(label)
    console.log(note)
    if(sort && sortedNote){
        sortedNote = sortedNote.filter((item) => item.priority === sort)
    }
    if(label && sortedNote){
        sortedNote = sortedNote.filter((item) => item.label.every((tag) => tag.includes(label)))
        console.log(sortedNote)
        return sortedNote
    }
    if(date==="new" && sortedNote){
        sortedNote = [...sortedNote].reverse()
    }
    if(date==="old" && sortedNote){
        sortedNote = [...sortedNote]
    }
    console.log(sortedNote)
   return sortedNote
}