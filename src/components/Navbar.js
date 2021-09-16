import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    // link to pokemonTypeLists component
    // link to random pokemon generator
    <div className="navbar">
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokemon">List</Link>
          </li>
          <li>
            <Link to="/pokemon/random">Whos that Pokemon</Link>
          </li>
        </ul>
      </div>
    </div>


  )
}

export default Navbar