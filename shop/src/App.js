import { Routes, Route, Link } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/"></Link>
        <Link to="/ProductDetail"></Link>
        <Link to="/About"></Link>
      </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ProductDetail' element={<ProductDetail />} />
      <Route path='/About' element={<About />} />
    </Routes>
    </div>
  );
}

export default App;
