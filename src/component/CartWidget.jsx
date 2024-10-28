import React from 'react';  

const CartWidget = () => {  
    const notificationCount = 7;  

    return (  
        <div style={styles.cartWidget}>  
            <span style={styles.cartIcon}>🛒</span>  
            {notificationCount > 0 && (  
                <span style={styles.notificationBubble}>{notificationCount}</span>  
            )}  
        </div>  
    );  
};  

const styles = {  
    cartWidget: {  
        position: 'relative',  
        cursor: 'pointer',  
    },  
    cartIcon: {  
        fontSize: '24px',  
    },  
    notificationBubble: {  
        position: 'absolute',  
        top: '0px',  
        right: '-10px',  
        backgroundColor: 'red',  
        color: 'white',  
        borderRadius: '50%',  
        padding: '2px 6px',  
        fontSize: '12px',  
    },  
};  

export default CartWidget;