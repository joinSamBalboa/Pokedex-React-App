<h1 align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png" alt="" width="30" height="30">Welcome to PokéDex React<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png" alt="" width="30" height="30"></h1>

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

## Timeframe
<p>2 Days</p>

## Goal
<p>2 day hack-a-thon to create an app that consumes a public API</p>


## ❓ What is PokéDex React?

<p>PokéDex React is an app that acts as a web based pokedex based on the popular game/show Pokémon. Users of the app are able to view a list of all ~900 pokemon in the pokemon universe as of 2021, where they are able to search pokemon by name andor filter by type. One a pokemon has been found, users can then click to find more information, including japanese mane, sprite, type, weight/height etc.. Within this page, users can also jump to next or previous evolutions if available. Another component, included 'Who's that Pokemon?', which generated a random pokemon from the database.</p>


## ✨ [Demo](https://pokereactdex.netlify.app/)

<div align="center">
<img alt="opening screen" src="./src/assets/Kapture 2021-11-03 at 10.43.39.gif" />
</div>


## 💾 Technologies Used

<li>HTML5</li>
<li>CSS3</li>
<li>SASS</li>
<li>Javascript ES6</li>
<li>React</li>
<li>Insomnia</li>
<li>Git</li>
<li>Github</li>
<li>Chrome dev tools</li>


## 🚀 Approach

<h3>API</h3>
Our aim was to find an API that was straight forward to consume and that we had an interest in. We initially wanted to use an API with a database of movies but we quickly came across the fact that most good APIs had to be paid for or required authentication, which was outside of our brief. We turned our attention to finding a pokemon API and found one that met our needs. The API itself was also a project that was hosted online and had excellent documentation on how to reach specific query endpoints.

<h3>Data</h3>
Using Insomnia, we explored the different endpoints and took notes of the information we could include in our project.

<div align="center">
<img alt="opening screen" src="./src/assets/Screenshot 2021-11-03 at 11.34.02.png" />
</div>



<h3>Planning</h3>
As we only had 2 days to complete this projects, we were strategic with the planning and set ourselves SMART goals so we would be able to complete what was asked of us. We pseudo-coded using VSCode and lay out what information we would be using from the API, the components required, and routes.

<div align="center">
<img alt="opening screen" src="./src/assets/Screenshot 2021-11-03 at 11.52.12.png" />
</div>


<h3>Components</h3>
We both worked on the components together using VSCode Live Share. building and styling each component as we went.

```
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
```

<h5>Styling</h5>
We styled primarily using Sass, and used google font Press Start 2P to give the app an authentic look to the app. Using Sass, we were able to use the @each rule to easily style each of the 900 pokemons on the list page as per their first type according to their data. 

```
$typeColours: (
  "Normal": #A8A77A,
  "Fire": #EE8130,
  "Water": #6390F0,
  "Grass": #7AC74C,
  "Electric": #F7D02C,
  "Ice": #96D9D6,
  "Fighting": #C22E28,
  "Poison": #A33EA1,
  "Ground": #E2BF65,
  "Flying": #A98FF3,
  "Psychic": #F95587,
  "Bug": #A6B91A,
  "Rock":	#B6A136,
  "Ghost":	#735797,
  "Dark":	#705746,
  "Dragon":	#6F35FC,
  "Steel":	#B7B7CE,
  "Fairy":	#D685AD
);

@each $type, $colour in $typeColours {
      .#{$type} {
        background-color: $colour;
        box-shadow: 0px 2px 15px rgba(0,0,0,0.2);
        
        &:hover{
          background-color: darken($colour, 5%);
          cursor: pointer;
          img{
            transition: transform 1s;
            transform: scale(2);
          }
        }
      }
```

<h5>Features</h5>
On the pokemon List page, we added two features which worked concurrently together; Users of the app could search part of names and filter by types to find specific pokemon. The filter feature also highlighted the styling of the backgrounds for each pokemon, where users could see which pokemon had more than one type.

```
useEffect(() => {
    const getPokemon = async () => {
      try {
        const { data } = await axios('https://vast-beach-73843.herokuapp.com/pokemon/all')
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
```

## Difficulties
<li>In the data from the API, the previous and next evolutions couldn't be accessed the same way. It didn't make sense at first but we quickly solved this and implemented it in our code to get it working</li>

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

<li>Timing was an issue as we didn't have as much time to implement additional ideas/features we had in mind</li>
<li>One of the issues we had was the the domain we got the API from expired, luckily after the end of the deadline but meant the app essentially no longer worked.</li>


## Wins
<li>We're happy with how it came out especially with the time constraint</li>
<li>Due to the issue of the API no longer being available, I found a way to fix this. I did this by finding the creator of the APi on Git thankfully allowed self hosting of the API. I forked the repo and deployed this on heroku to then make this the API endpoint.</li>


## Author

👤 **Jason Abimbola**

* Github: [@JoinSamBalboa](https://github.com/JoinSamBalboa)
* LinkedIn: [@JoinSamBalboa](https://linkedin.com/in/joinsambalboa)



