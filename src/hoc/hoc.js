import React, { useState } from "react";

const Hoc =(Oc)=>{
    class Ec extends React.Component{
        constructor(){
            super();
            this.state={count:10}
        }
        incre=()=>{
            this.setState({count:this.state.count+1})
        }
        reset=()=>{
            this.setState({count:10})
        }
        render(){
        return(
            <Oc incre={this.incre} count={this.state.count} reset={this.reset}></Oc>
        );}
    }
    return Ec;
}
export default Hoc;