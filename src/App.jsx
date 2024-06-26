
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Games } from './pages/Games'
import { Movies } from './pages/Movies'
import { Books } from './pages/Books'
import { Shows } from './pages/Shows'
import { Undertale } from './pages/Undertale'

import './App.css'

function App() {
 
  return(
    <Router>
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="/undertale" element ={<Undertale/>}/>
        <Route path = "/gameQuizzes" element = {<Games/>}></Route>
        <Route path = "/movieQuizzes" element = {<Movies/>}></Route>
        <Route path = "/bookQuizzes" element = {<Books/>}></Route>
        <Route path = "/showQuizzes" element = {<Shows/>}></Route>

      </Routes>
    </Router>
  )
  
}

export default App
