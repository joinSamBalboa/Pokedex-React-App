import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <div className='title'>
        <div className='logo'>
          <img src='https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png' />
        </div>
        <div className="homeLinks">
          <Link to="/pokemon" className="homeButton">Pokemon List</Link>
          <Link to="/pokemon/random" className="homeButton">Whos that Pokemon?</Link> 
        </div> 
      </div>
    </div>
  )
}


export default Home