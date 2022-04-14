import { useState } from "react"
import { useAuth } from "../../Context/AuthContext"
import { Link } from "react-router-dom"
export default function SignUp(){

    const { handleSingupData} = useAuth()
    const [isError, setIsError] = useState('')
    const [message, showMessage] = useState('')
    const [newUser, setNewUser] = useState({
        email:'',
        password:'',
        firstName:'',
        lastName:''
    })

    let value
    const handleData = (e) =>{
        value = e.target.value
        setNewUser({...newUser, [e.target.name] : value})
    }

    const handleSingup = (e) =>{
        const {firstName, lastName, email, password } = newUser
        e.preventDefault();
        if(firstName !== '' && lastName !== '' && email !== '' && password!=='')
        {
            if(password.length > 6){
                    handleSingupData(firstName,lastName,email,password)
                    showMessage("Account register successfully!!")
                }
            else{
            setIsError("password should be greater than 6 character")
            }
        }
        else{
            setIsError('please fill all the filed')
        }
    }
    return(
        <div>
            <div className="flex-align-center mt-4 text-success">{message}</div>
                <div class="flex-align-center m-5">
                    <div class="form box-shadow pd-2 ">
                        <h3 class="mt-1 mb-2 flex-align-center">SignUp</h3>
                            <form class="form" onSubmit={handleSingup}>
                                <div class="input-with-icons">
                                    <i class="bi bi-person-fill input-icon"></i>
                                    <input 
                                        type="Text" 
                                        placeholder="Enter your first name"
                                        class="icon-input"
                                        name="firstName"
                                        value={newUser.firstName}
                                        onChange={handleData}
                                    />
                                </div>
                                <div class="input-with-icons">
                                    <i class="bi bi-person-fill input-icon"></i>
                                    <input 
                                        type="text" 
                                        placeholder="Enter your last name"
                                        class="icon-input"
                                        name="lastName"
                                        value={newUser.lastName}
                                        onChange={handleData}
                                    />
                                    
                                </div>
                                <div class="input-with-icons">
                                    <i class="bi bi-envelope-fill input-icon"></i>
                                    <input 
                                        type="email" 
                                        placeholder="Enter your Email"
                                        class="icon-input"
                                        name="email"
                                        value={newUser.email}
                                        onChange={handleData}
                                    />
                                    
                                </div>
                                <div class="input-with-icons">
                                    <i class="fa fa-lock input-icon"></i>
                                    <input type="password"
                                        placeholder="Enter your Password"
                                        class="icon-input"
                                        name="password"
                                        value={newUser.password}
                                        onChange={handleData}
                                    />
                                </div>
                                {isError == '' ? 
                                    <></> : 
                                    <div className="alert alert-danger h6">{isError}</div>
                                }
                        
                            <div class="gap-2 flex-align-center">
                                <div class="h6">
                                    <input 
                                    type="checkbox" 
                                    id="checkbox"
                                    required
                                    />                    
                                    <span class="pd--5">
                                        Remember me
                                    </span>
                                </div>
                                <button class="btn-link-primary h6">Forgot your password?</button>
                            </div>
                            <div className="flex-col gap-1">
                                <div class="mt-1">
                                    <button class="btn btn-gradient-blue width-100" type="submit">
                                        SignUp
                                    </button>
                                </div>
                            </div>
                            <div class="flex-align-center">
                                <Link to="/login">
                                    <button class="btn-link-gray m-1">Already have an account?</button>
                                </Link>
                            </div>
                        </form> 
                    </div>
            </div>
        </div>
    )
}