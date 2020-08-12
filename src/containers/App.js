import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
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
        const { photos, searchfield } = this.state;
        const filteredPhotos = photos.filter(photo => {
            return photo.title.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!photos.length) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Flickr Gallery Imitator</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList photos={filteredPhotos}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    } 
}

export default App;