import React from 'react'
import "./App.css";
import { useGlobalContext } from './context';
const Search = () => {
  const{query,setQuery,isError}= useGlobalContext();
  return (
    <>
      <section className='search-section'>
        <h2>search your favourite movies</h2>
        {/* //use form action for not automatic search or run */}
        <form action="#" onSubmit={(e)=>e.preventDefault()}>

          <div>
            <input type="text" 
            placeholder='seacrh here'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className='card-error'>
          <p>{isError.show && isError.msg }</p>
        </div>

      </section>
    </>
  )
}

export default Search
