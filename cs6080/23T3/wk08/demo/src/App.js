import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Post from './pages/Post';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    // component library used is chakra ui https://chakra-ui.com/
    <ChakraProvider>
      {/* auth provider context */}
      <AuthProvider>
        {/* setup routing to be / separated and allows react to choose 
        which component to render based on the url */}
        {/* with https://reactrouter.com/en/main */}
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/post/:postId" element={<Post />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
