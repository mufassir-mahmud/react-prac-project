import React, { useState } from 'react';
import { Link, } from 'react-router-dom';

const FurnitureCArd = (props) => {
 
//    const [furnitureName, setFurnitureName] = useState('');
    return (
        <Link to={'/furnitureDetails/'+props.id+'/'+props.name}>
        <div className='bg-purple-400 rounded-lg p-10'>
            <h1>{props.name}</h1>
            <h1>{props.id}</h1>
            <h1>{props.price}</h1>
        </div>

        </Link>
        
    );
};

export default FurnitureCArd;