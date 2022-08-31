//Components
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './containers/ItemListContainer';
//Estilos
import './App.css';


function App(){
  return(
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = "Hola Mundo"/>
    </div>
  ) ;
}

export default App;
