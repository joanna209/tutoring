import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './pages/Game'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/game" element={<Game />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
