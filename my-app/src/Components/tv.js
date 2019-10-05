import React from 'react';
import SubNav from './subNav';

const Tv = (props) => {
    return(
        <div>
            <SubNav items={props.items}/>
        </div>
    )
}

export default Tv;