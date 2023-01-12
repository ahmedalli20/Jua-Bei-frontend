
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {  useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SearchPage from './components/SearchPage';



function App() {
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState("")
  const[searchFor,setSearchFor]=useState("")

  const [products, setProducts] = useState(null)
  const [token, setToken] = useState("")
  const [loading, setLoading] = useState(false)
  

  

  
  return (
    <div className="App">
    <Routes>

   <Route exact path='/' element={
    <div>
    <Navbar user={user} handleSearch={handleSearch} search={search} setSearch={setSearch} searchFor={searchFor}/>
    {search || searchFor?null:<SearchPage handleSearch={handleSearch} search={search} setSearch={setSearch} />}

    </div>
   }> </Route>
    <Route path='home' element={
    <Home />
  }>

  </Route>
   </Routes>
    
    </div>
  );
}

export default App;
