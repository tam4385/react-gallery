import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route 
 } from 'react-router-dom';
 import axios from 'axios';

//API KEY
import apiKey from './config';

//import components
import Search from './Search';
import Nav from './Nav';
import PhotoList from './PhotoList';


class App extends Component {

  constructor() {
    super()
    this.state = { photos: [] }
  };

  componentDidMount() {
    this.performSearch('sunset');
  };

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({ photos: response.data.photos.photo })
    })
    .catch(error => {
      console.log('Error catching and parsing data', error)
    });
  }

  render() {
    return (
      <BrowserRouter>
       <div className="container">
         <Search onSearch={ this.performSearch } />
         <Nav  onSearch={this.performSearch} />
         <PhotoList data={this.state.photos} />
        </div>

        {/* <Route path="/sunsets" render={ () => this.performSearch('sunsets') } />
        <Route path="/galaxies" render={ () => this.performSearch('galaxies') } />
        <Route path="/dogs" render={ () => this.performSearch('dogs') } /> */}
      </BrowserRouter>
    );
  }
}

export default App;