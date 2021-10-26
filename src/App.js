import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting = 'soy un contenedor'/>
    </div>
  );
}

export default App;
