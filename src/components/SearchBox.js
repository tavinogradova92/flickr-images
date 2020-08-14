import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa1'>
            <input 
                className='pa2 ba b--grey'
                type='search' 
                placeholder='search photos' 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;