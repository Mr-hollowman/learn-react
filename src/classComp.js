import React, { Component } from 'react';
import Child from './Child';

class ClassComp extends Component {
    constructor(){
        super()
        this.state={rno:1, name:'kavi',name2:''}
    }
    updateName=(uName)=>{
        this.setState({name:uName})
    }
    render() {
        return (
            <div>
                {this.state.name}
                {/* <input onChange={(e)=>this.setState({name2:e.target.value})}></input>
                <button onClick={()=>this.updateName(this.state.name2)}>selva</button> */}
            <Child updateName2={this.updateName}></Child>
            </div>
        );
    }
}

export default ClassComp;