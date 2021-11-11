import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting = 'soy un contenedor'/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
