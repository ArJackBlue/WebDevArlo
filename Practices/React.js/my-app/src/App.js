import React from 'react';
import './App.css';
// import Item from './item';

class FilmItemRow extends React.Component{
  render(){
    return(
      <li> {this.props.url}
      </li>
    )
  }
}

class StarWars extends React.Component{
  constructor(){
    super()
    this.state = {
      image: null,
      name: null,
      height: null,
      homeworld: null,
      films: [],
      loadedCharacter: false
    }

  }
  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 88)
    const api = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
    fetch(api)
      .then(response => response.json())
      .then(data =>{
    this.setState({
      image: data.image,
      name: data.name,
      height: data.height,
      homeworld: data.homeworld,
      films: data.affiliations,
      loadedCharacter:true
    })
  })
}
  render(){

    const movies = this.state.films.map((url, i ) => {
      return <FilmItemRow key={i} url={url} />
    })
    return(
     <div>
      {
        this.state.loadedCharacter &&
        <div> 
          <img src={this.state.image} width='25%'></img>
        <h1> {this.state.name}</h1>
      <p> {this.state.height} m</p>
    <p> Homeworld: {this.state.homeworld}</p>
      <ul className='list'>
        {movies}
      </ul>
          </div>
      }
      
      <button type='button' onClick={() => this.getNewCharacter()} className='btn'> Randomize</button>
     </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
          {/* <Item color="Yellow" /> */}
          {/* <Item color="Red" /> */}
          {/* <Item color="Black" /> */}
        
      </header>
    </div>
  );
}

export default App;
