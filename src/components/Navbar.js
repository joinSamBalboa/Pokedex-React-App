import React from 'react'
import { Link } from 'react-router-dom'
import audio from '../styles/assets/whos-that-pokemon.mp3'
import PokemonList from './PokemonList'

const Navbar = ({ filters , setFilters }) => {

  const handleFilterChange = (event) => {
    const newObj = { ...filters, [event.target.name]: event.target.value }
    console.log('New Obj', newObj)
    setFilters(newObj)
  }
  
  const playAudio = () => {
    new Audio(audio).play()
  }

  return (
    // link to pokemonTypeLists component
    // link to random pokemon generator
    <>
      <audio id="audio"></audio>
      <div className="navbar">
        <div className="filter">
          <p>Search:</p>
          <input onChange={handleFilterChange} name="searchTerm" value={filters.searchTerm} className='filter-type'/>
          <select onChange={handleFilterChange} name="type" value={filters.type} className='select'>
            <option value="All">All</option>
            <option value="Normal">Normal</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Grass">Grass</option>
            <option value="Electric">Electric</option>
            <option value="Ice">Ice</option>
            <option value="Fighting">Fighting</option>
            <option value="Poison">Poison</option>
            <option value="Ground">Ground</option>
            <option value="Flying">Flying</option>
            <option value="Psychic">Psychic</option>
            <option value="Bug">Bug</option>
            <option value="Rock">Rock</option>
            <option value="Ghost">Ghost</option>
            <option value="Dark">Dark</option>
            <option value="Dragon">Dragon</option>
            <option value="Steel">Steel</option>
            <option value="Fairy">Fairy</option>
          </select>
        </div>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/pokemon">List</Link>
            </li> */}
            <li >
              <Link to="/pokemon/random" onClick={playAudio}>Whos that Pokemon</Link>
            </li>
          </ul>
          
        </div>
      </div>
    </>

  )
}

export default Navbar