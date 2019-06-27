import React from 'react';
import Header from './components/Header';
import axios from 'axios';
import Character from './components/Character';
import Characters from './components/Characters';
import Search from './components/Search';


class App extends React.Component {

  state ={
    characters:[],
    loading: false
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
    console.log("RESPONSE", response)

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




  render(){

    const {characters, loading} = this.state;

    console.log("STATE", this.state)
  
    return (
      <div className="App">
        <Header {...{
          title:"Team Joselus", 
          icon:"fab fa-github"
        }} />

        <Search
          searchCharacter={this.searchCharacter}
          clearCharacters={this.clearCharacters}
          showClear={characters.length > 0 ? true : false}
        />
        
        <Characters characters={characters} loading={loading}/>

       
      </div>
      
  
      
    );
  }
  
}

export default App;
