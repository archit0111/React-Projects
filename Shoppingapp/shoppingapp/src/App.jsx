import Shopping from './Shopping'
import Cart from './Cart';
import Wishlist from './Wishlist';
import Account from './Account';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Shopping/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/account' element={<Account/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
