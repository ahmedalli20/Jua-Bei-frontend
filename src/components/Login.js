import React, {useState} from 'react'
import "./Login.css"

function Login(props) {

    const [loginEmail, setLoginEmail]=useState("")
    const [loginPassword, setLoginPassword]=useState("")


    const handleSubmit = (e) => {
      e.preventDefault();
     fetch(`https://jua-bei.onrender.com/login` , {
        method: "POST",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: loginEmail,
            password: loginPassword,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => localStorage.setItem("token", data.jwt));
  
      setLoginEmail("");
      setLoginPassword("");
    };
    
  return (
    <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Don't have an account? Register here.</button>
    </div>
  )
}

export default Login