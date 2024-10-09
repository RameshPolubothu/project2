import React, {useState} from 'react'
import { auth } from './Firebase'; 
import {signInWithEmailAndPassword } from "firebase/auth"; 

const Login = () => {
    const login = async ({ email, password }) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            alert(`User logged in successfully:${res.user.email}`)
        } catch (error) {
            console.error("Login error:", error);
            throw error; // or handle it as needed
        }
    }
    const [form,setForm] = useState({
        email:'',
        password:''
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await login(form);

    }
    const InputFields = {
        padding:'0.5rem',
        margin:'0.8rem',
        borderRadius: '4px'
    }
    const ButtonStyle = {
        borderRadius: '4px',
        padding:'0.7rem',
        margin:'0.5rem'
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
            <input type="text" style={InputFields}
                   placeholder="email" id="mail" 
            onChange={(e) => 
            setForm({...form, email: e.target.value})} />
            <br/>
            <input type="password"  placeholder="Password" 
                   style={InputFields} 
            onChange={(e) => 
            setForm({...form, password: e.target.value})}/>
            <br/>
            <button type="submit" style={ButtonStyle}>
                   Submit
            </button>
            </form>
            <a href="/">Register</a>
        </div>

    )
}

export default Login
