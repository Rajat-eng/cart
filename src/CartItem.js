import React from "react";


class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            title:'phone',
            price:999,
            qty:1,
            img:''
        }
    }

    increaseQuantity=()=>{

        // this.setState({
        //     title:"some new Title"
        // })
        this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }
        },
        ()=>{
            console.log('state',this.state)
        })

    }

    decreaseQuantity=()=>{
        const {qty}=this.state;
        if(qty===0){
            return;
        }

        this.setState((prevState)=>{
            return {
                qty:prevState.qty-1
            }
        },
        ()=>{
            console.log('state',this.state)
        })
    }

    render(){
        const{title,price,qty}=this.state
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}></img>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* {buttons} */}
                    <img alt="increase" onClick={this.increaseQuantity}className="action-icons" src="https://cdn-icons.flaticon.com/png/512/4315/premium/4315609.png?token=exp=1659449720~hmac=0c2f54ea3786f5feaf4752ba97b4d01f" ></img>
                    <img alt="decrease" onClick={this.decreaseQuantity}className="action-icons"src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1659451274~hmac=ba1b97b12c9d02cd9bbc970c1a5f8734"></img>
                    <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img>
                    </div>
                </div>
            </div>
        );
    }  
}

const styles={
    image:{
        height:130,
        width:130,
        borderRadius:4,
        background:'grey'
    }
}

export default CartItem;