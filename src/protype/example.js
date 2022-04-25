// import React, { useState } from 'react';
// // import { ReactPropTypes } from 'react';

// function Example(props) {
    //     const [name,setName]=useState();
    //     const [age,setAge]=useState();
    //     return (
        //         <div>
        //             <input placeholder='enter your name' onChange={(e)=>setName(e.target.value)}></input>
        //             <input placeholder='enter your Age' onChange={(e)=>setAge(e.target.value)} />
        //             Your name is {name}
        //             Your age is {age}
        //         </div>
        //     );
        // }
        
        
        // export default Example;
        import React, { Component } from 'react';
        import PropTypes from 'prop-types';

class Example extends Component {
    constructor(){
        super();
        this.state={name:''}
    }
    render() {
        console.log(this.state.name);
        return (
            <div>
                <input type='text' placeholder='enter your name' onChange={(e)=>this.setState({name:e.target.value})}></input>
                {/* <input placeholder='enter your Age' onChange={(e)=>this.store(e.target.value)} /> */}
                Your name is {this.state.name}<br></br>
                props:{this.props.selva}
            </div>
        );
    }
}
Example.propTypes={selva:PropTypes.number}

export default Example;