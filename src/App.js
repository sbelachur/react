//padre de todo
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer';
import {NavBar} from './components/NavBar/NavBar'
import {BrowserRouter as Router ,Routes, Route, Navigate} from 'react-router-dom'; 


function App () {

  return (
    <div className="App">
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:catId" element= {<ItemListContainer greeting={'Filtrado'}/>}/>
            <Route path="product/:itemId" element= {<ItemListContainer />} />
            <Route path="*" element= {<Navigate to="/" />} />
          </Routes>
      </Router>
      
    
    </div>
  );
}

export default App;
