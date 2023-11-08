import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
 