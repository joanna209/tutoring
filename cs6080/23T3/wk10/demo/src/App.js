import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Game from './pages/Game';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
