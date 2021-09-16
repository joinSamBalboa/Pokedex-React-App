import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PokemonList = () => {

  const [ pokemon, setPokemon ] = useState([])
  const [ filteredPokemon, setFilteredPokemon ] = useState([])
  const [ filters, setFilters ] = useState({ type: '', searchTerm: '' })
  const [ hasError , sethasError ] = useState(false)
  


  useEffect(() => {
    const getPokemon = async () => {
      try {
        const { data } = await axios('https://app.pokemon-api.xyz/pokemon/all')
        console.log(data)
        setPokemon(data)
      } catch (err){
        sethasError(true)
      }
    }
    getPokemon()
  }, [])

  const handleFilterChange = (event) => {
    const newObj = { ...filters, [event.target.name]: event.target.value }
    console.log('New Obj', newObj)
    setFilters(newObj)
  }

  useEffect(() => {
    const regexSearch = new RegExp(filters.searchTerm, 'i')
    setFilteredPokemon(pokemon.filter(item => {
      return regexSearch.test(item.name.english) && (item.type.includes(filters.type) || filters.type === 'All')
    }))
  }, [filters, pokemon])


  return (
    <>
      Search:<input onChange={handleFilterChange} name="searchTerm" value={filters.searchTerm}/>
      <select onChange={handleFilterChange} name="type" value={filters.type}>
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
      <div className='pokemon-list'>
        {pokemon.length > 0 ?
        
          ( filters.type !== '' || filters.searchTerm !== '' ? filteredPokemon : pokemon ).map(item => {
            return (         
              <>
                <div className={item.type[0]} >
                  <Link key={item.id} to={`/pokemon/${item.id}`}>                    
                    <p value={item.id}>No.{item.id}</p>
                    <p value={item.name.english}>{item.name.english}</p>
                    <img src={item.hires}/>                   
                  </Link>  
                </div>   
              </>
            )
          })
          :
          <>
            {hasError ? 
              <h4>Oh! Something went wrong.</h4> 
              :
              <h4>Loading...</h4>}
          </>
          
        }
      </div>  
      
    </>
  )
}

export default PokemonList