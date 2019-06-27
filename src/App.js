import React from 'react';
import Header from './components/Header';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Characters from './components/Characters';
import Search from './components/Search';
import About from './components/About';
import CharacterView from './components/CharacterView';

class App extends React.Component {

  state ={
    characters:[],
    loading: false,
    character:{},
  }

  async componentDidMount(){
    this.setState({
      loading: true
    })
    const response = await axios.get("https://rickandmortyapi.com/api/character/");
    this.setState({
      characters: response.data.results,
      loading: false
    })
  }


  searchCharacter = async (text) => {
    this.setState({
      loading: true
    })
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${text}`);
    this.setState({
      characters: response.data.results,
      loading: false
    })
  }

  clearCharacters = () => this.setState({
    characters:[],
    loading: false
  })


  getCharacter = async (id) => {
    this.setState({
      loading: true
    })
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    this.setState({
      character: response.data,
      loading: false
    })
  }




  render(){

    const {characters, loading, character} = this.state;
  
    return (
      <Router>
        <div className="App">
          <Header {...{
            title:"Team Joselus", 
            icon:"fab fa-github"
          }} />

          <Switch>
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <Search
                  searchCharacter={this.searchCharacter}
                  clearCharacters={this.clearCharacters}
                  showClear={characters.length > 0 ? true : false}
                />
                
                <Characters characters={characters} loading={loading}/>
              </React.Fragment>

            )} />

            <Route path="/character/:id" render={props=>(
              <CharacterView {...props} character={character} getCharacter={this.getCharacter} loading={loading} />
            )} />

            <Route path="/about" component={About} />

          

          </Switch>

        
        </div>
      
  
      </Router>
    );
  }
  
}

export default App;
