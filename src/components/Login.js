import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
     fetch(`http://127.0.0.1:4000/login` , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username, 
            password,
          },
        })
      })
        .then ((r)=>{
          if (r.ok){
            r.json().then((user) =>setUser( user))
            navigate("/search")
          } else {
            alert("invalid username or password")
            navigate("/login")
          }
        })
      

     
      
  
     
    };
    
  return (
    <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input value={username} onChange={(e) => setUserName(e.target.value)}type="username" placeholder="" id="username" name="username" />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Don't have an account? Register here.</button>
    </div>
  )
}

export default Login