import React from 'react';
import './App.css';
// import Item from './item';

class FilmItemRow extends React.Component{
  render(){
    return(
      <li> <a href={this.props.url} className='link'> {this.props.url}</a>
      </li>
    )
  }
}

class StarWars extends React.Component{
  constructor(){
    super()
    this.state = {
      name: null,
      height: null,
      homeworld: null,
      films: [],
      loadedCharacter: false
    }

  }
  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 82)
    const api = `https://swapi.dev/api/people/${randomNumber}/`
    fetch(api)
      .then(response => response.json())
      .then(data =>{
    this.setState({
      name: data.name,
      height: data.height,
      homeworld: data.homeworld,
      films: data.films,
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
        <h1> {this.state.name}</h1>
      <p> {this.state.height} cm</p>
      <p><a className='link' href={this.state.homeworld}> Homeworld: </a></p>
      <ul>
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
