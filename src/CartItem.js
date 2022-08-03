import React from "react";


class CartItem extends React.Component{
    render(){
        const{title,price,qty}=this.props.product
        const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=this.props
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
                    <img alt="increase" onClick={()=>onIncreaseQuantity(product)} className="action-icons" src="https://cdn-icons.flaticon.com/png/512/4315/premium/4315609.png?token=exp=1659449720~hmac=0c2f54ea3786f5feaf4752ba97b4d01f"></img>
                    <img alt="decrease" onClick={()=>onDecreaseQuantity(product)} className="action-icons" src="https://cdn-icons.flaticon.com/png/512/4315/premium/4315581.png?token=exp=1659533280~hmac=feee682c4eb3b925dbde72db08476af7"></img>
                    <img alt="delete" onClick={()=>onDeleteProduct(product.id)}className="action-icons" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img>
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