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

  const refreshPage = () => {
    window.location.reload()
  }

  
  return (
    <>
      <div className='pokemon-card-buttons'>
        <button className='btn-refresh'><Link to='/pokemon' className='back-to-list'>Back to all pokemon</Link></button>
        <button onClick={refreshPage} className='btn-refresh'><Link to="/pokemon/random" className="homeButton">Who&apos;s that Pokèmon?</Link></button>
      </div>
      <hr />
      { pokemons ?
        <div className='head'>
          <div className='big-card'>
            <div className="name">
              <h2>{pokemons.name.english}</h2>
              <h2>{pokemons.name.japanese}</h2>
              <img src={`${pokemons.sprite}`}/>
            </div>
            <div>
              {pokemons.evolution.prev && pokemons.evolution.next  
                ?
                <div className="evolutions">
                  <div className="prev"> 
                    <Link to={`/pokemon/${pokemons.evolution.prev[0]}`}><button className='evolution'>Prev Evolution</button></Link>
                  </div>
                  <div className="next">
                    <Link to={`/pokemon/${pokemons.evolution.next[0][0]}`}><button className='evolution'>Next Evolution</button></Link>
                  </div>
                </div> 
                :
                pokemons.evolution.prev ?
                  <div className="evolutions">
                    <div className="prev"> 
                      <Link to={`/pokemon/${pokemons.evolution.prev[0]}`}><button className='evolution'> Prev Evolution</button></Link>
                    </div>
                  </div>
                  :
                  pokemons.evolution.next ?
                    <div className="evolutions">
                      <div className="next"> 
                        <Link to={`/pokemon/${pokemons.evolution.next[0][0]}`}><button className='evolution'> Next Evolution</button></Link>
                      </div>
                    </div>
                    :
                    <p>No Evolutions</p>
              }
            </div>
          </div>
          <hr />
          <div className='row'>
            <div className='small-card'>
              <img src={pokemons.hires} alt={pokemons.name.english} />
            </div>
            <div className='species'>
              <p>{pokemons.species}</p>
              <p>{pokemons.description}</p>
            </div>
            
            <div className={pokemons.type[0]}><p>{pokemons.type[0]}</p></div>
            {pokemons.type[1] ? <div className={pokemons.type[1]}><p>{pokemons.type[1]}</p></div> : <div></div>}
            


            <div className="dimensions">
              <p>Height:{pokemons.profile.height}</p>
              <p>Weight:{pokemons.profile.weight}</p>
            </div>
            <hr />
              
          
          
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