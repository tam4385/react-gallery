import React from 'react';
import Photo from './Photo';


const PhotoList = (props) => {
  const results = props.data;
  let photos = results.map(result => 
    <Photo
    key={result.id}
    url={`https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`}
    />
  );
  console.log(photos)
  return(
    <div className="photo-container">
      <h2>Results</h2>
        <ul>
          { photos }
        </ul>
        {/* <!-- Not Found --> */}
          {/* <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li> */}
    </div>
    );
  }


export default PhotoList;
