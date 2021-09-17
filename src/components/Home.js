import React from 'react'
import { Link } from 'react-router-dom'
import audio from '../styles/assets/whos-that-pokemon.mp3'
import pikachuAudio from '../styles/assets/Pikaaaa.mp3'

const Home = () => {

  const playAudio = () => {
    new Audio(audio).play()
  }

  const playPikachuAudio = () => {
    new Audio(pikachuAudio).play()
  }

  return (
    <div>
      <div className='title'>
        <div className='logo'>
          <img className='pic' src='https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png' />
        </div>
        <div className="homeLinks">
          <button className='btn'><Link to="/pokemon" className="homeButton" onClick={playPikachuAudio}>Pokemon List</Link></button>
          <button className='btn'><Link to="/pokemon/random" className="homeButton" onClick={playAudio}>Whos that Pokemon?</Link></button>
        </div> 
      </div>
    </div>
  )
}


export default Home