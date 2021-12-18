import {BrowserRouter, Switch, Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Form from './components/Form/Form'
import CartContextProvider from './context/CartContext'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <ItemListContainer greeting = 'Productos'/>
            </Route>
            <Route exact path='/category/:categoryID'>
              <ItemListContainer greeting = 'Productos: '/>
            </Route>
            <Route exact path='/detail/:productID' component={ItemDetailContainer}/>
            <Route exact path='/cart' component={Cart}/>
            <Route exact path='/form' component={Form}/>
          </Switch>
        </div>
      </BrowserRouter>
    </CartContextProvider>
      
  );
}

export default App;
