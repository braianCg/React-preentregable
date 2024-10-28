import React from 'react';  
import NavBar from './NavBar';  
import ItemListContainer from './ItemListContainer';  

function App() {  
    return (  
        <div>  
            <NavBar />  
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />  
        </div>  
    );  
}  

export default App;