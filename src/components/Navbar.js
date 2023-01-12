import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Navbar.css';

const Navbar = ({ user,search,handleSearch,setSearch,searchFor }) => {

    const navigate = useNavigate()

    function handleLoginOnclick() {
        navigate("/login")
    }
    return (
       

        <div className='navbar'>
            <div className="navbar-logo">
               <p>Jua-Bei</p>
           </div>

           {search ||searchFor?<form onSubmit={handleSearch} className='search-form' type="submit">
                <button><img src="../icons/search .svg" /></button>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type={"text"} placeholder="Search for anything" autoFocus />
                {search === "" ? null : <label onClick={() => setSearch("")}><img id='cancel' src='../icons/cancel.svg' /></label>}
            </form>:null}
          
          <div>
               <li>
               <ul><a href="#home">Home</a></ul>
               <ul><a href="#about">About Us</a></ul>

              <ul><button onClick={handleLoginOnclick} className="navbar-login" alt="login">Login</button></ul>
              </li>

            </div>
        </div>
    );
};

export default Navbar;