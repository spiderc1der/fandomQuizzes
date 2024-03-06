
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Undertale } from './pages/Undertale'


import './App.css'

function App() {

 
  return(
    <Router>
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="/undertale" element ={<Undertale/>}/>

      </Routes>
    </Router>
  )
  
}

export default App
