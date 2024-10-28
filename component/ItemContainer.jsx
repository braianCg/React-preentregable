import React from 'react';  

const ItemListContainer = ({ greeting }) => {  
    return (  
        <div style={styles.container}>  
            <h2>{greeting}</h2>  
            <p>Aquí se mostrarían los items en una lista.</p>  
        </div>  
    );  
};  

const styles = {  
    container: {  
        padding: '20px',  
        textAlign: 'center',  
        border: '1px solid #ccc',  
        margin: '20px',  
    },  
};  

export default ItemListContainer;