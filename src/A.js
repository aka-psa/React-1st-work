import React from "react";

class A extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
                a:2,
                b:5,
                c:8,
                d:10
        };
    }

    changeA=()=>{
        this.setState({a:Math.floor(Math.random()*100)});
    }
    changeB=()=>{
        this.setState({b:Math.floor(Math.random()*100)});
    }
    changeC=()=>{
        this.setState({c:Math.floor(Math.random()*100)});
    }
    changeD=()=>{
        this.setState({d:Math.floor(Math.random()*100)});
    }
    render(){
        var a=this.state.a;
        var b=this.state.b;
        var c=this.state.c;
        var d=this.state.d;
        var ans=a+b+c+d;
        return(
            <>
                <h1>Formula:</h1>
                <h3>a+b+c+d= {ans}</h3>
                <h3>a: {this.state.a}</h3>
                <h3>b: {this.state.b}</h3>
                <h3>c: {this.state.c}</h3>
                <h3>d: {this.state.d}</h3>
                <button onClick={this.changeA}>Generate A value</button>
                <button onClick={this.changeB}>Generate B value</button>
                <button onClick={this.changeC}>Generate C value</button>
                <button onClick={this.changeD}>Generate D value</button>
            </>
        );
    }
}

export default A;