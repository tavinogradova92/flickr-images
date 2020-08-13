import React from 'react';
import Card from './Card';

const CardList = ({ photos_arr }) => {

        return (
            <div>
                {
                    photos_arr.map((user, i) => {
                        return (
                            <Card 
                                key={i}
                                url={`https://farm${photos_arr[i].farm}.staticflickr.com/${photos_arr[i].server}/${photos_arr[i].id}_${photos_arr[i].secret}.jpg`} 
                                id={photos_arr[i].id} 
                                title={photos_arr[i].title}
                            />
                        );
                    })
                }
            </div>
        );
}

export default CardList;