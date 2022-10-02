import { Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ProductDetail/:id' element={<ProductDetail></ProductDetail>} />
      <Route path='/About' element={<About />} />
    </Routes>
    </div>
  );
}

export default App;
