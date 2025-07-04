
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeLayout } from './pages/Home/Home'
import { PokemonDetailLayout } from './pages/PokemonDetail/PokemonDetail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/pokemon/:id" element={<PokemonDetailLayout/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App