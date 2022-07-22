import React from 'react'
import { useState } from "react"
import { useAuth } from "../../Context/AuthContext"
import { Link } from "react-router-dom";
export default function Login(){

    const {handleLoginData, match} = useAuth();

    console.log(match.password)
    const [login, setLogin] = useState({
        email:'',
        password:''
    }) 
    const [isError, setIsError] = useState('')
    const handleData = (e)=>{
        setLogin({...login, [e.target.name]:e.target.value})
    }


    const loginHandler = (e) =>{
        const {email, password} = login
        e.preventDefault();
        if( email !== '' && password!=='')
        {
            if(email===match.email){
                if(password===match.password){
                    handleLoginData(email,password)
                    }
                    else{
                        setIsError("password is not same")
                    }
            }
            else{
                setIsError("Email is not registered")
                }
        }
        else{
            setIsError('please fill all the filed')
        }
    }
    const test =  {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
    }

    return(
        <div class="flex-align-center m-5">
        <div class="form box-shadow pd-2 ">
            <h2 class="mt-1 mb-2 flex-align-center">Login</h2>
            <form class="form" onSubmit={loginHandler}>
                <div class="input-with-icons">
                    <i class="bi bi-envelope-fill input-icon"></i>
                    <input 
                        type="email" 
                        placeholder="Enter your Email"
                        class="icon-input"
                        name="email"
                        value={login.email}
                        onChange={handleData}
                    />
                </div>
                <div class="input-with-icons">
                    <i class="fa fa-lock input-icon"></i>
                    <input type="password"
                        placeholder="Enter your Password"
                        class="icon-input"
                        name="password"
                        value={login.password}
                        onChange={handleData}
                    />
                </div>
                {isError == '' ? <></> : <div className="alert alert-danger h6">{isError}</div>}
            <div class="gap-2 flex-align-center">
                <div class="h6">
                    <input 
                    type="checkbox" 
                    id="checkbox"
                    />
                    <span class="pd--5">
                        Remember me
                    </span>
                </div>
                    <button class="btn-link-primary h6">Forgot your password?</button>
            </div>
            <div className="flex-col gap-1">
            <div class="mt-1">
                <button class="btn btn-gradient-blue width-100"
                 type="submit"   >
                    Login
                </button>
            </div>
                <button class="btn btn-gradient-blue width-100"
                   onClick={()=>handleLoginData(
                       test.email, test.password
                   )} 
                   >
                    Test User
                </button>
            </div>
            <div class="flex-align-center">
                <Link to="/signup">
                    <button class="btn-link-gray m-1">Create new account</button>
                </Link>
            </div>
        </form>       
        
         </div>
        </div>
    )
}
