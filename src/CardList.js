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
                                id={photos[i].id} 
                                name={photos[i].name} 
                                email={photos[i].email}
                            />
                        );
                    })
                }
            </div>
        );
}

export default CardList;