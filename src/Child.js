import React, { Component } from 'react';

class Child extends Component {
    constructor(){
        super();
        this.state={name:''}
    }
    updateName3=(uName)=>this.props.updateName2(uName)
    render() {
        return (
            <div>
                <input onChange={(e)=>this.setState({name:e.target.value})}></input>
                <button onClick={()=>this.updateName3(this.state.name)}>selva</button>
            </div>
        );
    }
}

export default Child;