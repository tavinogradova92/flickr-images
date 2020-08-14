import React from 'react';
import './Card.css';

const Card = ({title, id, url }) => {
    return (
        <div className='column dib ma2 grow shadow-5'>
            <img
                alt={title}  
                src={url}
            />
        </div>
    );
}

export default Card;