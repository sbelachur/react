//padre de todo
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router ,Routes, Route, Navigate} from 'react-router-dom'; 
import {CartProvider} from './context/CartContext';
import Cart from './components/Cart';


function App () {

  return (
    <div className="App">
      <Router>
      <CartProvider>
        <NavBar />
        
          <Routes>
            
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:catId" element= {<ItemListContainer />}/>
            <Route path="product/:itemId" element= {<ItemListContainer />} />
            <Route path='/cart' element={<Cart />}/>
            <Route path="*" element= {<Navigate to="/" />} />
            
          </Routes>
          </CartProvider>
      </Router>
     
      
    
    </div>
  );
}

export default App;
