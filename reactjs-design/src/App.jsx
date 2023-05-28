import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import DashBoard from './components/DashBoard';
import FriendsPage from './components/FriendsPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DashBoard/>}/>
      <Route path='/friends' element={<FriendsPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;