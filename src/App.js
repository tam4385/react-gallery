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
    // axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e4df41c24a840c724e3b3bbf74d673d2&tags=sunsets&per_page=24&format=json&nojsoncallback=1')
    // .then(response => {
    //   this.setState({ photos: response.data.photos.photo })
    // })
    // .catch(error => {
    //   console.log('Error catching and parsing data', error)
    // });
  };

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e4df41c24a840c724e3b3bbf74d673d2&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
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
         <Nav />
         <PhotoList data={this.state.photos} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;