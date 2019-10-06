import React from 'react';
import SubNav from './subNav';

const Ipad = (props) => {
    return(
        <div>
            <SubNav items={props.items} name={props.name}/>
        </div>
    )
}

export default Ipad;