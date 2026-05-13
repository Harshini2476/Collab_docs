import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Document from "./pages/Document";

function App() {
  return (
    <HashRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/document/:id" element={<Document />} />

      </Routes>

    </HashRouter>
  );
}

export default App;
