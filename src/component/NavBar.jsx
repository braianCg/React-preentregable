import React from 'react';  
import CartWidget from './CartWidget';  

const NavBar = () => {  
    return (  
        <nav style={styles.navbar}>  
            <ul style={styles.list}>  
                <li style={styles.listItem}>Categoría 1</li>  
                <li style={styles.listItem}>Categoría 2</li>  
                <li style={styles.listItem}>Categoría 3</li>  
            </ul>  
            <CartWidget />  
        </nav>  
    );  
};  

const styles = {  
    navbar: {  
        display: 'flex',  
        justifyContent: 'space-between',  
        alignItems: 'center',  
        padding: '1rem',  
        backgroundColor: '#282c34',  
        color: 'white',  
    },  
    list: {  
        display: 'flex',  
        listStyleType: 'none',  
        margin: 0,  
        padding: 0,  
    },  
    listItem: {  
        margin: '0 15px',  
        cursor: 'pointer',  
    },  
};  

export default NavBar;