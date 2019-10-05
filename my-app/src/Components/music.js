import React from 'react';
import SubNav from './subNav';

const Music = (props) => {
    return(
        <div>
            <SubNav items={props.items}/>
        </div>
    )
}

export default Music;