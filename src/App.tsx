
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeLayout } from './pages/Home/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/pokemon/:id" element={<></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App