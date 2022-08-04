import React from "react";

const Navbar =(props)=>{

        return(
            <div style={styles.nav}>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png" style={styles.cartIcon}></img>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        )
    
}

const styles = {
    cartIcon: {
      height: 30,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -5
    }
  };

export default Navbar;