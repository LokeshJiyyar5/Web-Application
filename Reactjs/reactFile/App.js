import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homer from './Homer'
import Order from './Order'
const App = () => {
  return (
    <div>
      <h1 className='ceneter' color='red'> ........TLJ Food Express.......</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homer/>}></Route>
        <Route path='Order' element={<Order/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App