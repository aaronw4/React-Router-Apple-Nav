import React from 'react';
import {Link} from 'react-router-dom';

export default function SubNav(props){    

    return(
        <div className='subMenu'>
            {props.items.map(listing => (
                <div className='diplayItems'>
                    <Link to='#' className='link2'>
                    <img src={listing.url}/>                    
                    <p>{listing.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

