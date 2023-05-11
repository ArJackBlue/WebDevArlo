import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView'
import { Route, Switch } from 'react-router-dom';
import {useState, useEffect} from 'react';



function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('searching for ...');

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path='/search'>
        <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
