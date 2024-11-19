import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App