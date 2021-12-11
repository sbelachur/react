import './App.css';
import ItemListContainer from './ItemListContainer';
import {NavBar} from './componentes/NavBar/NavBar'

const productos = ['producto1', 'producto2']

function App () {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo= 'Estoy en el item List'
                          productos = {productos} />
    
    </div>
  )
}

export default App;
