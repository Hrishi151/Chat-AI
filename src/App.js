import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
