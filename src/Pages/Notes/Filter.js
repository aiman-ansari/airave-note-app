// import React from 'react'
// import { useState } from 'react'
// import { useNote } from '../../Context/NoteContext'
// export const Filter = () =>{
//     const {state, dispatch, note} = useNote()
//     const [open , setOpen] = useState(false)
//     return(
//         <div>
         
//         <div>Sort by priority</div>
//                             <label>High<input type="radio"
//                              value="high"
//                               name="rating"
//                               onChange={() =>{
//                                   dispatch({
//                                       type:'FILTER_BY_PRIORITY',
//                                       payload:"high"
//                                   })
//                               }}
//                               checked={state.rating === "high" ? true : false}></input></label>
// <label>low<input type="radio"
//                              value="low"
//                               name="rating"
//                               onChange={() =>{
//                                   dispatch({
//                                       type:'FILTER_BY_PRIORITY',
//                                       payload:"low"
//                                   })
//                               }}
//                               checked={state.rating === "low" ? true : false}></input></label>
// </div>
//     )
// }