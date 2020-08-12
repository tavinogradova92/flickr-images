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
            photographs: {},
            searchfield: ''
        }
    }

    componentDidMount() {
        
        fetch('https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=5864e80be4c75fc9597008ec8128e491&gallery_id=72157715438869218&format=json&nojsoncallback=1&api_sig=893a3d8b75616dd3cec20c216ca7e6e0')
        .then(response => {
            return response.json();
        })
        .then(photographs => {
            this.setState({ photographs: photographs })
        })
        
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        
        const { photographs, searchfield } = this.state;


        const filteredPhotos = photographs.photos.photo.filter(i => {
            return i.title.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        
        if (!photographs.length) {
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