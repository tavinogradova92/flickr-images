import React from 'react';
import Card from './Card';

const CardList = ({ photos }) => {
        return (
            <div>
                {
                    photos.map((user, i) => {
                        return (
                            <Card 
                                key={i}
                                url={photos[i].url} 
                                id={photos[i].id} 
                                title={photos[i].title}
                            />
                        );
                    })
                }
            </div>
        );
}

export default CardList;