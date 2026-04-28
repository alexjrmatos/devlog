import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import NewEntry from './pages/NewEntry'

function App() {
  return (
    <BrowserRouter>
      <header>
        <a href="/" className="logo">
          <span>&gt;_</span> DevLog
        </a>
        <nav>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Entradas
          </NavLink>
          <NavLink to="/nova" className={({ isActive }) => isActive ? 'active' : ''}>
            Nova Entrada
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nova" element={<NewEntry />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App