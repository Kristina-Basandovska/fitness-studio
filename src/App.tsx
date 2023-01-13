import React from "react";
import { Header } from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { Test } from "./components/test/Test";
import { Login } from "./components/Login/Login";
import { NotFound } from "./components/NotFound/NotFound";
import { About } from "./components/About/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
