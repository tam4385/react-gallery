import React from 'react';

//New feature- BASIC HEADER TO HOLD APP TITLE and TRADEMARK
const Header = () => {
    return(
        <div className="header">
            <div className="trademark">
            <p classname="trademark">A Thomas McVay and Treehouse Project</p>    
            </div>
            <h1 className="title"><em>Tropic Search</em></h1>
            <p className="flicker-p"><em>Brought to you by Flickr</em></p>
        </div>
    );
}
export default Header;