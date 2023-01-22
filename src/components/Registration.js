import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./Login.css"


function Registration(props) {

    const [user, setUser] = useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [username, setUsername]=useState("")
    const navigate = useNavigate();
   

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(email);
        fetch("http://127.0.0.1:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          "user": {
          username,
          email,
          password,
          }
      }
      ),
    })
    .then((r) => {
      console.log(username,email,password)
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate('/login')
      } else {
          alert("Invalid Username or Password!")
          navigate('/register')
    }})

    }
  return (
    <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">User Name</label>
        <input value={username} name="name" onChange={(e) => setUsername(e.target.value)} id="name" placeholder="full Name" />
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  )
};

export default Registration