import React from 'react';
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import './Products.css'

const Products = ({ products, searchFor, setSearchFor, setProducts, token, user }) => {
    const [history, setHistory] = useState([])
    const [sortBy, setSortBy] = useState("featured")


    useEffect((()=>{
        switch (sortBy) {
            case "featured":
                setProducts(p => [...p.sort((a, b) => a.price_index - b.price_index)])
                break
            case "price lh":
                setProducts(p => [...p.sort((a, b) => a.price - b.price)])
                break
            case "price hl":
                setProducts(p => [...p.sort((a, b) => b.price - a.price)])
                break
            case "ratings":
                setProducts(p => [...p.sort((a) =>parseInt(a.ratings)|| 0 ).reverse()])
                break
            default: 
        }
    }),[sortBy])

    function handleSortBy(e) {
        setSortBy(e.target.value)
    }

    useEffect((() => {
        if (user) {
            fetch("http://localhost:3000/history", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(res => {
                if (res.ok) {
                    res.json().then(setHistory)
                } else {
                    res.json().then(console.log)
                }
            })
        }
    }), [user, searchFor,token])

    return (
        <div className='product'>

            <div>
                {user && history.length !==0 ?
                    <div className='search-history'>
                        <div>
                            <img src='../icons/history.png' alt='history' />
                            <p>Search History</p>
                        </div>
                       
                    </div> : null
                }
                {<div className='cards'>
                    <div className='products-comparizons'>
                        <p>comparizon</p>
                        <img alt='' src='../icons' />
                    </div>
                    
                </div>
                }
            </div>

            <div className='sort-by'>
                        <label>Sort by: </label>
                        <select onChange={handleSortBy}>
                            <option value="featured">Featured</option>
                            <option value="price lh">Price: Low to high</option>
                            <option value="price hl">Price: High to low</option>
                            <option value="ratings">Ratings</option>
                        </select>
                    </div> 
                    <div className='product-cards'>
                        {products.map((p, index) => <ProductCard key={index} product={p} />)}
                    </div>
        </div>
    );
};

export default Products;