import React from 'react';
import './Card.css';

const Card = ({title, id, url }) => {
    return (
        <div 
            className='tc dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img   
                    alt={title}  
                    src={url} />
                <div>
                    <h2>{title}</h2>
                </div>
        </div>
    );
}

export default Card;