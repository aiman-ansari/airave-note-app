import React from 'react'
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext()

const AuthProvider = ({children}) =>{
    const navigate = useNavigate()
    const [match, setMatch] = useState([])
    const [isLogin, setIsLogin] = useState(false);
     const user =  localStorage.getItem('user')
    const token = localStorage.getItem('token')
   
    
    const handleSingupData = async(firstName, lastName, email, password) =>{
        const getValues =  { email, password, firstName, lastName} 
        try {

            const res = await axios.post('/api/auth/signup', getValues);
            if(res.status== 200 || res.status== 201){
                 setIsLogin(true)
                 localStorage.setItem("token", res.data.encodedToken)
                 console.log(res.data)
                 setMatch(res.data.createdUser)
                 navigate('/login')
            }
          }
           catch (error) {
            if (error.response.status == 422) {
              alert("account already exist please login");
            }
            
        }
    }

    const handleLoginData = async(email, password) =>{
        const getLoginValues =  { email, password} 
        try {
                const res = await axios.post('/api/auth/login',getLoginValues);
                        if(res.status== 200 || res.status== 201){
                            setIsLogin(true)
                            localStorage.setItem("token", res.data.encodedToken);
                            localStorage.setItem("user",res.data.foundUser.firstName);
                            navigate('home')
                        }
                      } catch (error) {
                          console.log(error)
    }
}


    return(
        <AuthContext.Provider value={{isLogin, setIsLogin, handleSingupData, handleLoginData , match, user, token}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth =()=> useContext(AuthContext)

export { useAuth, AuthProvider}