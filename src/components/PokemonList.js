import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


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

  

  useEffect(() => {
    const regexSearch = new RegExp(filters.searchTerm, 'i')
    setFilteredPokemon(pokemon.filter(item => {
      return regexSearch.test(item.name.english) && (item.type.includes(filters.type) || filters.type === 'All')
    }))
  }, [filters, pokemon])


  return (
    <>
      <div className='main-part'>
        <Navbar filters={filters} setFilters={setFilters}/>
      
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
      </div>
    </>
  )
}

export default PokemonList