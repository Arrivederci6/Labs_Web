import './App.css';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import GoodDetails from './pages/Catalog/components/Goods/GoodDetails';
import { goodsData } from './pages/Catalog/components/Goods/Goods';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/catalog' Component={Catalog} />
        <Route path='/catalog/:id' element={<GoodDetails id={useParams().id} />} />
      </Routes>
    </Router>
  );
}

export default App;
