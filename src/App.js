
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {  useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import Products from './components/Products';


function App() {
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState("")
  const[searchFor,setSearchFor]=useState("")

  const [products, setProducts] = useState(null)
  const [token, setToken] = useState("")
  const [loading, setLoading] = useState(false)
  

  

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

   <Route exact path='/' element={
    <div>
    <Navbar user={user} handleSearch={handleSearch} search={search} setSearch={setSearch} searchFor={searchFor}/>
    {search || searchFor?null:<SearchPage handleSearch={handleSearch} search={search} setSearch={setSearch} />}
    {products ? <Products setSearchFor={setSearchFor} searchFor={searchFor} products={products} setProducts={setProducts} user={user} token={token}/> : null}
    <Footer />
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
