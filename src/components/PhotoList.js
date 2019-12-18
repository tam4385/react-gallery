import React from 'react';
import Photo from './Photo';


const PhotoList = (props) => {
  const results = props.data;
  let photos;
  //if statement to check the search has returned results
  if (results.length > 0) {
    photos = results.map(result => 
      <Photo
      key={result.id}
      url={`https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`}
      title={result.title}
      />
    );
    //else render a no results found heading if the search results = 0
  } else {
    photos =  (
    <li className="not-found">
     <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
   </li>);
  }

  return(
    <div className="photo-container">
      <h2>{ props.searchTitle }</h2>
        <ul>
          { photos }
        </ul>
    </div>
    );
  }


export default PhotoList;
