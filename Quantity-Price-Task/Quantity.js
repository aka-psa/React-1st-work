import React from "react";
import Price from "./Product-price";
class Quantity extends React.Component{
   state={
    q:1,
    data:859
   }

    change = () => {  
        this.setState({data:859*this.state.q}); 
    }
    
    add=()=>{
        this.setState({q:this.state.q+1});
    }
    sub=()=>{
       if(this.state.q>1) 
            this.setState({q:this.state.q-1});
        else
            this.setState({q:1});
    }
    render(){
        return(
            <>
                <div class="quantity">
                    
                    <button onClick={this.add}> + </button> <span>Quantity: {this.state.q}</span> <button onClick={this.sub}> - </button>
                    <button  id="priv" onClick={this.change} type="button">Generate Price</button>
                </div>
                <div class="price">
                    <h4>Rs.<Price data={this.state.data} /></h4> 
                </div>
            </>
        );
    }
 }
export default Quantity;