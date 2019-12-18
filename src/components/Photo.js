import React from 'react';

//contains the blueprint of each image

const Photo = props => (
    <li><a 
        href={props.url} 
        target="_blank" 
        rel="noopener noreferrer"> <img src={ props.url } alt={props.title} /></a></li>    
)

export default Photo;