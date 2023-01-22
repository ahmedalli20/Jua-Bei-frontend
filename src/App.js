import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {  useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import Login from "./components/Login";
import Registration from "./components/Registration";
import { AppRegistrationRounded } from '@mui/icons-material';



function App() {
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState("")
  const[searchFor,setSearchFor]=useState("")

  const [products, setProducts] = useState(null)
  const [token, setToken] = useState("")
  const [loading, setLoading] = useState(false)
  
  const [currentForm, setCurrentForm]=useState("")
  const  toggleForm = (formName) =>{
    setCurrentForm(formName);
  };  

  

  function handleSearch(e) {
    e.preventDefault()
    setLoading(true)

    fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            "search_term": search
        })
    })
        .then(res => {
            if (res.ok) {
                res.json().then(products=>{
                    setProducts(products)
                    setLoading(false)
                    setSearchFor(search)
                    setSearch("")
                })
            } else {
                console.log(res)
            }
        })
}
  return (
    <div className="App">
         <Routes>

        <Route exact path='/search' element={
            <div>
            <Navbar user={user} handleSearch={handleSearch} search={search} setSearch={setSearch} searchFor={searchFor}/>
            {search || searchFor?null:<SearchPage handleSearch={handleSearch} search={search} setSearch={setSearch} />}

            </div>
        }> </Route>
            <Route path='/' element={
            <Home />
        }>

        </Route>

        <Route path='/login' element={
           <>
            {
            currentForm === "login"? <Login onFormSwitch={toggleForm} /> : <Registration onFormSwitch={toggleForm}/>
             } 
           </> 
        }>      
        </Route>
        <Route path="/register" element={<Registration/> } />
        </Routes>
    
    </div>
  );
}

export default App;
