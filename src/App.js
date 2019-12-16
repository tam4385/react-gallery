import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Switch 
 } from 'react-router-dom';
 import axios from 'axios';

//API KEY
import apiKey from './config';

//import components
import Search from './Search';
import Nav from './Nav';
import PhotoList from './PhotoList';
// import NotFound from './NotFound';
import Header from './Header'

class App extends Component {

  constructor() {
    super()
    this.state = { 
      photos: [],
      loading: true
     }
  };

  componentDidMount() {
    // this.performSearch('sunset');
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
         <Header /> 
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
          <Route path="/rainforest" render={ () => this.performSearch('rainforest') } />
          <Route path="/night-sky" render={ () => this.performSearch('night sky') } />
          <Route path="/waterfall" render={ () => this.performSearch('waterfall') } />
          <Route exact path="/search" render={ () => this.performSearch('green') } />
          {/* <Route component={ NotFound } /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;