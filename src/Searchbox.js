import React from 'react';

const Searchbox = ({searchChange}) => {

    return(
            <div className=' '>
                <input className='bg-light-blue pa3 ba ml3 w-80 mr5'
                        type='search'
                        placeholder='Search parts'
                        onChange={searchChange}/>
            </div>
    );
}

export default Searchbox;