import React from "react";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <div className="h-[400px] bg-fuchsia-200"></div>
      <div className="h-[400px] bg-fuchsia-300"></div>
      <div className="h-[400px] bg-fuchsia-400"></div>
      <div id='about' className="h-[400px] bg-fuchsia-500"></div>
      <div className="h-[400px] bg-fuchsia-600"></div>

    </>
  );
}

export default App;
