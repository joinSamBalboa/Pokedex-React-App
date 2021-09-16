import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const PokemonShow = () => {

  const [ pokemons, setPokemons ] = useState(null)
  const [ hasError, setHasError ] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const { data } = await axios(`https://app.pokemon-api.xyz/pokemon/${id}`)
        setPokemons(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getPokemons()
  }, [id])

  
  return (
    <>
      { pokemons ?
        <div className='big-card'>
          <h2>{pokemons.name.english}</h2>
          <h2>{pokemons.name.japanese}</h2>
          <hr />
          <div className='row'>
            <div className='small-card'>
              <img src={pokemons.hires} alt={pokemons.name.english} />
            </div>
            <div className='species'>
              <p>{pokemons.species}</p>
              <p>{pokemons.description}</p>
              <hr />
              
              {pokemons.evolution.prev && pokemons.evolution.next  
                ?
                <div className="evolutions">
                  <div className="prev"> 
                    <Link to={`/pokemon/${pokemons.evolution.prev[0]}`}> Prev Evolution</Link>
                  </div>
                  <div className="next">
                    <Link to={`/pokemon/${pokemons.evolution.next[0][0]}`}> Next Evolution</Link>
                  </div>
                </div> 
                :
                pokemons.evolution.prev ?
                  <div className="evolutions">
                    <div className="prev"> 
                      <Link to={`/pokemon/${pokemons.evolution.prev[0]}`}> Prev Evolution</Link>
                    </div>
                  </div>
                  :
                  pokemons.evolution.next ?
                    <div className="evolutions">
                      <div className="next"> 
                        <Link to={`/pokemon/${pokemons.evolution.next[0][0]}`}> Next Evolution</Link>
                      </div>
                    </div>
                    :
                    <p>No Evolutions</p>
              }
              

              <hr />
              <Link to='/pokemon' className='back-to-list'>Back to all pokemon</Link>
            </div>
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


export default PokemonShow