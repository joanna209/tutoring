import "bootstrap/dist/css/bootstrap.min.css"; // required to import to use bootstrap
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Post from './pages/PostDetails';
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <BrowserRouter >
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/post/:postId" element={<Post />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
