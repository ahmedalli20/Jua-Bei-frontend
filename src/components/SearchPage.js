import React from 'react';
import './SearchPage.css'

const SearchPage = ({handleSearch,search,setSearch}) => {
    return (
        <div className="searchpage">
            <div className='search'>
                <div>
                    <div><p>search and compare the price</p></div>
                </div>
                <form onSubmit={handleSearch} className='search-form' type="submit">
                    <button><img  id='search' src="../icons/search .svg" /></button>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type={"text"} placeholder="Searching" />
                    {search === "" ? null : <label onClick={() => setSearch("")}><img id='cancel' src='../icons/cancel.svg' /></label>}
                </form>
            </div>
        </div>
    );
};

export default SearchPage;

