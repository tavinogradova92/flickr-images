import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { photos } from './photos';

const App = () => {
    return (
        <div className='tc'>
            <h1>Flickr Gallery Imitator</h1>
            <SearchBox />
            <CardList photos={photos}/>
        </div>
        
    )
}

export default App;