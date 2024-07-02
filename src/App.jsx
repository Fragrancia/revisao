import './App.css'
import Home from "./screens/Home"
import PaginaCachorro from './screens/PaginaCachorro'
import PaginaCep from "./screens/PaginaCep"
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pagina-cachorro" element={<PaginaCachorro />}/>
        <Route path="/buscar-cep" element={<PaginaCep />}/>
      </Routes>
    </Router>
  )
}

export default App
