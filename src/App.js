import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { photos } from './photos';
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            photos: photos,
            searchfield: ''
        }
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }

    render() {
        const filteredPhotos = this.state.photos.filter(photos => {
            return photos.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>Flickr Gallery Imitator</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList photos={filteredPhotos}/>
            </div>
        );
    }
    
}

export default App;