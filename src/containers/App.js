import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
              photographs: {}
            , searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=fd480d49ddad70072e137f3b8ad1f8c1&gallery_id=72157713471498036&format=json&nojsoncallback=1')
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
        console.log('Knock knock!')
        console.log(photographs)
        if (!photographs.hasOwnProperty('photos') ) {
            return <h1>Loading Data...</h1>
        }

        const photos_arr = photographs.photos.photo;
       
        const filteredPhotos = photos_arr.filter(i => {
            return i.title.toLowerCase().includes(searchfield.toLowerCase());
        })
     
        if (!photos_arr.length) {
            return <h1>Loading...</h1>
        } else {
            console.log('Print filtered')
            console.log(filteredPhotos)
            return (
                <div className='tc'>
                    <h1 className='f3 f2-m f2-l'>Flickr Gallery Imitator</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList photos_arr={filteredPhotos}/>
                        </ErrorBoundry>
                    </Scroll>
                    <Footer/>
                </div>
            );
        }
    } 
}

export default App;