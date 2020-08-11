import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            photos: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            return response.json();
        })
        .then(photos => {
            this.setState({ photos: photos })
        })
        
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredPhotos = this.state.photos.filter(photos => {
            return photos.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.photos.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Flickr Gallery Imitator</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList photos={filteredPhotos}/>
                    </Scroll>
                </div>
            );
        }
    } 
}

export default App;