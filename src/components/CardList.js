import React from 'react';
import Card from './Card';

const CardList = ({ photographs }) => {
        return (
            <div>
                {
                    photographs.map((user, i) => {
                        return (
                            <Card 
                                key={i}
                                url={`https://www.flickr.com/photos/bowside/${photographs.photos.photo[i].id}/in/gallery-flickr-72157715438869218/`} 
                                id={photographs.photos.photo[i].id} 
                                title={photographs.photos.photo[i].title}
                            />
                        );
                    })
                }
            </div>
        );
}

export default CardList;