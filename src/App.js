import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
// Navbar
import Navbar from './components/Navbar'
// Home
import Home from './components/Home'
// PokemonList - List of pokemons
import PokemonList from './components/PokemonList'
// PokemonShow - individual pokemon by id, name, image, description. Maybe base if we have time
import PokemonShow from './components/PokemonShow'
// RandomPokemon - Who's that pokemon?
import Random from './components/Random'

// Image
// Loading/spinner pokemon inspired

// Function
// BrowserRouter
// Components
// Switch & routes

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path='/random'>
            <Random Random={Random}/>
          </Route> */}
          <Route exact path="/pokemon" >
            <PokemonList PokemonList={PokemonList}/>
          </Route>
          <Route exact path='/pokemon/:id'>
            <PokemonShow pokemonShow={PokemonShow}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}


export default App
