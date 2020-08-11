import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div>
            <img alt='gallery' className="w-10" src='https://img.etimg.com/thumb/msid-68721417,width-1070,height-580,imgsize-1016106,overlay-etpanache/photo.jpg' />
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;