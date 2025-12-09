import Home from './pages/Home/home.jsx'
import ProdutoPage from './pages/Product/product.jsx'
import Erro from './pages/Erro/erro.jsx'
import About from './Components/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Erro />} />
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<ProdutoPage />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
