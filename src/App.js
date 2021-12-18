//padre de todo 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer';
import {NavBar} from './componentes/NavBar/NavBar'


function App () {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>
      
    
    </div>
  )
}

export default App;
