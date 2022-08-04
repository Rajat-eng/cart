import React from "react";






const CartItem =(props)=>{
    
        const{title,price,qty,img}=props.product
        const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={img}></img>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* {buttons} */}
                    <img alt="increase" onClick={()=>onIncreaseQuantity(product)} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/753/753317.png"></img>
                    <img alt="decrease" onClick={()=>onDecreaseQuantity(product)} className="action-icons" src="https://cdn-icons.flaticon.com/png/512/4366/premium/4366892.png?token=exp=1659618819~hmac=1b80405f99d689e4ea91372d3730dc7e"></img>
                    <img alt="delete" onClick={()=>onDeleteProduct(product.id)}className="action-icons" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img>
                    </div>
                </div>
            </div>
        ); 
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