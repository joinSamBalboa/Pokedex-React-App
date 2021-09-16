import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Random = () => {

  const [ randomPokemon, setRandomPokemon ] = useState(null)
  const [ hasError, setHasError ] = useState(false)

  useEffect(() => {
    const getRandomPokemon = async () => {
      try {
        const { data } = await axios('https://app.pokemon-api.xyz/pokemon/random')
        setRandomPokemon(data)
      } catch (err) {
        setHasError(true)
      }
    } 
    getRandomPokemon
  }, [])

  return (
    <>
      { randomPokemon ?
        <div className='big-card'>
          <h2>{randomPokemon.name.english}</h2>
          <h2>{randomPokemon.name.japanese}</h2>
          <hr />
          <div className='row'>
            <div className='small-card'>
              <img src={randomPokemon.hires} alt={randomPokemon.name.english} />
            </div>
            <div className='species'>
              <p>{randomPokemon.species}</p>
              <p>{randomPokemon.description}</p>
              <hr />
            </div>
            <hr />
            <Link to='/pokemon' className='back-to-list'>Back to all pokemon</Link>
          </div>
        </div>
        :

        <>
          {hasError ?
            <h2>Oh! Something went wrong!</h2>
            :
            <h2>loading image</h2>
          }
        
        </>


      }
      
    </>
  )

}

export default Random