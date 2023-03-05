import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import store from './Store/store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      </Provider> 
    </div>
  );
}

export default App;
