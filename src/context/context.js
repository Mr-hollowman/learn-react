import React,{useContext,createContext,useState} from 'react';
import CompA from './compA';
    export var context=createContext();
    context=31;
function Context(props) {
    return (
        <div>
            {context}
            <CompA></CompA>
        </div>
    );
}

export default Context;