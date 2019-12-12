import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Switch 
 } from 'react-router-dom';
 import { Redirect } from 'react-router-dom';
 import axios from 'axios';

//API KEY
import apiKey from './config';

//import components
import Search from './Search';
import Nav from './Nav';
import PhotoList from './PhotoList';
import NotFound from './NotFound';

class App extends Component {

  constructor() {
    super()
    this.state = { 
      photos: [],
      loading: true
     }
  };

  componentDidMount() {
    this.performSearch('sunset');
  };
  
  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({ 
        photos: response.data.photos.photo,
        loading: false,
        searchTitle: query  
      })
    })
    .catch(error => {
      console.log('Error catching and parsing data', error)
    });
  }

  render() {
    return (
      <BrowserRouter>
       <div className="container">
         <Search onSearch={ this.performSearch } loading={ this.state.loading } />
         <Nav  onSearch={this.performSearch} />
         
         {
           (this.state.loading)
           ? <p>Loading...</p>
           : <PhotoList 
                data={this.state.photos} 
                loading={this.state.loading} 
                searchTitle={this.state.searchTitle}
                />
           }
          <Switch>
          <Route path="/sunsets" render={ () => this.performSearch('sunsets') } />
          <Route path="/galaxies" render={ () => this.performSearch('galaxy') } />
          <Route path="/dogs" render={ () => this.performSearch('dogs') } />s
          <Route component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;