import React from 'react';
import SubNav from './subNav';

const Iphone = (props) => {
    return(
        <div>
            <SubNav items={props.items}/>
        </div>
    )
}

export default Iphone;