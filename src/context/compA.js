import React from 'react';
import {context} from './context'
function CompA(props) {
    return (
        <div>
            in a {context}
        </div>
    );
}

export default CompA;